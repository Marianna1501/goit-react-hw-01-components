import PropTypes from 'prop-types';
import { Title, StatList, StatItem, Container } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <span>{label}</span>
              <span> {percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
// import s from './Statistic.module.css';

// export default function Statistics({ label, percentage }) {
//   return (
//     <section className={s.statistics}>
//       <ul className={s.statList}>
//         <li className={s.item}>
//           <span className={s.label}>{label}</span>
//           <span className={s.percentage}>{percentage}%</span>
//         </li>
//       </ul>
//     </section>
//   );
// }

// Statistics.protoTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };

