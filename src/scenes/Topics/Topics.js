import ServiceCard from "../../components/ServiceCards/ServiceCard";
import "./Topics.css";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SerrvicesLeftBar from "../../components/ServicesLeftBar/ServicesLeftBar";
import MostReqServices from "../../components/MostReqServices/MostReqServices";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { Button } from "@mui/material";
export default function Topics() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="service_wrapper">
      <div className="service_left">
        <SerrvicesLeftBar></SerrvicesLeftBar>
      </div>
      <div className="service_cente">
        <div className="service_header">
          <div className="service_header_tit">
            <ListAltOutlinedIcon />
            <p>List Of services</p>
          </div>
          <div className="filter_search_container">
            <TextField
              size="small"
              id="filter_search_input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button size="small" className="black_btn" variant="contained">
              Go
            </Button>
          </div>
        </div>
        <hr></hr>
        <div className="content_intro">
          <p>
            The E-Services Portal categorizes the various public services into
            topics and sub-topics for ease of locating a particular service. You
            can select a public service from the list to get possible service
            providers. By selecting a service provider of your choice, you will
            get detail instruction on how to request the service.
          </p>
        </div>
        <div className="services_container">
          {/* {a.map((x) => (
            <ServiceCard
              title="The Ethiopian Government Electronic Services Portal has been developed
to provide electronic public services to citizens, non-citizens,
businesses, and governmental & non-governmental organizations."
              discription="here the discription The Ethiopian Government Electronic Services Portal has been developed
            to provide electronic public services to citizens, non-citizens,
            businesses, and governmental & non-governmental organizations"
            ></ServiceCard>
          ))} */}
        </div>
      </div>
      <div className="service_right">
        <MostReqServices></MostReqServices>
      </div>
    </div>
  );
}
