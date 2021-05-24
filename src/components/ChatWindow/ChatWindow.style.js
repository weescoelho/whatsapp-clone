import styled from 'styled-components'

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
`

const Header = styled.div`
  height: 60px;
  border-bottom:1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.light.bgPrimary};
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
`

const Avatar = styled.img`
  height: 40px;
  width:40px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
`

const ChatName = styled.div`
  font-size:15px;
  color:#000;
`

const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`
const ButtonsWrapper = styled.div`
  height:40px;
  width: 40px;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
`

const Body = styled.div`
  flex:1;
  overflow-y: auto;
  background-color: #e5ddd5;
  background-size:contain;
  background-position:center;
  background-image:url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
`

const Footer = styled.div`
  display: flex;
  height:60px;
  align-items: center;
`

const InputWrapper = styled.div`
  background-color:#fff;
  height:40px;
  border-radius: 20px;
  display: flex;
  align-items:center;
  padding:0 10px;
  width: 100%;
`

const Input = styled.input`
  flex:1;
  border:0;
  outline:0;
  background-color:transparent;
  margin-left: 10px;
`

export { Chat, Header, Body, Footer, Avatar, ChatName, HeaderContent, HeaderButtonsContainer, ButtonsWrapper, InputWrapper, Input }