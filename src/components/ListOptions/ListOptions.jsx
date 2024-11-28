import './styles.css';

const textOptions = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
];

const ListOptions = () => {

    return (
        <ul className='header-options'>
            {textOptions.map((item, index) => {
                return <li key={index} className='options-item'>
                    <p>{item}</p>
                </li>
            })
            }
        </ul>
    );
}

export default ListOptions;