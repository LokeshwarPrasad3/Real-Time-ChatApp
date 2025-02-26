import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  // using for navigatin in any route
  const navigate = useNavigate();

  // Show login and create user when user toggle
  const [toggleMode, setToggleMode] = useState(true);

  //PreDefine Material Component code to changing tabs of login and create user
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   

  // IF user is logged in then push to /chat route
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      // Check if the current location is the "/auth" page
      if (window.location.pathname === '/auth') {
        navigate("/");
      }
    }
  }, [navigate]);
  

  return (
    <>
      {/* <Navbar/> */}

      <div className="login_container font-signika flex flex-col justify-center items-center pt-7 gap-4  ">
        {/* this includes heading part */}
        <div className="login_heading bg-white rounded-md w-[35rem]  py-3 flex justify-center items-center gap-2">
          <img src="https://i.ibb.co/4JgNzgS/pingpoing-logo.png" alt="logoName" className="h-6" />
          <h1 className=" text-xl font-semibold  opacity-80 tracking-wide">
            Welcome to PingPoing
          </h1>
        </div>

        {/*  this includes login content part */}
        <div className="login_contenet bg-white rounded-sm  w-[35rem]  py-3 flex justify-center items-center flex-col ">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab
              icon={<LockOpenIcon />}
              label="LOGIN-ACCOUNT"
              onClick={() => setToggleMode(true)}
            />
            <Tab
              icon={<PersonPinIcon />}
              label="CREATE-ACCOUNT"
              onClick={() => setToggleMode(false)}
            />
          </Tabs>

          {/*👉 LOGIN FOROM of login user */}
          {
            toggleMode && <Login /> // if true then login mode
          }
          {/*👉 CREATE ACCOUNT FOROM */}
          {
            !toggleMode && <Signup /> // if false then signup mode
          }
        </div>
      </div>
    </>
  );
}

export default HomePage
