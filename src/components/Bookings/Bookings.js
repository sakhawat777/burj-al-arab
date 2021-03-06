import React, { useEffect, useState, useContext } from 'react';
import { userContext } from './../../App';

const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	useEffect(() => {
		fetch('http://localhost:5000/bookings?email=' + loggedInUser.email)
			.then((res) => res.json())
			.then((data) => setBookings(data));
	}, []);
	return (
		<div>
			<h3>You have: {bookings.length} bookings</h3>
			{bookings.map((book) => (
				<li>
					{book.name} from:{' '}
					{new Date(book.checkIn).toDateString('dd/MM/yyyy')} to:{' '}
					{new Date(book.checkOut).toDateString('dd/MM/yyyy')}
				</li>
			))}
		</div>
	);
};

export default Bookings;
