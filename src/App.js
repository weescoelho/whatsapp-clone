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
import { NewChat } from "./components/NewChat/NewChat";

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
  const [user, setUser] = React.useState({
    id: 1234,
    avatar: "https://www.blexar.com/avatar.png",
    name: "Weslley Coelho",
  });
  const [activeNewChat, setActiveNewChat] = React.useState(false);

  return (
    <AppWindow>
      <SideBar>
        <NewChat
          chatlist={chatList}
          user={user}
          activeNewChat={activeNewChat}
          setActiveNewChat={setActiveNewChat}
        />
        <SideBarHeader user={user} setActiveNewChat={setActiveNewChat} />
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
        {activeChat.chatId !== undefined ? (
          <ChatWindow user={user} />
        ) : (
          <ChatIntro />
        )}
      </ContentArea>
    </AppWindow>
  );
};

export default App;
