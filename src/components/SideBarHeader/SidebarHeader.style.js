import styled from "styled-components";
const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.light.bgPrimary};
`;
const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const ButtonsWrapper = styled.div`
  display: flex;
`;
const ButtonHeader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export { Header, AvatarImage, ButtonsWrapper, ButtonHeader };
