import "./Home.css";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import ServiceCard from "../../components/ServiceCards/ServiceCard";
import HomeLeftBar from "../../components/HomeLeftBar/HomeLeftBar";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

export default function Home() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <HomeIntro />

      <div className="home_container">
        <div className="left">
          <HomeLeftBar></HomeLeftBar>
        </div>
        <div className="center">
          <div className="home_service_header">
            <ListAltOutlinedIcon />
            <p>List Of services</p>
          </div>
          <hr></hr>
          <div className="home_services_container">
            {a.map((x, index) => (
              <ServiceCard
                key={index}
                title="The Ethiopian Government Electronic Services Portal has been developed
 to provide electronic public services to citizens, non-citizens,
 businesses, and governmental & non-governmental organizations."
                discription="The Ethiopian Government Electronic Services Portal has been developed
              to provide electronic public services to citizens, non-citizens,
              businesses, and governmental & non-governmental organizations."
              ></ServiceCard>
            ))}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
