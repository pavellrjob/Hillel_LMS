import React, { useState, useEffect } from 'react';
import wsContext from '../providers/wsContext';
import io from 'socket.io-client';

const WSProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [emergeMessage, setEmergeMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://127.0.0.1:4000', {
      transports: ['websocket'],
    });
    newSocket.on('message', (msg) => setMessages((prevMessages) => [...prevMessages, msg]));
    setSocket(newSocket);
    newSocket.on('ping', () => console.log('Приел пин'));
    newSocket.on('emergency', (emergency) => setEmergeMessage(emergency));

    return () => newSocket.close(); // close connection when unmount
  }, []);

  useEffect(() => {
    let timeout;
    if (emergeMessage) {
      timeout = setTimeout(() => {
        setEmergeMessage('');
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [emergeMessage]);

  const getSocketStatus = () => !!socket?.connected;

  const sendMessage = (msg) => {
    if (!getSocketStatus()) return false;
    socket.emit('message', { message: msg });
    return true;
  };

  const getContextValue = () => ({
    status: getSocketStatus(),
    messages,
    sendMessage,
    emergeMessage,
  });

  return <wsContext.Provider value={getContextValue()}>{children}</wsContext.Provider>;
};

export default WSProvider;
