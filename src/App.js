import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import ProtectedRoute from './Services/ProtectedRoute';
import CreateExercicePage from './Pages/CreateExercicePage';
import Disconnect from './Services/Disconnect';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeancesPage from './Pages/SeancesPage';
import SingleSeancePage from './Pages/SingleSeancePage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <NavigationBar/>
        <Routes>
          <Route path="/login" element={<LoginPage/>} ></Route>
          <Route path="/register" element={<RegisterPage/>}> </Route>


          <Route element={ <ProtectedRoute/>}>
            <Route path="/create/seance" element={<CreateExercicePage/>}> </Route>
            <Route path="/seances" element={<SeancesPage/>}> </Route>
            <Route path="/seances/:id" element={<SingleSeancePage/>}> </Route>
            <Route path="/disconnect" element={<Disconnect/>} > </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
