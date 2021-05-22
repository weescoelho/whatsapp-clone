import React from 'react'
import SideBarHeader from './components/SideBarHeader/SideBarHeader'
import InputSearch from './components/InputSearch/InputSearch'
import ChatList from './components/ChatList/ChatList'
import { AppWindow, ContentArea, SideBar } from './styles/layout/Containers.style'

const App = () => {
  return (
    <AppWindow>
      <SideBar>
        <SideBarHeader />
        <InputSearch/>
        <ChatList/>
      </SideBar>
      <ContentArea>
      </ContentArea>
    </AppWindow>
  )
}

export default App
