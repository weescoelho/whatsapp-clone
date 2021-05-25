import React from 'react'
import { MessageDate, Message, MessageLine, MessageText } from './MessageItem.style'

const MessageItem = ({data}) => {
  return (
    <MessageLine>
      <Message>
        <MessageText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis voluptatum harum molestias sapiente eveniet excepturi amet magnam dolores unde et necessitatibus, pariatur voluptates iusto deleniti nesciunt quos voluptate optio.</MessageText>
        <MessageDate>19:00</MessageDate>
      </Message>
    </MessageLine>
  )
}

export default MessageItem
