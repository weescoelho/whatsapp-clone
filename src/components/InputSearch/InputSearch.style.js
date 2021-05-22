import styled from 'styled-components'

const InputContainer = styled.div`
  background-color:#F6F6F6;
  border-bottom:1px solid #eee;
  padding:5px 15px;
`

const InputWrapper = styled.div`
  background-color:#fff;
  height:40px;
  border-radius: 20px;
  display: flex;
  align-items:center;
  padding:0 10px;
`

const Input = styled.input`
  flex:1;
  border:0;
  outline:0;
  background-color:transparent;
  margin-left: 10px;
`

export {
  InputContainer,
  InputWrapper,
  Input,
}