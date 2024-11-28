import styled from 'styled-components';

const Options = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Option = styled.li`
    min-width: 120px;
    font-size: 1em;
    padding: 0 5px;
    cursor: pointer;
`;

const textOptions = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
];

const ListOptions = () => {

    return (
        <Options>
            {textOptions.map((item, index) => {
                return <Option key={index}>
                    <p>{item}</p>
                </Option>
            })
            }
        </Options>
    );
}

export default ListOptions;