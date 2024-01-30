import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const [title, SetTitle] = useState(props.title)
  // const changeTitle = ()=>{
  //   SetTitle('Updated!!!')
  // }
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={changeTitle} className='expense-item__change'> Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
