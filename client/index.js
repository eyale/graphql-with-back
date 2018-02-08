import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <p>Lyrical</p>
    );
  }
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
