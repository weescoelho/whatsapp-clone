import styled from "styled-components";

const MessageLine = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const Message = styled.div`
    background-color:#fff;
    border-radius:10px;
    box-shadow:0 1px 1px #ccc;
    display: flex;
    flex-direction: column;
    padding: 3px;
    max-width:90%;
`;

const MessageText = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

const MessageDate = styled.div`
  font-size:11px;
  margin-right:5px;
  text-align: right;
  height: 15px;
  color:#999;
  margin-top:-15px;
`;

export { MessageLine, Message, MessageText, MessageDate };
