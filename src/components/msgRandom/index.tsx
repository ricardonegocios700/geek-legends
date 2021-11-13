import { useEffect } from "react";
import { useMessages } from "./../../Providers/message/index";
import { useAuth } from "../../Providers/user";
import { MessageSenseiStyle } from "./styles";

export const MessageSensei = () => {
  const { config } = useAuth();
  const { getMessage, message } = useMessages();

  useEffect(() => {
    getMessage();
  }, [config]);

  return (
    <MessageSenseiStyle>
      <h3>Mensagem do Sensei</h3>
      <h5>{message.quote}</h5>
      <p>{message.author}</p>
    </MessageSenseiStyle>
  );
};

export default MessageSensei;
