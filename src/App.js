import React from 'react'
import SideBarHeader from './components/SideBarHeader/SideBarHeader'
import InputSearch from './components/InputSearch/InputSearch'
import ChatList from './components/ChatList/ChatList'
import { AppWindow, ContentArea, SideBar } from './styles/layout/Containers.style'
import ChatListItem from './components/ChatListItem/ChatListItem'
import ChatIntro from './components/ChatIntro/ChatIntro'

const App = () => {

  const [chatList, setChatList] = React.useState([{}, {}, {},{},{}, {}, {},{}])

  return (
    <AppWindow>
      <SideBar>
        <SideBarHeader />
        <InputSearch />
        <ChatList>
          {chatList.map((chat, key) => (
            <ChatListItem key={key} />
          ))}
        </ChatList>
      </SideBar>
      <ContentArea>
        <ChatIntro/>
      </ContentArea>
    </AppWindow>
  )
}

export default App
