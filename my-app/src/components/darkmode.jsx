import React from 'react';
import styles from "../styles/darkmode.module.css";

const Darkmode = ({ handleChange, isChecked }) => {
  return (
<div className={styles["toggle-switch"]}>
  <label className={styles["switch-label"]}>
    <input type="checkbox" className={styles["checkbox"]} onChange={handleChange} checked={isChecked}/>
    <span className={styles["slider"]}></span>
  </label>
</div>  
  );
}

export default Darkmode;