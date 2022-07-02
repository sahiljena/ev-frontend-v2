import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import Navbar from "./components/Navbar";
import Login  from "./components/Login";
import MyBills from "./components/MyBills";
import Profile from "./components/Profile";

function App() {
    
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  const [user, setUser] = useState({});
  const [userBills, setUserBills] = useState([]);

  var token = cookies["auth"];


  const fetchUser = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://ev-backend-v1.herokuapp.com/api/user/me", requestOptions)
      .then(response => response.json())
      .then(result => setUser(result))
      .catch(error => console.log('error', error));
  }

  const fetchUserBills = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://ev-backend-v1.herokuapp.com/api/rating/62be957b724e9d15597ccac1/allbills", requestOptions)
      .then(response => response.json())
      .then(result => setUserBills(result.allbills))
      .catch(error => console.log('error', error));
  }

  const logout = () =>{
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.location.reload(); 
  }

  useEffect(()=>{
    if(token){
      //console.log("User is now verifed");
      fetchUser();
      fetchUserBills();
    }
  },[token])


  if(token && user && userBills){
    return(<>
      <Navbar user={user} logout={logout} />
      <Profile bills={userBills} />
      <MyBills bills={userBills}/>
    </>);
  }
  return (
    <>
    <Navbar />
    <div className="p-2">
      <Login setCookie={setCookie} />
    </div>
    </>
  );
}

export default App;
