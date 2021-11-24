import React from 'react';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Form />
        </main>
      </>
    );
  }
}

export default Wallet;
