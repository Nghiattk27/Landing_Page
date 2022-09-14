import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomBasic from './Components/CustomBasic/CustomBasic';
import CustomContact from './Components/CustomContact/CustomContact';
import CustomCounterparty from './Components/CustomCounterparty/CustomCounterparty';
import CustomDetail from './Components/CustomDetail/CustomDetail';
import CustomFooter from './Components/CustomFooter/CustomFooter';
import CustomHeader from './Components/CustomHeader/CustomHeader';
import CustomHome from './Components/CustomHome/CustomHome';
import CustomInfo from './Components/CustomInfo/CustomInfo';
import CustomPlatform from './Components/CustomPlatform/CustomPlatform';

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <CustomHome />
      <CustomInfo />
      <CustomBasic />
      <CustomDetail />
      <CustomCounterparty />
      <CustomPlatform />
      <CustomContact />
      <CustomFooter />
    </div>
  );
}

export default App;
