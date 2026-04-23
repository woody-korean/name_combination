/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './CalcTable.module.scss';

const CELL_WIDTH = 44;

function CalcTable(props) {
  const { chars, stages } = props;
  const flexStyle = { flexBasis: `${100 / chars.length}%` };
  const rowStyle = { minWidth: `${chars.length * CELL_WIDTH}px` };
  return (
    <div className={styles.root}>
      <ul className={styles.chars} style={rowStyle}>
        {chars.map((char, i) => (
          <li key={i} className={i % 2 ? styles.odd : ''} style={flexStyle}>
            <div>{char}</div>
          </li>
        ))}
      </ul>
      <div className={styles.stages}>
        {stages.map((stage, i) => (
          <ul key={i} className={styles.stage} style={rowStyle}>
            {stage.map((num, j) => {
              return (
                <li key={j} style={flexStyle}>
                  {i > 0 && <div className={styles.shim} />}
                  <div className={styles.num}>{num}</div>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
export default CalcTable;
