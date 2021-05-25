import React from 'react'
import { AvatarImage, ButtonHeader, ButtonsWrapper, Header } from './SidebarHeader.style'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SideBarHeader = ({user}) => {
  return (
    <Header>
      <AvatarImage src={user.avatar} alt="" />
      <ButtonsWrapper>
        <ButtonHeader>
          <DonutLargeIcon style={{ color: '#919191' }} />
        </ButtonHeader>
        <ButtonHeader>
          <ChatIcon style={{ color: '#919191' }} />
        </ButtonHeader>
        <ButtonHeader>
          <MoreVertIcon style={{ color: '#919191' }} />
        </ButtonHeader>
      </ButtonsWrapper>
    </Header>
  )
}

export default SideBarHeader
