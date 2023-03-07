import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import "./HomeLeftBar.css";
import { NavLink } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { useState } from "react";
export default function HomeLeftBar() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [leftSwich, setleftSwich] = useState(true);
  return (
    <div className="Homeleftbar_wrapper">
      <div className="HomeLeftbar_header">
        <NavLink
          onClick={() => {
            setleftSwich(!leftSwich);
          }}
          className="HomeLeftbar_Heam_nav"
        >
          <TopicOutlinedIcon /> Topics
        </NavLink>
        <NavLink
          onClick={() => setleftSwich(!leftSwich)}
          className="HomeLeftbar_Heam_nav"
        >
          <MapsHomeWorkOutlinedIcon /> Providers
        </NavLink>
      </div>

      <hr></hr>
      {leftSwich ? (
        <div className="HomeLeftbar_list">
          {a.map((x, index) => (
            <div key={index} className="HomeLeftbar_list_elmnt">
              <Checkbox size="small" />
              <p>Science, IT and Communications</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="HomeLeftbar_list">
          {a.map((x, index) => (
            <div key={index} className="HomeLeftbar_list_elmnt">
              <Checkbox size="small" />
              <p>Ministry Of Trade and Regional Integration</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
