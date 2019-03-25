import React, { Component } from 'react';
import Header from './components/header/Header';
import './app.scss';
import Headline from './components/headlines/Headline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render the posts"
          />
        </section>
      </div>
    );
  }
}

export default App;
