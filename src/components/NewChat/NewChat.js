import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const NewChat = ({ activeNewChat, setActiveNewChat }) => {
  const [list, setList] = React.useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Joao Pé de Feijão",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Joao Pé de Feijão",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Joao Pé de Feijão",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Joao Pé de Feijão",
    },
  ]);

  function handleReturnNewChat(){
    setActiveNewChat(false)
  }

  return (
    <Container active={activeNewChat}>
      <Head>
        <ButtonsWrapper onClick={handleReturnNewChat}>
          <ArrowBackIcon style={{ color: "#FFF" }} />
        </ButtonsWrapper>
        <Title>Nova Conversa</Title>
      </Head>
      <List>
        {list.map((item, key) => (
          <NewChatItem key={key}>
            <Avatar src={item.avatar} alt="Avatar" />
            <NewChatName>{item.name}</NewChatName>
          </NewChatItem>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: ${({active}) => active ? '0' : '-500px'};
  top: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  transition: all ease 0.3s;
`;

const Head = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.light.bgHeaderNewChat};
  align-items: center;
  padding: 60px 15px 15px 15px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 19px;
  height: 40px;
  line-height: 40px;
  flex: 1;
  font-weight: bold;
  margin-left: 20px;
`;

const List = styled.div`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const ButtonsWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NewChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
const NewChatName = styled.div`
  font-size: 17px;
  color: #000;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;
