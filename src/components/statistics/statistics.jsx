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
          <li
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            className={styles.item}
            key={stat.id}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
