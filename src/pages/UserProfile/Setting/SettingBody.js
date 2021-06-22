import React, { useState, useEffect } from "react";
// import iconImg from "../img/img icon.png";
import "./setting.css";
import { TextField } from "../../../components/TextField";
import cycle from '../image/cycle.png'
import camera from '../image/camera.png'
import icon from '../image/icon.png'
import Done from "../image/done.png";
import { CustomButton } from "../../../components/CustomButton";
import { useSelector } from "react-redux";
import { edit_user } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { routes } from "../../../routes";
import { Link, useHistory } from "react-router-dom";


export const SettingBody = () => {

  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const [lastName, setLastName] = useState(currentUser.lastName);
  const [firstName, setFirstName] = useState(currentUser.firstName);

  const url =
    "https://sites.google.com/a/netcmmi.com/share/_/rsrc/1473734124982/img/png/s/star-e01.png";

  const history = useHistory()
  
  return (
    <div className="settings-block ">
      <div className="info">
        <h1 className="set">Settings</h1>
        <div className="setting-header">
          <div className="setting-img">
            {currentUser.photo ? (
              <img src={currentUser.photo}/>
            ) : (
                <div>
            <img src={cycle} alt="" />
                  <img src={camera} alt="" />
              </div>
            )}
          </div>
          <div className="info__text">
            <p></p>
            <span>JPG, JPEG, PNG max file size 5MB</span>

            <div className="browse">
              <a href="#">Browse</a>
            </div>
          </div>
        </div>
      </div>
      {/* inputs */}
      <div>
        <div className="inputs">
          <div className="input__1">
            <div className="TextField">
              <input
                label="First Name"
                type="text"
                value={firstName}
                onChange={(e) => {
                  if (currentUser.firstName) {
                    setFirstName(e.target.value);
                  } else {
                    e.preventDefault();
                  }
                }}
              />
              <input
                label="Last Name"
                className="second_input"
                type="text"
                value={lastName}
                onChange={(e) => {
                  if (currentUser.lastName) {
                    setLastName(e.target.value);
                  } else {
                    e.preventDefault();
                  }
                }}
              />
            </div>

            {/* input language */}
            <div className="input_2">
              <img className="icon_img" src={icon} alt="downIcon" />
              <TextField
                label="Languege"
                placeholder="English - United States "
                type="text"
              />
            </div>
            {/* input email */}
            <div className="input_3">
              <div>
                <TextField
                  className="input_pls"
                  label="Email"
                  type="text"
                  name="email"
                  value={currentUser.userEmail}
                />
                {/* <img className="done_img" src={Done} alt="checkIcon" /> */}
              </div>
              <div className="link">
                <a href="#">Change Password</a>
              </div>
            </div>
            <div className="input_4">
              <div>
                <Link to={routes.user_delete}>Delete my Account</Link>
              </div>

              <CustomButton
                primary
                className="CustomButton"
                onClick={(e) => {
                  if(currentUser){
                  dispatch(
                    edit_user({
                      lastName,
                      firstName,
                      userEmail: currentUser.userEmail,
                      userPassword: currentUser.userPassword,
                      id: currentUser.id,
                      photo: url,
                    })
                    );
                  } 
                }}
              >
                Save
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
