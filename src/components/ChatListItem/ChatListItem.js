import React from 'react'
import { ChatWrapper, Avatar, ChatContent, ContentLine, ChatName, ChatDate, ChatLastMessage } from './ChatListItem.style'

const ChatListItem = () => {
  return (
    <ChatWrapper>
      <Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>
      <ChatContent>
        <ContentLine>
          <ChatName>Weslley Coelho</ChatName>
          <ChatDate>19:00</ChatDate>
        </ContentLine>
        <ContentLine>
          <ChatLastMessage>
            <p>Lorem ipsum dolor sit ?</p>
          </ChatLastMessage>
        </ContentLine>
      </ChatContent>
    </ChatWrapper>
  )
}

export default ChatListItem
