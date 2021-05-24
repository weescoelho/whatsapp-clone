import React from 'react'
import { Chat, Header, Body, Footer, Avatar, ChatName, HeaderContent, HeaderButtonsContainer, ButtonsWrapper, InputWrapper, Input } from './ChatWindow.style'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

const ChatWindow = () => {
  return (
    <Chat>
      <Header>
        <HeaderContent>
          <Avatar src="https://www.w3schools.com/howto/img_avatar.png" alt="chat avatar image" />
          <ChatName>Weslley Coelho</ChatName>
        </HeaderContent>
        <HeaderButtonsContainer>
          <ButtonsWrapper>
            <SearchIcon style={{ color: '#919191' }} />
          </ButtonsWrapper>
          <ButtonsWrapper>
            <AttachFileIcon style={{ color: '#919191' }} />
          </ButtonsWrapper>
          <ButtonsWrapper>
            <MoreVertIcon style={{ color: '#919191' }} />
          </ButtonsWrapper>
        </HeaderButtonsContainer>
      </Header>
      <Body></Body>
      <Footer>
        <ButtonsWrapper>
          <InsertEmoticonIcon style={{ color: '#919191' }}/>
        </ButtonsWrapper>
        <InputWrapper>
          <Input type="search" placeholder="Digite uma mensagem" />
        </InputWrapper>
        <ButtonsWrapper>
          <MicIcon style={{ color: '#919191' }}/>
        </ButtonsWrapper>
      </Footer>
    </Chat>
  )
}

export default ChatWindow
