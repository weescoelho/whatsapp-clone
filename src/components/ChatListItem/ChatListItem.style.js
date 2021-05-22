import styled from 'styled-components'

const ChatWrapper = styled.div`
 display: flex;
 cursor: pointer;
 align-items: center;
 height: 70px;
 &:hover{
   background-color:${({ theme }) => theme.colors.light.bgChatListHover};
 }
`
const Avatar = styled.img`
  width:50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
`
const ChatContent = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  margin-left: 15px;
  flex-wrap:wrap;
  min-width:0;
  height: 100%;
`
const ContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ChatName = styled.div`
  font-size:17px;
  color:${({ theme }) => theme.colors.light.text};
`
const ChatDate = styled.div`
  font-size:12px;
  color:${({ theme }) => theme.colors.light.textSecondary};
`

const ChatLastMessage = styled.div`
  font-size:14px;
  color:${({ theme }) => theme.colors.light.textSecondary};
  display: flex;
  width:100%;
  p{
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin:0;
  }
`


export {
  ChatWrapper,
  Avatar,
  ChatContent,
  ContentLine,
  ChatName,
  ChatDate,
  ChatLastMessage
}