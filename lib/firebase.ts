import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyAFVw8upFxcvhljMtLibm-InbxygL3c5Kw',
  authDomain: 'at-tattoo.firebaseapp.com',
  projectId: 'at-tattoo',
  storageBucket: 'at-tattoo.appspot.com',
  messagingSenderId: '770178514271',
  appId: '1:770178514271:web:47dbe8fa5286579d6a8aea',
  measurementId: 'G-3Z6MBSFYSZ',
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export function postBookingRequest(data) {
  const sendBookingRequest = httpsCallable(functions, 'sendBookingRequest');

  return sendBookingRequest(data);
}

export function addUserToNewsletter(data) {
  const addToNewsletter = httpsCallable(functions, 'addToNewsletter');

  return addToNewsletter(data);
}
