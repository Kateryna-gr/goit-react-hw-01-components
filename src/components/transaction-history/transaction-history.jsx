import styles from './transaction-history.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr className={ (idx%2 === 0) ? styles.tableRow : styles.tableRowSecond} key={item.id}>
            <td className={styles.tableType}>{item.type}</td>
            <td className={styles.tableAmount}>{item.amount}</td>
            <td className={styles.tableCurrency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
