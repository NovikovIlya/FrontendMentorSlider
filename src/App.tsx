import { Col, InputNumber, Row, Slider, Space ,Switch} from 'antd';
import './App.css'
import { useEffect, useState } from 'react';
import styles from './App.module.css'

function App() {
  const [isYear, setIsYear] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [num,setNum] = useState(1)

  const onChange = (checked: boolean) => {
    setIsYear(checked);
  };

  const onChangeInput = (newValue: number) => {
      setInputValue(newValue);
      setNum(isYear ? ((newValue * 12) - ((newValue * 12 * 25)/100)) : newValue )
  };

  useEffect(()=>{
    onChangeInput(inputValue)
  },[isYear])

  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div>100K PAGEVIEWS</div>
          <div> ${num}.00 Dolars/ {isYear ? 'year' : 'month'}</div>
        </div>
        <div className={styles.slider}>
        <Slider
          min={1}
          max={30}
          onChange={onChangeInput}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
        </div>
        <div>Mothly biling: <Switch size="small"  onChange={onChange} /> Yearyle billing <span>25 discount</span></div> 
        <div className={styles.bottom}>
          <div>
            <div>Unlimited website</div>
            <div>100% data</div>
            <div>Email reports</div>
          </div>
          <div>Start my trial</div>
        </div>
    </div>
  )
}

export default App
