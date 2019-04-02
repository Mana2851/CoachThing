import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { withAuthorization, withEmailVerification } from '../Session';

import MyCalendar from './calendar.js';
//import ModalExampleMultiple from './MultipleModals.js';
import './index.css';

const Calendar = () => (
  <div>
	<div id="">
		<MyCalendar></MyCalendar>
	</div>
	<div>
		<ui> Right side box that scrolls and is a list of various things </ui>
	</div>
  </div>
);
const condition = authUser =>
  authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Calendar);
