import React from "react";
import { Card } from "react-bootstrap";

export const RocketDetailsCard = ({ details }) => {
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_year,
    launch_success,
    links,
    rocket,
  } = details;
  const land_success = rocket.first_stage.cores[0].land_success;

  return (
    <Card className="p-2 h-100">
      <div key={flight_number}>
        <div className="d-flex justify-content-center">
          <img
            src={links.mission_patch_small}
            alt="mission patch img not available on api"
            className="Rocket-mission-image"
          />
        </div>
        <div className="Rocket-mission-name-flight-number">
          {mission_name} #{flight_number}
        </div>
        <div className="Rocket-detail-label">
          Mission Ids:{" "}
          {mission_id.length > 0 ? (
            <ul>
              {" "}
              {mission_id.map((id, index) => {
                return (
                  <li key={index} className="Rocket-detail-value">
                    {id}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="Rocket-detail-label">
          Launch Year:{" "}
          <span className="Rocket-detail-value">{launch_year}</span>
        </div>
        <div className="Rocket-detail-label">
          Successful Launch:{" "}
          <span className="Rocket-detail-value">
            {launch_success ? "true" : "false"}
          </span>
        </div>
        <div className="Rocket-detail-label">
          Successful Landing:{" "}
          <span className="Rocket-detail-value">
            {land_success ? "true" : "false"}
          </span>
        </div>
      </div>
    </Card>
  );
};
