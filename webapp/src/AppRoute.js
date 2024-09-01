import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PCPoliceSearch from './pages/PCPoliceSearch';
import PCNavbar from './components/PCNavbar';

function AppRoute() {
  return (
    <>
        <Routes>
          <Route path='/' element={<PCPoliceSearch/>}/>
          <Route path='/police' element={<PCPoliceSearch/>}/>
        </Routes>
    </>
  )
}

export default AppRoute;
