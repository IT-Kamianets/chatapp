import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";

const Chat = ({ chatId, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState(["user1", "user2"]);
  const [selectedUser, setSelectedUser] = useState(currentUser);

  useEffect(() => {
    const chatRef = doc(db, "chats", chatId);

    const unsubscribe = onSnapshot(chatRef, (chatDoc) => {
      if (chatDoc.exists()) {
        const chatData = chatDoc.data();
        setMessages(chatData.messages || []);
      }
    });

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const chatRef = doc(db, "chats", chatId);

    await updateDoc(chatRef, {
      messages: arrayUnion({
        message: newMessage,
        postedAt: Timestamp.now(),
        userId: selectedUser,
      }),
    });

    setNewMessage("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full py-20 bg-gray-200">
      <div className="mb-4">
        <label className="mr-2 text-xl font-bold">Select User:</label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          {users.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md h-96 border rounded-xl border-gray-300 p-2 overflow-y-auto bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-[60%] ${
              msg.userId === selectedUser ? "bg-green-100 self-end" : "bg-red-100"
            }`}
          >
            <strong>{msg.userId === selectedUser ? "You" : msg.userId}:</strong>
            <p>{msg.message}</p>
            <small className="text-gray-500">
              {new Date(msg.postedAt.seconds * 1000).toLocaleString()}
            </small>
          </div>
        ))}
      </div>

      <form className="flex w-full max-w-md mt-2" onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg p-2 hover:bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
