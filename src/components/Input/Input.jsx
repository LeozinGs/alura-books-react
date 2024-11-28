import styled from 'styled-components';

const Input = styled.input`
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 530px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 1.5em;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`;

export default Input;