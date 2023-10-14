import './styles/App.css';
import RoutesApp from './routes/RoutesApp';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiKtd0p5THpzJ82TUdG44meBWm5UlRwOI",
  authDomain: "my-firebase-3a643.firebaseapp.com",
  projectId: "my-firebase-3a643",
  storageBucket: "my-firebase-3a643.appspot.com",
  messagingSenderId: "296063168367",
  appId: "1:296063168367:web:43de5c085a941564b3829a",
  measurementId: "G-ZHQQH2YJTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics};

export default function App() {
  return (
      <RoutesApp />
  );
}