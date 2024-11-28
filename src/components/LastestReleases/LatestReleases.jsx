import styled from 'styled-components';
import latestBooks from './latestReleasesData';
import Card from '../Card/Card';

const LatestReleasesContainer = styled.section`
    margin-top: 8em;
    width: 100%;
    height: 500px;
    background: #cdcdcd;
`;

const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 2em;
    color: #d9a03c;
    background: #fff;
    padding: .7em;
`;

const Releases = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: .5em;
    box-sizing: border-box;
    margin-top: 2em;
`;

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title>ULTIMOS LANÇAMENTOS</Title>
            <Releases>
                {
                    latestBooks.map(book =>
                        <Card
                            name={book.name}
                            image={book.src}
                        />
                    )
                }
            </Releases>
        </LatestReleasesContainer>
    );
}

export default LatestReleases;