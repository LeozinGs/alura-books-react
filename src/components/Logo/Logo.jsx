import './styles.css';
import logo from '../../assets/logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt='Logo Alura Books' />
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;