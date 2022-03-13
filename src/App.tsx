import { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Newletter from './components/Newletter';

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
          <Newletter />
        </main>
        <footer></footer>
      </Fragment>
    );
  }
}
 
export default App;


