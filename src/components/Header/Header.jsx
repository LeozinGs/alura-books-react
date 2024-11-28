import Logo from '../Logo/Logo';
import ListOptions from '../ListOptions/ListOptions';
import ListIcons from '../ListIcons/ListIcons';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 1em .5em;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <ListOptions />
            <ListIcons />
        </HeaderContainer>
    );
}

export default Header;