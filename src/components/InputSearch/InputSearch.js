import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputContainer, InputWrapper, Input } from './InputSearch.style';

const InputSearch = () => {
  return (
    <InputContainer>
      <InputWrapper>
        <SearchIcon fontSize="small" style={{ color: '#919191' }} />
        <Input type="search" placeholder="Procurar  ou começar uma nova conversa" />
      </InputWrapper>
    </InputContainer>
  )
}

export default InputSearch
