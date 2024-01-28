import React from "react";
interface Message {
  chatId: string;
  _id: string;
  senderId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
const MessageItem = ({
  user,
  message,
}: {
  user: boolean;
  message: Message;
}) => {
  const messageDate = new Date(message.createdAt);
  const formattedTime = messageDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className={`chat ${user ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble ${
          user ? "chat-bubble" : "chat-bubble-primary"
        }`}
      >
        {message.text}
        <p className="text-xs ">{formattedTime}</p>
      </div>
    </div>
  );
};

export default MessageItem;
