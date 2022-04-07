import React from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Form />
          <Table />
        </main>
      </>
    );
  }
}

export default Wallet;
