import React from "react";
import {
  AppWindow,
  ContentArea,
  SideBar,
} from "./styles/layout/Containers.style";

import SideBarHeader from "./components/SideBarHeader/SideBarHeader";
import InputSearch from "./components/InputSearch/InputSearch";
import ChatList from "./components/ChatList/ChatList";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";

const App = () => {
  const [chatList, setChatList] = React.useState([
    {
      chatId: 1,
      title: "Fulano de Tal 1 ",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 2,
      title: "Fulano de Tal 2 ",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 3,
      title: "Fulano de Tal 3 ",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ]);
  const [activeChat, setActiveChat] = React.useState({});

  return (
    <AppWindow>
      <SideBar>
        <SideBarHeader />
        <InputSearch />
        <ChatList>
          {chatList.map((chat, key) => (
            <ChatListItem
              key={key}
              data={chat}
              onClick={() => setActiveChat(chat)}
              active={activeChat.chatId === chat.chatId}
            />
          ))}
        </ChatList>
      </SideBar>
      <ContentArea>
        {activeChat.chatId !== undefined ? <ChatWindow /> : <ChatIntro />}
      </ContentArea>
    </AppWindow>
  );
};

export default App;
