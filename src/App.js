import React from 'react';
import Header from './components/header';
import './css/main.css';
import Cards from './components/cards';


// main component done as a class
// App component that shows all other components
class App extends React.Component {
  // html
  render() {
    return (
      <main>
        <Header title="Munchkin" />
      

        <Cards />
      </main>
    );
  }
}


export default App;
