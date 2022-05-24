import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import { userContext } from './../../App';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const handleGoogleSignIn = () => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				// The signed-in user info.
				const { displayName, email } = result.user;
				const signedInUser = { name: displayName, email };
				setLoggedInUser(signedInUser);
				// Delete history
				history.replace(from);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	return (
		<div>
			<h1>This is Login Component</h1>
			<button onClick={handleGoogleSignIn}>Google Sign In </button>
		</div>
	);
};

export default Login;
