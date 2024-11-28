import Header from './components/Header/Header';
import styled from 'styled-components';
import SearchSection from './components/SearchSection/SearchSection';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchSection />
    </AppContainer>
  );
}

export default App;
