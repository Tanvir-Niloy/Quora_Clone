
import React, { useEffect } from 'react'
import Quora from './components/Quora';
import './App.css'
import { useSelector,useDispatch} from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice";
import Login from './components/auth/Login';
import { auth } from "./firebase";


function App() {

  const dispatch = useDispatch()

  const user = useSelector(selectUser)


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);


  return (
    <div className='App'>
     {
       user ? (<Quora/>) :(<Login/>)
     }
    </div>
  )
}

export default App;
