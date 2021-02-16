import styled from 'styled-components'

export const Wrapper = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const TextFieldContainer = styled.fieldset`
    position: relative;
    border: 1px solid ${({ theme }) => theme.secondaryText};
    background: ${({ theme }) => theme.card};
    border-radius: 8px;
    color: red;
    font-size: 1rem;
    transition: border-color 0.25s, background-color 0.25s;
    width: 100%;

    &:focus-within {
        background: ${({ theme }) => theme.card};
        border-color: ${({ theme }) => theme.primaryText};
    }
    input {
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        color: ${({ theme }) => theme.primaryText};
        background-color: transparent;
        width: 100%;

        &:placeholder {
            color: gray;
            opacity: 1;
        }
    }

    svg {
        color: ${({ theme }) => theme.primaryText};

        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`
