import { connect, useSelector } from 'react-redux';

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);

  return <div className='balance'>{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

/* 
NOTE: the old way to connect components to redux

function BalanceDisplay({ balance }) {
  // const balance = useSelector((store) => store.account.balance);

  return <div className='balance'>{formatCurrency(balance)}</div>;
}
function mapStateProps(state) {
  return {
    balance: state.account.balance,
  };
}
export default connect(mapStateProps)(BalanceDisplay); */
