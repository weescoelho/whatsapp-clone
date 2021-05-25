import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Container = styled.div``;

export const Login = () => {
  
  const handleFacebookLogin = () => {

  };

  return (
    <Container>
      <Button onClick={handleFacebookLogin} color="primary">
        Logar com o Facebook
      </Button>
    </Container>
  );
};
