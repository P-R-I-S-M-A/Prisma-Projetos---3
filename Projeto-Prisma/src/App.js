import './styles/App.css';
import RoutesApp from './routes/RoutesApp';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5WCFS1fzNl5oitep9DdrlbGugXT5Oysw",
  authDomain: "prisma-939a5.firebaseapp.com",
  projectId: "prisma-939a5",
  storageBucket: "prisma-939a5.appspot.com",
  messagingSenderId: "250513360487",
  appId: "1:250513360487:web:b96142979f3b73a558b6c2",
  measurementId: "G-9MMSQGTL4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, analytics, db};

export default function App() {
  return (
      <RoutesApp />
  );
}