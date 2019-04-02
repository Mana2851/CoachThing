import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';

import ModalExampleMultiple from './MultipleModals.js';
import './index.css';
 
export default class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, key: props.id }
  }
  
  onClickDay = (value) => alert('Select the XXXXXX and the workout', value)
  
  render()
  {
	  return(
	  <Calendar
          value={this.state.date}
		  onClickDay = {this.onClickDay}/>
	  );
  }
}

