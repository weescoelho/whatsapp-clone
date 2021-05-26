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
import { Login } from "./components/Login/Login";
import api from "./api/api";

const App = () => {
  const [chatList, setChatList] = React.useState([]);
  const [activeChat, setActiveChat] = React.useState({});
  const [user, setUser] = React.useState(null);
  const [activeNewChat, setActiveNewChat] = React.useState(false);

  React.useEffect(() => {
    const user = window.localStorage.getItem('user')
    const userJson = JSON.parse(user)
    if(userJson){
      setUser(userJson)
    }
  }, [])


  React.useEffect(() => {
    const getChatList = () => {
      if(user !== null){
        let unsub = api.onChatList(user.id, setChatList)
        return unsub
      }
    }
    getChatList();
}, [])

  const handleLoginData = async (u) => {
    let newUser ={
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    await api.addUser(newUser)
    setUser(newUser);
    window.localStorage.setItem('user', JSON.stringify(newUser))
  }

  if(user === null) return <Login onReceive={handleLoginData}/>
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
