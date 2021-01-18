import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import querystring from "querystring";
import { globalConstants } from "../../constants/global";
import { CardContainer } from "./CardContainer";

export const Dashboard = (props) => {

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useState({
    limit: 150,
    launch_year: undefined,
    launch_success: undefined,
    land_success: undefined,
  });

  useEffect(() => {
    fetchAPI(filters);
  }, []);

  const getUpdatedApiUrl = (filters = {}) => {
    return globalConstants.API_BASE_URL + querystring.stringify({ ...filters });
  };

  const fetchAPI = (filters) => {
    const URL = getUpdatedApiUrl(filters);
    setIsLoaded(false)
    setFilters(filters)
    fetch(URL) // we can use Axios as well
      .then((response) => response.json())
      .then((data) => {
          setIsLoaded(true)
          setData(data)
        });
  };

  const updateApiFilters = (type, value) => {
    if (filters[type] === value) {
      value = undefined;
    }
    const newFilters = {
      ...filters,
      [type]: value,
    };
    fetchAPI(newFilters);
  };

  const uniqueLaunchYears = new Array(16)
    .fill(0)
    .map((_, index) => 2006 + index);
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={3}>
        <Card className="App-filter-card">
          <Card.Body>
            <Card.Title className="App-filter-header">Filters</Card.Title>
            <Card.Text className="App-filter-heading-launch-year">
              Launch Year
              <hr className="App-filters-hr" />
            </Card.Text>

            <Row>
              <div className="App-filter-button-container">
                {uniqueLaunchYears.map((year) => {
                  return (
                    <Button
                      className="App-filter-button"
                      variant={
                        filters.launch_year === year.toString()
                          ? "success"
                          : "outline-success"
                      }
                      value={year}
                      onClick={(e) =>
                        updateApiFilters("launch_year", e.target.value)
                      }
                    >
                      {year}
                    </Button>
                  );
                })}
              </div>
            </Row>

            <Card.Text className="App-filter-heading">
              Successful Launch
              <hr className="App-filters-hr" />
            </Card.Text>

            <div className="App-filter-button-container">
              <Button
                className="App-filter-button"
                variant={
                  filters.launch_success === "true"
                    ? "success"
                    : "outline-success"
                }
                onClick={(e) =>
                  updateApiFilters("launch_success", e.target.value)
                }
                value="true"
              >
                {globalConstants.TRUE}
              </Button>

              <Button
                className="App-filter-button"
                variant={
                  filters.launch_success === "false"
                    ? "success"
                    : "outline-success"
                }
                onClick={(e) =>
                  updateApiFilters("launch_success", e.target.value)
                }
                value="false"
              >
                {globalConstants.FALSE}
              </Button>
            </div>

            <Card.Text className="App-filter-heading">
              Successful Landing
              <hr className="App-filters-hr" />
            </Card.Text>
            <div className="App-filter-button-container">
              <Button
                className="App-filter-button"
                variant={
                  filters.land_success === "true"
                    ? "success"
                    : "outline-success"
                }
                onClick={(e) =>
                  updateApiFilters("land_success", e.target.value)
                }
                value="true"
              >
                {globalConstants.TRUE}
              </Button>

              <Button
                className="App-filter-button"
                variant={
                  filters.land_success === "false"
                    ? "success"
                    : "outline-success"
                }
                onClick={(e) =>
                  updateApiFilters("land_success", e.target.value)
                }
                value="false"
              >
                {globalConstants.FALSE}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <CardContainer isLoaded={isLoaded} data={data} />
    </Row>
  );
};
