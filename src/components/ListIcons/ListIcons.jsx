import profile from '../../assets/perfil.svg';
import shopCart from '../../assets/sacola.svg';
import styled from 'styled-components';

const Icons = styled.ul`
    display: flex;
    gap: 2em;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
`;

const Icon = styled.li`
    cursor: pointer;
    user-select: none;
`;

const icons = [
    shopCart,
    profile
];

const ListIcons = () => {
    return (
        <Icons className='header-icons'>
            {icons.map((item, index) => {
                return <Icon key={index}><img src={item} /></Icon>
            })
            }
        </Icons>
    );
}

export default ListIcons;