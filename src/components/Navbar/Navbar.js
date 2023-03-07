import React from "react";
import "./Navbar.css";
import {
  MenuItem,
  InputAdornment,
  FormControl,
  TextField,
  Avatar,
} from "@mui/material";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import flag from "../../assets/flag.png";
import { useTranslation } from "react-i18next";
import AuthContext from "../../context/authContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar(props) {
  const [t, i18n] = useTranslation();
  const [language, setlanguage] = useState("en");

  return (
    <>
      <div className="Nav_1">
        <div className="logo_container">
          <img className="logo_img" alt="logo" src={flag}></img>
          <p>Oromiya E-service Portal</p>
        </div>
        <div className="Nav1_menus">
          <Avatar sx={{ width: 20, height: 20 }}></Avatar>
          <NavLink to={"/login"} className="Nav1_menu">
            {t("login")}
          </NavLink>
          <NavLink to={"/register"} className="Nav1_menu">
            Registration
          </NavLink>
          <FormControl variant="standard" size="small">
            <Select
              size="small"
              style={{ fontSize: "13px" }}
              value={language}
              onChange={(e) => {
                setlanguage(e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
              label="Language"
            >
              <MenuItem value={"oro"}>Oromifa</MenuItem>
              <MenuItem value={"en"}>English</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className="search_input"
            id="input-with-icon-textfield"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className="Nav_2">
        <div className="logo_container">
          <p>E-service Portal</p>
        </div>
        <div className="Nav2_menus">
          <NavLink to={"/"} className="menu">
            Home
          </NavLink>
          <NavLink to={"/services"} className="menu">
            Service
          </NavLink>
          <NavLink to={"/topics"} className="menu">
            Topics
          </NavLink>
          <NavLink to={"/providers"} className="menu">
            Providers
          </NavLink>
          <NavLink to={"/myapplication"} className="menu">
            My Application
          </NavLink>
          <NavLink to={"/more"} className="menu">
            More
          </NavLink>
          <MenuIcon
            onClick={props.setshowMenu}
            className="Humberger_icon"
          ></MenuIcon>
        </div>
      </div>
    </>
  );
}

export default Navbar;
