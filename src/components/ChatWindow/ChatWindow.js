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
import MessageItem from "../MessageItem/MessageItem";
import api from "../../api/api";

const ChatWindow = ({ user, data }) => {
  const [emojiOpen, setEmojiOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const [listening, setListening] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const body = React.useRef();

  //Se a area de scroll for maior que o proprio elemento, o conteudo será rolado para baixo.
  React.useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  React.useEffect(() => {
    setList([]);
    let unsub = api.onChatContent(data.chatId, setList, setUsers);
    return unsub;
  }, [data.chatId]);

  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  function handleEmojiClick(event, emojiObject) {
    setText(text + emojiObject.emoji);
  }
  function handleOpenEmoji() {
    setEmojiOpen(true);
  }
  function handleCloseEmoji() {
    setEmojiOpen(false);
  }

  function handleSendClick() {
    if (text !== "") {
      api.sendMessage(data, user.id, "text", text, users);
      setText("");
      setEmojiOpen(false);
    }
  }

  function handleInputKeyUp(event) {
    if (event.keyCode == 13) {
      handleSendClick();
    }
  }

  function handleMicClick() {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (event) => {
        setText(event.results[0][0].transcript);
      };
      recognition.start();
    }
  }

  return (
    <Chat>
      <Header>
        <HeaderContent>
          <Avatar src={data.image} alt="chat avatar image" />
          <ChatName>{data.title}</ChatName>
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
      <Body ref={body}>
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </Body>
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
            onKeyUp={handleInputKeyUp}
          />
        </InputWrapper>
        <ButtonsWrapperFooter>
          {text ? (
            <SendIcon style={{ color: "#919191" }} onClick={handleSendClick} />
          ) : (
            <MicIcon
              style={{ color: listening ? "#126ece" : "#919191" }}
              onClick={handleMicClick}
            />
          )}
        </ButtonsWrapperFooter>
      </Footer>
    </Chat>
  );
};

export default ChatWindow;
