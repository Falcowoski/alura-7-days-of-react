import { Component, Fragment } from 'react';
import Header from './components/Header';
import './App.css';

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
        <main></main>
        <footer></footer>
      </Fragment>
    );
  }
}
 
export default App;


