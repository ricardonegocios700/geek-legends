import { useMessages } from "./../../Providers/message/index";

export const MessageSensei = () => {
  const { message }: any = useMessages();

  return (
    <>
      <h3>Mensagem do Sensei</h3>
      {message && (
        <>
          <p>{message.quote}</p>
          <p>{message.author}</p>
        </>
      )}
    </>
  );
};

export default MessageSensei;
