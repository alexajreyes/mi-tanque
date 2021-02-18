import styled from 'styled-components'

export const Wrapper = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Label = styled.label`
    font-style: normal;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`

export const TextFieldContainer = styled.fieldset`
    background: ${({ theme }) => theme.card};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.secondaryText};
    font-size: 1rem;
    margin: 0;
    position: relative;
    transition: border-color 0.25s, background-color 0.25s;
    width: 100%;

    &:focus-within {
        background: ${({ theme }) => theme.card};
        border-color: ${({ theme }) => theme.primaryText};
    }

    input {
        border: none;
        outline: none;
        padding: 8px;
        color: ${({ theme }) => theme.primaryText};
        background-color: transparent;
        width: 100%;

        &:focus ~ svg {
            color: ${({ theme }) => theme.primaryText};
        }

        &:placeholder {
            color: ${({ theme }) => theme.secondaryText};
            opacity: 1;
        }
    }

    svg {
        color: ${({ theme }) => theme.secondaryText};

        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`
