import React from "react";
import { Link, Outlet } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <header className="message-header">
        <Link to="/message/join">加入我们</Link>
        <Link to="/message/us">联系我们</Link>
      </header>
      <main className="message-main">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Message;
