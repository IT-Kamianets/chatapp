import React, { useState } from "react";
import './index.css'; // Ensure this includes Tailwind directives
import Chat from "./components/Chat";
import ChatSelector from "./components/ChatSelector";

const App = () => {
  const [currentChatId, setCurrentChatId] = useState(null);
  const currentUser = "user1"; // Current user for example
  const users = [
    { id: "user1", name: "User 1" },
    { id: "user2", name: "User 2" },
  ];

  const handleSelectChat = (userId) => {
    const chatId = `mkBTbGXedTvxIwfrAFDD`; // Create a unique chatId based on userId
    setCurrentChatId(chatId);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">Chat App</h1>
      {currentChatId ? (
        <Chat chatId={currentChatId} currentUser={currentUser} />
      ) : (
        <ChatSelector users={users} onSelect={handleSelectChat} />
      )}
    </div>
  );
};

export default App;
