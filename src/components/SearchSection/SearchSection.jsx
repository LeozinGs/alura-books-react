import styled from 'styled-components';
import Input from '../Input/Input';
import { useState } from 'react';
import { books } from './data';
import Card from '../Card/Card';

const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Results = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: .5em;
    box-sizing: border-box;
    margin-top: 2em;
`;

const SearchSection = () => {
    const [searchedBooks, setSearchedBooks] = useState([]);

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder='Pesquise aqui seu próximo livro.'
                onBlur={(e) => {
                    const inputedText = e.target.value;
                    const searchResults = books.filter(book => book.name.includes(inputedText));
                    setSearchedBooks(searchResults);
                }}
            />
            <Results>
                {searchedBooks.map(book =>

                    <Card
                        name={book.name}
                        image={book.src}
                    />
                )}
            </Results>
        </SearchContainer>
    );
}

export default SearchSection;