// ─────────────────────────────────────────────
//  controllers/chatController.js
//  Message bhejna aur messages fetch karna
// ─────────────────────────────────────────────

import Message    from "../models/Message.js";
import Connection from "../models/Connection.js";
import Notification from "../models/Notification.js";
import User from "../models/User.js";

async function createNotification({ userId, senderId, sessionId, type, message }) {
  if (!userId || !senderId || userId.toString() === senderId.toString()) return;

  await Notification.create({
    userId,
    senderId,
    sessionId,
    type,
    message,
  });
}

// ── SEND MESSAGE ──
// POST /api/chat/send
export async function sendMessage(req, res) {
  try {
    const { sessionId, toUserId, text } = req.body;
    const fromUserId = req.user.userId;

    if (!sessionId || !toUserId || !text) {
      return res.status(400).json({ message: "sessionId, toUserId, and text are required." });
    }

    // Pehle check karo ki dono connected hain is session mein
    const isConnected = await Connection.findOne({
      sessionId,
      $or: [
        { user1Id: fromUserId, user2Id: toUserId },
        { user1Id: toUserId,   user2Id: fromUserId },
      ],
    });

    if (!isConnected) {
      return res.status(403).json({ message: "You are not connected with this user in this session." });
    }

    // Message save karo
    const message = new Message({ sessionId, fromUserId, toUserId, text });
    await message.save();

    const sender = await User.findById(fromUserId).select("name");
    await createNotification({
      userId: toUserId,
      senderId: fromUserId,
      sessionId,
      type: "message",
      message: `${sender?.name || "Someone"} sent you a message.`,
    });

    res.status(201).json({ success: true, message: "Message sent." });
  } catch (err) {
    console.error("Send message error:", err);
    res.status(500).json({ message: "Server error." });
  }
}

// ── GET MESSAGES ──
// GET /api/chat/messages?sessionId=XXX&withUserId=YYY
export async function getMessages(req, res) {
  try {
    const { sessionId, withUserId } = req.query;
    const myUserId = req.user.userId;

    if (!sessionId || !withUserId) {
      return res.status(400).json({ message: "sessionId and withUserId are required." });
    }

    // Dono taraf ke messages fetch karo (meri taraf se aur unki taraf se)
    const messages = await Message.find({
      sessionId,
      $or: [
        { fromUserId: myUserId,  toUserId: withUserId },
        { fromUserId: withUserId, toUserId: myUserId  },
      ],
    }).sort({ createdAt: 1 }); // purane pehle

    // Frontend ke liye format karo
    const formatted = messages.map((msg) => ({
      id:     msg._id,
      text:   msg.text,
      fromMe: msg.fromUserId.toString() === myUserId,
      time:   msg.createdAt,
    }));

    res.json({ success: true, messages: formatted });
  } catch (err) {
    console.error("Get messages error:", err);
    res.status(500).json({ message: "Server error." });
  }
}

// ── CONNECT WITH USER ──
// POST /api/chat/connect
// Jab user "Connect" button dabaata hai
export async function connectWithUser(req, res) {
  try {
    const { sessionId, targetUserId } = req.body;
    const myUserId = req.user.userId;

    if (!sessionId || !targetUserId) {
      return res.status(400).json({ message: "sessionId and targetUserId are required." });
    }

    // Pehle check karo ki connection pehle se hai to nahi
    const existing = await Connection.findOne({
      sessionId,
      $or: [
        { user1Id: myUserId,     user2Id: targetUserId },
        { user1Id: targetUserId, user2Id: myUserId     },
      ],
    });

    if (existing) {
      return res.json({ success: true, message: "Already connected." });
    }

    // New connection save karo
    const connection = new Connection({
      sessionId,
      user1Id: myUserId,
      user2Id: targetUserId,
    });

    await connection.save();

    const sender = await User.findById(myUserId).select("name");
    await createNotification({
      userId: targetUserId,
      senderId: myUserId,
      sessionId,
      type: "connect",
      message: `${sender?.name || "Someone"} wants to connect with you!`,
    });

    res.status(201).json({ success: true, message: "Connected successfully." });
  } catch (err) {
    console.error("Connect error:", err);
    res.status(500).json({ message: "Server error." });
  }
}
