import './styles/App.css';
import RoutesApp from './routes/RoutesApp';
import Auth from './contexts/Auth';




function App() {
  return (
    <Auth>
      <RoutesApp />
    </Auth>
      
  );
}

export default App;
