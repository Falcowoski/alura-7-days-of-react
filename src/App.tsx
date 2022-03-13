import { Fragment } from 'react';
import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <main>
        <Newsletter />
      </main>
      <footer></footer>
    </Fragment>
  );
}
 
export default App;


