import React, { useState } from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({ setOptionValue }) => {
const [startDate, setStartDate] = useState(new Date());
return (
< DatePicker
className={styles.dateinput}
selected={startDate}
onChange={date => { setStartDate(date); setOptionValue(date); }}
minDate={new Date()}
/>);
};


OrderOptionDate.propTypes = {
setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
