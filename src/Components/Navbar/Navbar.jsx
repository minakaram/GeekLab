import React from "react";
import "./Navbar.css";
import logo from "./Assets/Logo.png";
import search from "./Assets/search.svg";
import searchIcon from "./Assets/search.png"
import alert from "./Assets/alert.svg";
import avatar from "./Assets/avatar.svg";
import DownArrow from "./Assets/downArrow.svg";
import magnifier from "./Assets/find (1).png";
import Dialog from "@mui/material/Dialog";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("s");
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="navbar-component">
      <div className="left-side-navbar">
        <img src={logo} alt="" />
      </div>
      <div className="right-side-navbar">
        <div className="search-container">
          <img src={search} alt="" className="search-svg" />
          <input type="text" placeholder="Search"></input>
        </div>
        <img
          src={magnifier}
          alt=""
          className="search-abslute"
          onClick={handleClickOpen}
        />
        <div className="dialog-container">
          <Dialog
            className="dialog-tag"
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="inner-search-component">
              <img src={searchIcon} alt="" className="search-svg" />
              <input type="text" />
            </div>
            <button>Search</button>
          </Dialog>
        </div>
        <div className="user-info d-flex">
          <img src={alert} alt="alert" className="mx-2" />
          <img src={avatar} alt="avatar" className="avatar-img" />
          <div className="user-title mr-3">
            <p className="my-0">Moni Roy</p>
            <small>Admin</small>
          </div>
          <img src={DownArrow} alt="down" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
