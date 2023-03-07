import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import { InputAdornment } from "@mui/material";
import { Button } from "@mui/material";
import "./HomeIntro.css";

export default function HomeIntro() {
  return (
    <div className="homeIntro_wrapper">
      <div className="intro_title">
        <h3>Welcome To Oromiya Region Electronic Service</h3>
      </div>
      <div className="intro_discription">
        <p>
          The Ethiopian Government Electronic Services Portal has been developed
          to provide electronic public services to citizens, non-citizens,
          businesses, and governmental & non-governmental organizations.
        </p>
      </div>
      <div className="intro_search_container">
        <TextField
          size="small"
          className="intro_search_input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button size="small" className="black_btn" variant="contained">
          Search
        </Button>
      </div>

      <div className="intro_data_wrapper">
        <div className="intro_data_container">
          <div className="intro_data_flex">
            <AccountBalanceOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">E-Services Portal Visitors</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <AccountBalanceOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">Available Service Providers</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <ListAltOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">Processed Customer</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <SearchIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">Online Government Services</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <GroupAddOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">Registered Customers</p>
        </div>
      </div>
    </div>
  );
}
