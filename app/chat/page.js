"use client";

import { Box, Input, Text, VStack } from "@chakra-ui/react";
import { HfInference } from "@huggingface/inference";
import { useState } from "react";

const Message = ({ message }) => {
  return (
    <Box w="100%" h="50px" bg="blue.900" border="1px">
      <VStack w="100%" h="100%">
        <Text>{message.sender}</Text>
        <Text>{message.text}</Text>
      </VStack>
    </Box>
  );
};

const ChatBox = ({ messages, setMessages }) => {
  const hf = new HfInference("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");
  const endpoint = hf.endpoint();

  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const getMessage = async () => {
    const response = await hf.textGeneration({ inputs: message });
    setMessages([...messages, { sender: "Bot", text: response.text }]);
  };

  const handleSendMessage = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setMessages([...messages, { sender: "User", text: message }]);
      setMessage("");
      getMessage();
    }
  };

  return (
    <Input
      value={message}
      w="100%"
      h="50px"
      bg="blue.900"
      border="1px"
      onChange={handleMessageChange}
      onKeyDown={handleSendMessage}
    />
  );
};

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "User",
      text: "Hello",
    },
    {
      sender: "Bot",
      text: "Hello there",
    },
  ]);

  return (
    <Box w="100vw" h="100vh" bg="blue.900">
      {messages.map((message) => (
        <Message message={message} />
      ))}
      <ChatBox messages={messages} setMessages={setMessages} />
    </Box>
  );
}
