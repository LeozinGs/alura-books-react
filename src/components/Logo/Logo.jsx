import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.75em;
`;

const Logo = () => {
    return (
        <LogoContainer>
            <img src={logo} alt='Logo Alura Books' />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;