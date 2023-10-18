import styles from './statistics.module.css';

export const Stats = ({ title, statsData }) => {
  let titleStat = '';
  if ({ title }) {
    titleStat = <h2 className={styles.title}>{title}</h2>;
  }

  return (
    <section className={styles.statistics}>
      {titleStat}
      <ul className={styles.statList}>
        {statsData.map(stat => (
          <li className={styles.item} id={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
