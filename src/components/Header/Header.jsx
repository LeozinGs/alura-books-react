import './styles.css';
import Logo from '../Logo/Logo';
import profile from '../../assets/perfil.svg';
import shopCart from '../../assets/sacola.svg';
import List from '../List/List';

const textOptions = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
];

const icons = [
    shopCart,
    profile
];

const Header = () => {
    return (
        <header className='app-header'>
            <Logo />
            <List
                className={'header-options'}
                itemsList={textOptions}
                listItemName={'options-item'}
            />
            <List
                className={'header-icons'}
                itemsList={icons}
                listItemName={'icons-item'}
            />
        </header>
    );
}

export default Header;