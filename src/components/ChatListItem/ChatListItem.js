import React from 'react'
import { ChatWrapper, Avatar, ChatContent, ContentLine, ChatName, ChatDate, ChatLastMessage } from './ChatListItem.style'

const ChatListItem = ({ onClick, active, data }) => {
  return (
    <ChatWrapper onClick={onClick} active={active}>
      <Avatar src={data.image} />
      <ChatContent>
        <ContentLine>
          <ChatName>{data.title}</ChatName>
          <ChatDate>19:00</ChatDate>
        </ContentLine>
        <ContentLine>
          <ChatLastMessage>
            <p>{data.lastMessage}</p>
          </ChatLastMessage>
        </ContentLine>
      </ChatContent>
    </ChatWrapper>
  )
}

export default ChatListItem
