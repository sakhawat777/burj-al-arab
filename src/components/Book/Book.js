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

	const handleCheckInDate = (date) => {
		const newDates = { ...selectedDate };
		newDates.checkIn = date;
		setSelectedDate(newDates);
	};
	const handleCheckOutDate = (date) => {
		const newDates = { ...selectedDate };
		newDates.checkOut = date;
		setSelectedDate(newDates);
	};
	const handleBooking = () => {};

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
						format='dd/MM/yyyy'
						margin='normal'
						id='date-picker-inline'
						label='Check In Date'
						value={selectedDate.checkIn}
						onChange={handleCheckInDate}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
					<KeyboardDatePicker
						margin='normal'
						id='date-picker-dialog'
						label='Check Out Date'
						format='dd/MM/yyyy'
						value={selectedDate.checkOut}
						onChange={handleCheckOutDate}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
					{/* <KeyboardTimePicker
						margin='normal'
						id='time-picker'
						label='Time picker'
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change time',
						}}
					/> */}
				</Grid>
				<Button onClick={handleBooking} variant='contained' color='primary'>
					Book Now
				</Button>
			</MuiPickersUtilsProvider>
		</div>
	);
};

export default Book;
