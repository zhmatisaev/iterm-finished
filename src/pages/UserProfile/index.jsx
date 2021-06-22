import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { SettingBody } from "./Setting/SettingBody";
import ava from "./image/ava.png"
import copy from "./image/copy.png"
import Subscriptions from "./image/Subscriptions.png"
import setting from "./image/setting.png"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { BrowserRouter, Router, Route,  Switch  } from "react-router-dom";
import { DeleteAccount } from "./DeleteAccount";
import { routes } from "../../routes";


export const UserProfile = () => {
  const history = useHistory()
  
  const currentUser = useSelector((state) => state.currentUser);
   const url =
    "https://sites.google.com/a/netcmmi.com/share/_/rsrc/1473734124982/img/png/s/star-e01.png";
 
  return (
    <div className="userProfile">
    <div className="container">
        <div className="navbar">
          {currentUser.photo ? (
            <img src={currentUser.photo}
              alt={currentUser.firstName}
            style={{ width: "100px", height: "100px", marginLeft: 85, marginTop: -60, borderRadius: 50, backgroundSize: 'contain' }} 
            />
          ):(
              <img
            style={{ width: "100px", height: "100px", marginLeft: 85, marginTop: -60, borderRadius: 50, backgroundSize: 'contain' }}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="avatar"/>)}
          <div className="user">
            <p>
              {currentUser.firstName ? (
              <div>
                {currentUser.firstName}{"  "}
              {currentUser.lastName ? currentUser.lastName[0] : ''}{"."}
                </div>) : (
                  <div>No User</div>
              ) }
              
            </p>
        </div>
        <div className="user__side-bar">
        <div className="side-bar">
          <img src={copy} alt="copy-icon" />
          <p>Documents</p>
        </div>
        <div className="side-bar">
          <img src={Subscriptions} alt="" />
          <p>Subscriptions</p>
        </div>
        <div className="side-bar">
          <img src={setting} alt="setting-icon" />
          <p>Settings</p>
          </div>
        </div>
        {/* settings */}
                 
      </div> 
        {/* // )
        // })} */}
        </div>
        <BrowserRouter>
				<Switch>
					<Route path={routes.user_delete} component={DeleteAccount}/>
					<Route path='/' component={SettingBody}/>
				</Switch>			
				</BrowserRouter>
        </div>
       
      //  </div>
  );
};