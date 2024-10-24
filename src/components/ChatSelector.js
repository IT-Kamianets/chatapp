import React from "react";

const ChatSelector = ({ users, onSelect }) => {
  return (
    <div className="flex-col justify-between">
      <h2 className="text-xl">Select a user to chat</h2>
      <div className="flex justify-between pt-3">
      {users.map((user) => (
        <button type="submit" key={user.id} onClick={() => onSelect(user.id)} className="bg-purple-100 border-2 rounded-md border-purple-500 text-purple-700 font-bold p-2">
          {user.name}
        </button>
      ))}
      </div>

    </div>
  );
};

export default ChatSelector;
