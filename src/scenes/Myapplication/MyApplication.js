import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CommentBankOutlinedIcon from "@mui/icons-material/CommentBankOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import "./Myapplication.css";
import Notification from "../../components/MyApplication/Notification";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      className="myapp_menuitem"
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <p className="menuitem_text">
        <Link to={to}>{title}</Link>
      </p>
    </MenuItem>
  );
};

export default function Myapplication() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("notification");
  return (
    <div className="myapplication_wrapper">
      <Sidebar defaultCollapsed={isCollapsed}>
        <Menu>
          <MenuOutlinedIcon
            className="profile_menu_icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
          {!isCollapsed && (
            <div className="side_profiles">
              <Avatar className="profile_avatar"></Avatar>
              <h4 className="user_name">Abdiyu Urgesa</h4>
            </div>
          )}
          <div className="sideLinks">
            <Item
              title="Notification"
              to="/myapplication/log"
              icon={<EmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Track Application"
              to="/myapplication/log"
              icon={<BallotOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Follow-Up Tasks"
              to="/myapplication/log"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Appointments"
              to="/myapplication/log"
              icon={<EventRepeatOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Payment Orders"
              to="/myapplication/log"
              icon={<CurrencyExchangeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Payment Receipts"
              to="/myapplication/log"
              icon={<PaidOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Correspondence"
              to="/myapplication/log"
              icon={<CommentBankOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Draft Applications"
              to="/myapplication/log"
              icon={<DraftsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Archive Applications"
              to="/myapplication/log"
              icon={<ArchiveOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </Sidebar>
      <main className="myapp_routes">
        <Routes>
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </main>
    </div>
  );
}
