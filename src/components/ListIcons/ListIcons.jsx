import './styles.css';
import profile from '../../assets/perfil.svg';
import shopCart from '../../assets/sacola.svg';

const icons = [
    shopCart,
    profile
];

const ListIcons = () => {
    return (
        <ul className='header-icons'>
            {icons.map((item, index) => {
                return <li key={index} className='icons-item'>
                    <img src={item} />
                </li>
            })
            }
        </ul>
    );
}

export default ListIcons;