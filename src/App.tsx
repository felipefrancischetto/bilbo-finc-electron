import Board from './components/Board';
import Container from './components/Container';
import Header from './components/Header';
import Snakbar from './components/Snakbar';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle/>

      <Header/>
      <Container>

        <Snakbar/>
        <Board/>

      </Container>
    </>
  );
}

export default App;
