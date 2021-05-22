import styled from 'styled-components'

const AppWindow = styled.div`
  display: flex;
  height: 100vh;
  background:${({ theme }) => theme.colors.light.bg};
`
const SideBar = styled.aside`
  width:35%;
  max-width:415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
`
const ContentArea = styled.div`
  flex:1;
`

export {
  AppWindow,
  SideBar,
  ContentArea
}