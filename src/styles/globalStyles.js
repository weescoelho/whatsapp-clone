import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
body{
  background-color: ${({theme}) => theme.colors.light.bg};
  margin:0;
  font-family:'Segoe Ui', 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial;
}
`

export default GlobalStyle;