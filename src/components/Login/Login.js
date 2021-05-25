import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import api from "../../api/api";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Login = ({onReceive}) => {

  const handleFacebookLogin = async () => {
    let result = await api.facebookPopup()
    if(result){
        onReceive(result.user)
    }else {
      alert('Erro ao efetuar login!')
    }
  };

  return (
    <Container>
      <Button variant="contained" onClick={handleFacebookLogin} color="primary">
        Logar com o Facebook
      </Button>
    </Container>
  );
};
