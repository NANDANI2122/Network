import { useEffect, useState } from "react";
import RegisterPage    from "./pages/RegisterPage";
import LoginPage       from "./pages/LoginPage";
import JoinSessionPage from "./pages/JoinSessionPage";
import DashboardPage   from "./pages/DashboardPage";
import "./App.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [page, setPage] = useState(() => {
    const savedUser = localStorage.getItem("user");
    const savedSession = localStorage.getItem("sessionInfo");
    if (savedUser && savedSession) return "dashboard";
    return savedUser ? "join-session" : "register";
  });
  const [sessionInfo, setSessionInfo] = useState(() => {
    const saved = localStorage.getItem("sessionInfo");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (sessionInfo) {
      localStorage.setItem("sessionInfo", JSON.stringify(sessionInfo));
    } else {
      localStorage.removeItem("sessionInfo");
    }
  }, [sessionInfo]);

  function handleRegisterSuccess(user) {
    setCurrentUser(user);
    setPage("join-session");
  }

  function handleLoginSuccess(user) {
    setCurrentUser(user);
    setPage("join-session");
  }

  function handleJoinSession(sid, requirement, sessionInterests, expiresAt) {
    setSessionInfo({ sessionId: sid, requirement, sessionInterests, expiresAt });
    setPage("dashboard");
  }

  // ✅ Sirf session leave — user logged in rehta hai
  function handleLeaveSession() {
    setSessionInfo(null);
    setPage("join-session");
  }

  // ✅ Logout — localStorage clear, register page pe
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("sessionInfo");
    setCurrentUser(null);
    setSessionInfo(null);
    setPage("register");
  }

  return (
    <>
      {page === "register" && (
        <RegisterPage onRegisterSuccess={handleRegisterSuccess} onGoToLogin={() => setPage("login")} />
      )}
      {page === "login" && (
        <LoginPage onLoginSuccess={handleLoginSuccess} onGoToRegister={() => setPage("register")} />
      )}
      {page === "join-session" && currentUser && (
        <JoinSessionPage
          currentUser={currentUser}
          onJoinSuccess={handleJoinSession}
          onLogout={handleLogout}
        />
      )}
      {page === "dashboard" && currentUser && sessionInfo && (
        <DashboardPage
          currentUser={currentUser}
          sessionId={sessionInfo.sessionId}
          requirement={sessionInfo.requirement}
          sessionInterests={sessionInfo.sessionInterests}
          expiresAt={sessionInfo.expiresAt}
          onLeaveSession={handleLeaveSession}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}
