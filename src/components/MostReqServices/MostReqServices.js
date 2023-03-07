import "./MostReqServices.css";
import { Card } from "@mui/material";

export default function MostReqServices() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="flex_col">
      <Card className="most_req_wrapper">
        <div>
          <p className="req_header">Most Requested services</p>
          <hr></hr>
          <div className="req_elmnt">
            <p className="req_num">1</p>
            <p className="req_text">
              Registration of Active Public Employees for Social Security
              Services
            </p>
          </div>

          <div className="req_elmnt">
            <p className="req_num">2</p>
            <p className="req_text">Renewal of Professionals License</p>
          </div>

          <div className="req_elmnt">
            <p className="req_num">3</p>
            <p className="req_text">
              Registration of Active Public Employees for Social Security
              Services
            </p>
          </div>

          <div className="req_elmnt">
            <p className="req_num">4</p>
            <p className="req_text">Renewal of Professionals License</p>
          </div>
        </div>
      </Card>

      <Card className="most_req_wrapper">
        <div>
          <p className="req_header">Recently Added services</p>
          <hr></hr>
          <div className="req_elmnt">
            <p className="req_num">1</p>
            <p className="req_text">
              Registration of Active Public Employees for Social Security
              Services
            </p>
          </div>

          <div className="req_elmnt">
            <p className="req_num">2</p>
            <p className="req_text">Renewal of Professionals License</p>
          </div>

          <div className="req_elmnt">
            <p className="req_num">3</p>
            <p className="req_text">
              Registration of Active Public Employees for Social Security
              Services
            </p>
          </div>

          <div className="req_elmnt">
            <p className="req_num">4</p>
            <p className="req_text">Renewal of Professionals License</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
