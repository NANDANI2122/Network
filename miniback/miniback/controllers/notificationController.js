import Notification from "../models/Notification.js";

export async function getNotifications(req, res) {
  try {
    const userId = req.user.userId;

    const notifications = await Notification.find({ userId })
      .sort({ createdAt: -1 })
      .limit(20)
      .select("message type read createdAt sessionId");

    res.json({
      success: true,
      notifications: notifications.map((item) => ({
        id: item._id,
        message: item.message,
        type: item.type,
        read: item.read,
        createdAt: item.createdAt,
        sessionId: item.sessionId,
      })),
    });
  } catch (err) {
    console.error("Get notifications error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
}

export async function markNotificationsRead(req, res) {
  try {
    const userId = req.user.userId;

    await Notification.updateMany(
      { userId, read: false },
      { $set: { read: true } }
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Mark notifications read error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
}
