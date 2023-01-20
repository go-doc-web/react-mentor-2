import { Component } from "react";

import styles from "./Vote.module.scss";

class Vote extends Component {
  render() {
    return (
      <div>
        <h3>Leave your vote</h3>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h4>Vote variants</h4>
            <div>
              <button className={styles.dem}>Democrats</button>
              <button className={styles.rep}>Republicants</button>
            </div>
          </div>

          <div className={styles.block}>
            <h4>Vote result</h4>
            <p>Democrats: 0</p>
            <p>Republicants: 0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Vote;
