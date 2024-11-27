import './styles.css';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className='app-header'>
            <div className="logo">
                <img src={logo} alt='Logo Alura Books' />
                <p><strong>Alura</strong>Books</p>
            </div>
        </header>
    );
}

export default Header;