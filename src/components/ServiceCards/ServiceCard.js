import { Button, Card } from "@mui/material";
import "./ServiceCard.css";
export default function ServiceCard(props) {
  return (
    <Card className="serviceCard_container">
      <div className="service_card_title">
        <h4>{props.title}</h4>
      </div>
      <hr className="service_card_hr"></hr>
      <div className="service_card_discription">
        <p>{props.discription}</p>
      </div>
      <hr className="service_card_hr"></hr>
      <div className="service_card_btn">
        {props.type === "provider" ? (
          <p>
            <b>{props.services}</b> services
          </p>
        ) : (
          <Button
            onClick={props.excute}
            className="black_btn"
            variant="contained"
          >
            Apply
          </Button>
        )}
      </div>
    </Card>
  );
}
