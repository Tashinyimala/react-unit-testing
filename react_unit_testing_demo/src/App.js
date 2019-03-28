import React, { Component } from 'react';
import './app.scss';

// Redux imports
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

// Custom Components
import Header from './components/header/Header';
import Headline from './components/headlines/Headline';
import SharedButton from './components/button';
import ListItem from './components/listItems';

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
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get Post',
      emitEvent: this.fetch()
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render the posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
