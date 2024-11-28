import styled from 'styled-components';

const CardContainer = styled.div`
    width: 200px;
    padding: 1em;
    display: flex;
    flex-direction: column;

    &:hover{
        border: 1px solid #fff;
        border-radius: 15px;
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const BookName = styled.p`
    font-size: .75em;
`;

function Card({ image, name }) {
    return (
        <CardContainer>
            <BookName>{name}</BookName>
            <Image src={image} alt={`Capa do livro ${name}`} />
        </CardContainer>
    );
}

export default Card;