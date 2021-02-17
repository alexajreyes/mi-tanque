import React from 'react'
import { MdSearch as SearchIcon } from 'react-icons/md'
import { Wrapper, TextFieldContainer, Label } from './styles'
import randomKey from 'utils/randomKey'

export default function TextField({
  label = null,
  placeholder,
  search = false,
  Icon = null,
  rest,
}) {
  const key = randomKey()

  return (
    <Wrapper>
      {label && <Label htmlFor={key}>{label}</Label>}
      <TextFieldContainer>
        <input type="text" placeholder={placeholder} id={key} {...rest} />
        {search && !Icon && <SearchIcon size={24} />}
        {Icon && <Icon size={24} />}
      </TextFieldContainer>
    </Wrapper>
  )
}
