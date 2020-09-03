import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Borrower Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Borrower Address1',
        field: 'address1',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Borrower Address2',
        field: 'address2',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'City',
        field: 'city',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Loan Term',
        field: 'loanterm',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Loan Id',
        field: 'loanid',
        sort: 'asc',
        width: 150,
      },
    ],
    rows: [
      {
        name: 'Andrew Thomas',
        address1: 'Manners Street',
        address2: 'Coutney Place',
        city: 'Wellington',
        amount: '33000',
        loanterm: '5',
        loanid: '6574',
      },
      {
        name: 'Hannah Nimot',
        address1: 'Lambton Quay',
        address2: 'Waihare',
        city: 'Wellington',
        amount: '56000',
        loanterm: '4',
        loanid: '7654',
      },
      {
        name: 'Murthy Ravanam',
        address1: 'Cuba Street',
        address2: 'Jonston Street',
        city: 'Wellington',
        amount: '88000',
        loanterm: '3',
        loanid: '9877',
      },
      {
        name: 'Jaivir Singh',
        address1: 'Lower Hutt',
        address2: 'Old City',
        city: 'Wellington',
        amount: '87000',
        loanterm: '5',
        loanid: '7675',
      },
      {
        name: 'Brenden Mcullam',
        address1: 'Manners Street',
        address2: 'Coutney Place',
        city: 'Wellington',
        amount: '12000',
        loanterm: '55',
        loanid: '6593',
      },
    ],
  };

  return(
      <div className="col-12 table-container">
          
       <MDBDataTable 
       striped
       bordered
       small
       data={data}
       />;
    </div>
  );
    }

    export default DatatablePage;