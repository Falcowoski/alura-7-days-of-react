import { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Newsletter from './components/Newsletter';

interface MyProps {};
 
interface MyState {
  loading: boolean
};
 
class App extends Component<MyProps, MyState> {
  state: MyState = {
    loading: false
  };

  render() { 
    return (
      <Fragment>
        <Header></Header>
        <main>
          <Newsletter />
        </main>
        <footer></footer>
      </Fragment>
    );
  }
}
 
export default App;


