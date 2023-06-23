import { useContext, useState } from 'react';
import wsContext from '../providers/wsContext';
import './components.css';

export default function WsChat() {
  const wsCtx = useContext(wsContext);
  const [value, setValue] = useState('');

  const sendMessageHandler = (event) => {
    event.preventDefault();
    wsCtx.sendMessage(value);
  };

  // console.log(wsCtx.messages, wsCtx.status);

  const onType = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="chat-window">
      <input type="text" value={value} onChange={onType}></input>
      <button onClick={sendMessageHandler}>Send</button>

      <div className="message-window">
        {wsCtx.emergeMessage && <div className="emergency">{wsCtx.emergeMessage}</div>}
        {wsCtx.messages.map((msg, index) => (
          <div key={`msg-${index}`} className="single-message">
            {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}
