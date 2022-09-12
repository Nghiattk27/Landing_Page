import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomHeader from './Components/CustomHeader/CustomHeader';
import CustomHome from './Components/CustomHeader/CustomHome/CustomHome';

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <CustomHome />
    </div>
  );
}

export default App;
