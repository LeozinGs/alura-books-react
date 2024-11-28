import Header from './components/Header/Header';
import styled from 'styled-components';
import SearchSection from './components/SearchSection/SearchSection';
import LatestReleases from './components/LastestReleases/LatestReleases';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchSection />
      <LatestReleases />
    </AppContainer>
  );
}

export default App;
