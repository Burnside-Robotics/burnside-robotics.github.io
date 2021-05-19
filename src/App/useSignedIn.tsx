import { useEffect, useState } from "react";
import firebase from "firebase";
export const useSignedIn = () => {
	const [signedIn, setSignedIn] = useState(false);
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setSignedIn(user != null);
		});
	}, []);
	return signedIn;
};
