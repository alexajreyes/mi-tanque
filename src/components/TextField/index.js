import React from 'react'
import { MdSearch as SearchIcon } from 'react-icons/md'
import { Wrapper, TextFieldContainer } from './styles'

export default function TextField({
    label = null,
    placeholder,
    search = false,
}) {
    return (
        <Wrapper>
            {label && <label htmlFor="">{label}</label>}
            <TextFieldContainer>
                <input type="text" placeholder={placeholder} />
                <SearchIcon size={22} />
            </TextFieldContainer>
        </Wrapper>
    )
}
