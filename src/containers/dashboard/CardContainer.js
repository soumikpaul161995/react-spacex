import React from "react";
import { globalConstants } from "../../constants/global";
import { RocketDetailsCard } from "../../components/RocketDetailsCard";
import { Row, Col } from "react-bootstrap";

export const CardContainer = ({ isLoaded, data }) => {
  {
    return isLoaded ? (
      <Col xs={12} sm={12} md={8} lg={9}>
        <Row>
          {data && data.length > 0 ? (
            data.map((details) => {
              return (
                <Col xs={12} sm={12} md={6} lg={3} className={'mb-3'}>
                  <RocketDetailsCard details={details} />
                </Col>
              );
            })
          ) : (
            <div className="alert alert-danger w-100 mr-3" role="alert">
              {globalConstants.NO_RECORDS_FOUND}
            </div>
          )}
        </Row>
      </Col>
    ) : (
      <div
        className={
          "d-flex col-lg-9 col-md-6 col-sm-12 col-12 justify-content-center"
        }
      >
        {["dot1", "dot2", "dot3"].map(() => (
          <div className="spinner-grow text-success m-1 align-self-center">
            <span className="sr-only">{globalConstants.LOADING}</span>
          </div>
        ))}
      </div>
    );
  }
};
