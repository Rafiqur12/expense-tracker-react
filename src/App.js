import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Balance from './components/balance/Balance';
import IncomeExpenses from './components/incomeExpense/IncomeExpenses';
import TransactionList from './components/transactionList/TransactionList';
import AddTransaction from './components/addTransaction/AddTransaction';
import { GlobalProvider } from './components/contact/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
        
      </div>
    </GlobalProvider>
  );
}

export default App;
