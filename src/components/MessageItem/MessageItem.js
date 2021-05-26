import React from 'react'
import { MessageDate, Message, MessageLine, MessageText } from './MessageItem.style'

const MessageItem = ({data, user}) => {

  const [time,setTime] = React.useState('')
  React.useEffect(() => {
    const getDate = () => {
      if(data.date > 0){
        let date = new Date(data.date.seconds * 1000)
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
    <MessageLine style={{justifyContent:user.id === data.author ? 'flex-end' : 'flex-start'}}>
      <Message style={{backgroundColor:user.id === data.author ? '#DCF8C6' : '#fff'}}>
        <MessageText>{data.body}</MessageText>
        <MessageDate>{time}</MessageDate>
      </Message>
    </MessageLine>
  )
}

export default MessageItem
