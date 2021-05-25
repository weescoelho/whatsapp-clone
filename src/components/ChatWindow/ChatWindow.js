import React from "react";
import {
  Chat,
  Header,
  Body,
  Footer,
  Avatar,
  ChatName,
  HeaderContent,
  HeaderButtonsContainer,
  ButtonsWrapper,
  InputWrapper,
  Input,
  ButtonsWrapperFooter,
  EmojiArea,
} from "./ChatWindow.style";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import EmojiPicker from "emoji-picker-react";

const ChatWindow = () => {
  const [emojiOpen, setEmojiOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  function handleEmojiClick(event, emojiObject) {
    setText(text + emojiObject.emoji);
  }
  function handleOpenEmoji() {
    setEmojiOpen(true);
  }
  function handleCloseEmoji() {
    setEmojiOpen(false);
  }
  
  function handleSendClick(){}
  function handleMicClick(){}

  return (
    <Chat>
      <Header>
        <HeaderContent>
          <Avatar
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="chat avatar image"
          />
          <ChatName>Weslley Coelho</ChatName>
        </HeaderContent>
        <HeaderButtonsContainer>
          <ButtonsWrapper>
            <SearchIcon style={{ color: "#919191" }} />
          </ButtonsWrapper>
          <ButtonsWrapper>
            <AttachFileIcon style={{ color: "#919191" }} />
          </ButtonsWrapper>
          <ButtonsWrapper>
            <MoreVertIcon style={{ color: "#919191" }} />
          </ButtonsWrapper>
        </HeaderButtonsContainer>
      </Header>
      <Body></Body>
      <EmojiArea state={emojiOpen}>
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </EmojiArea>
      <Footer>
        <ButtonsWrapperFooter
          style={{ marginRight: "0", width: emojiOpen ? "40px" : "0" }}
        >
          <CloseIcon onClick={handleCloseEmoji} style={{ color: "#919191" }} />
        </ButtonsWrapperFooter>
        <ButtonsWrapperFooter onClick={handleOpenEmoji}>
          <InsertEmoticonIcon
            style={{ color: emojiOpen ? "#009688" : "#919191" }}
          />
        </ButtonsWrapperFooter>
        <InputWrapper>
          <Input
            type="search"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
        </InputWrapper>
        <ButtonsWrapperFooter>
          {text ? (
            <SendIcon style={{ color: "#919191" }} onClick={handleSendClick} />
          ) : (
            <MicIcon  style={{ color: "#919191" }} onClick={handleMicClick} />
          )}
        </ButtonsWrapperFooter>
      </Footer>
    </Chat>
  );
};

export default ChatWindow;
