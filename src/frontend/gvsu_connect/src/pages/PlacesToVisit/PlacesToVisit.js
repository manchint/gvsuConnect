import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Corousel from "../Corousel/Corousel";
import axios from "axios";
function PlacesToVisit(props) {
  const [places, setPlaces] = useState([])
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    var data = {};
    axios.post('http://localhost:3001/getplaces',data, headers).then (res => {
        setPlaces(res.data);
    });
  }, []);
  setTimeout(() => {
      var data = {}
      axios.post('http://localhost:3001/getplaces',data, headers).then (res => {
        setPlaces(res.data);
      });
  }, 900000);

  return (
    <>
      <Header />

      <Container className="mt-3">
        <Row style={{justifyContent:"center"}}>
          <Col sm={8} className="mid-container">
            <Row sm={12} className="min-height-600">
              {places.length > 0 && (
                <>
                  {places.map((place) => (
                    <div className="shadow p-3 mt-2  bg-white rounded">
                      <div class="mt-3 mb-4">
                          <h4 className="ml-10">{place.location}</h4>
                        <div class="media-body mt-2">
                          <div>{place.travel_info}</div>
                          {place.imagesLinks !== undefined  && (
                            <div className="media-container">
                                <Corousel image = {place.imagesLinks} places="places"/>
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlacesToVisit;
