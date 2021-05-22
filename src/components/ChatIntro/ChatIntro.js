import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.light.bgChatIntro};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  border-bottom:6px solid #4ADF83;
  img{
    width:250px;
    height: auto;
  }
  h1{
    font-size:32px;
    color:${({ theme }) => theme.colors.light.textSecondary};
    font-weight:normal;
    margin-top: 30px;
  }
  h2{
    font-size:14px;
    color:#777;
    font-weight: normal;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
  }
`

const ChatIntro = () => {
  return (
    <Container>
      <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="" />
      <h1>Mantenha seu celular conectado</h1>
      <h2>O Whatsapp conecta ao seu telefone para sincronizar suas mensagens.
        <br />
      Para reduzir o uso de dados,conecte seu telefone a uma rede Wi-fi
      </h2>
    </Container>
  )
}

export default ChatIntro
