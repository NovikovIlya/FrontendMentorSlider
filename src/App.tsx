import { Slider, Switch } from "antd";
import "./App.css";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [isYear, setIsYear] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [num, setNum] = useState(1);

  const onChange = (checked: boolean) => {
    setIsYear(checked);
  };

  const onChangeInput = (newValue: number) => {
    setInputValue(newValue);
    setNum(isYear ? newValue * 12 - (newValue * 12 * 25) / 100 : newValue);
  };

  useEffect(() => {
    onChangeInput(inputValue);
  }, [isYear]);

  return (
    <div className={styles.wrapper}>
    <div className={styles.header}>
      <h1>Simple traffic-based pricing</h1>
      <p>Sing-up for our 30 day trial. No credit card required</p>
    </div>
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.kk}>100K PAGEVIEWS</div>
        <div className={styles.price}>
          <span className={styles.number}>${num}.00</span> / {isYear ? "year" : "month"}
        </div>
      </div>
      <div className={styles.slider}>
        <Slider
          min={1}
          max={30}
          onChange={onChangeInput}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </div>
      <div className={styles.year}>
        Mothly biling: <Switch size="small" onChange={onChange} /> Yearyle
        billing <span className={styles.discount}>25% discount</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.list}>
          <div className={styles.hh}>
            <img className={styles.images} src="https://www.svgrepo.com/show/404857/blue-heart.svg"/>
            Unlimited website
          </div>
          <div className={styles.hh}>
           <img className={styles.images} src="https://www.svgrepo.com/show/404857/blue-heart.svg"/>
            100% data
          </div>
          <div className={styles.hh}>
            <img className={styles.images} src="https://www.svgrepo.com/show/404857/blue-heart.svg"/>
            Email reports
          </div>
        </div>
        <button className={styles.btn}>Start my trial</button>
      </div>
    </div>
    </div>
  );
}

export default App;
