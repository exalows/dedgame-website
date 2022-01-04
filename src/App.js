import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import HatsPage from './pages/hatspage/hatspage.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>}/>
        <Route exact path='/shop/hats' element={<HatsPage/>}/>
        <Route exact path='/signin' element={<SignInPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
