import React, { Component } from 'react';
import Header from './components/header/Header';
import './app.scss';
import Headline from './components/headlines/Headline';

const tempArr = [
  {
    fName: 'Tashi',
    lName: 'Nyima',
    email: 'tn@gmail.com',
    age: 20,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render the posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
