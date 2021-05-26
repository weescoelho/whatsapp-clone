import React from "react";
import {
  ChatWrapper,
  Avatar,
  ChatContent,
  ContentLine,
  ChatName,
  ChatDate,
  ChatLastMessage,
} from "./ChatListItem.style";

const ChatListItem = ({ onClick, active, data }) => {

  const [time,setTime] = React.useState('')
  React.useEffect(() => {
    const getDate = () => {
      if(data.lastMessageDate > 0){
        let date = new Date(data.lastMessageDate.seconds * 1000)
        let hours = date.getHours();
        let minutes = date.getMinutes();
        hours =  hours < 10 ? '0'+hours : hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        setTime(`${hours}:${minutes}`)
      }
    }
    getDate()
  }, [data])

  return (
    <ChatWrapper onClick={onClick} active={active}>
      <Avatar src={data.image} />
      <ChatContent>
        <ContentLine>
          <ChatName>{data.title}</ChatName>
          <ChatDate>{time}</ChatDate>
        </ContentLine>
        <ContentLine>
          <ChatLastMessage>
            <p>{data.lastMessage}</p>
          </ChatLastMessage>
        </ContentLine>
      </ChatContent>
    </ChatWrapper>
  );
};

export default ChatListItem;
