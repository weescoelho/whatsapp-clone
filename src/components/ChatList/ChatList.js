import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex:1;
  background-color:${({theme}) => theme.colors.light.bgChatList};
  overflow-y: auto;
  &::-webkit-scrollbar{
    height: 6px;
    width:6px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,.2);
  }
`

const ChatList = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ChatList
