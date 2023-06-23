import React from 'react';

const wsContext = React.createContext({
  sendMessage: () => {},
  messages: [],
  status: false,
  emergeMessage: '',
});

export default wsContext;
