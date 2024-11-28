import './styles.css';
import Logo from '../Logo/Logo';
import ListOptions from '../ListOptions/ListOptions';
import ListIcons from '../ListIcons/ListIcons';

const Header = () => {
    return (
        <header className='app-header'>
            <Logo />
            <ListOptions />
            <ListIcons />
        </header>
    );
}

export default Header;