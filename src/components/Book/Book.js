import 'date-fns';
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const Book = () => {
	const { bedType } = useParams();
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = useState({
		checkIn: new Date(),
		checkOut: new Date(),
	});

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<h1>
				Hello, {loggedInUser.name}! Let's book a {bedType} Room.
			</h1>
			<p>
				Want a <Link to='/home'>different room?</Link>
			</p>
			{/* Date Picker */}
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justifyContent='space-around'>
					<KeyboardDatePicker
						disableToolbar
						variant='inline'
						format='MM/dd/yyyy'
						margin='normal'
						id='date-picker-inline'
						label='Check In Date'
						value={selectedDate.checkIn}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
					<KeyboardDatePicker
						margin='normal'
						id='date-picker-dialog'
						label='Check Out Date'
						format='MM/dd/yyyy'
						value={selectedDate.checkOut}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
					<KeyboardTimePicker
						margin='normal'
						id='time-picker'
						label='Time picker'
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change time',
						}}
					/>
				</Grid>
				<Button variant='contained' color='primary'>
					Book Now
				</Button>
			</MuiPickersUtilsProvider>
		</div>
	);
};

export default Book;
