import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './components/Slices/features/userSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Navbar'
import { auth } from './utils/firebase';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import './App.css';
import Favorite from './components/Favorite/Favorite';
import InitialPage from './components/InitialPage/InitialPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ChangePasswordForm from './components/ChangePassword/ChangePass';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        )
        console.log(userAuth);
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Routes>
            <Route path='/' element={<InitialPage />} />
          </Routes>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<Product />} />
              <Route path='/favorites' element={<Favorite />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/changePassword' element={<ChangePasswordForm />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
