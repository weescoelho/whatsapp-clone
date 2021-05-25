import React from 'react'
import { MessageDate, Message, MessageLine, MessageText } from './MessageItem.style'

const MessageItem = ({data, user}) => {
  return (
    <MessageLine style={{justifyContent:user.id === data.author ? 'flex-end' : 'flex-start'}}>
      <Message style={{backgroundColor:user.id === data.author ? '#DCF8C6' : '#fff'}}>
        <MessageText>{data.body}</MessageText>
        <MessageDate>19:00</MessageDate>
      </Message>
    </MessageLine>
  )
}

export default MessageItem
