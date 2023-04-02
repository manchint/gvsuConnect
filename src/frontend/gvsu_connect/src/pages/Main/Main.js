import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Main(props) {
    const auth = getAuth();
    let navigate = useNavigate();
    useEffect(() => {
        if(auth.currentUser == null || auth.currentUser == undefined) {navigate("/")}
    }, [])
    return (
        <div>
            <p>Welcome Home!!</p>
            <Row>
            <Card style={{ width: '18rem', margin:'20px', cursor: "pointer" }}
                onClick={() => navigate("/posts", {
                    state : {
                        category: "general"
                    }
                    
                })}>
                <Card.Body>
                    <Card.Title>General Questions</Card.Title>
                    <Card.Text>Genral queries related to anything</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:'20px', cursor: "pointer"  }}
                onClick={() => navigate("/posts", {
                    state : {
                        category: "accommodation"
                    }
                    
                })}>
                <Card.Body>
                    <Card.Title>Accommodation</Card.Title>
                    <Card.Text>Accommodation availability</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:'20px', cursor: "pointer"  }}
                onClick={() => navigate("/posts", {
                    state : {
                        category: "car rides"
                    }
                    
                })}>
                <Card.Body>
                    <Card.Title>Car Rides</Card.Title>
                    <Card.Text>Availability of car Rides</Card.Text>
                </Card.Body>
            </Card>
            </Row>
            <Row>
            <Card style={{ width: '18rem', margin:'20px', cursor: "pointer" }}
                onClick={() => navigate("/posts", {
                    state : {
                        category: "Places"
                    }
                    
                })}>
                <Card.Body>
                    <Card.Title>Places to Visit</Card.Title>
                    <Card.Text>Places to visit over the weekend</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:'20px', cursor: "pointer"  }}
                onClick={() => navigate("/posts", {
                    state : {
                        category: "hangout"
                    }
                    
                })}>
                <Card.Body>
                    <Card.Title>Hangout places</Card.Title>
                    <Card.Text>Best places to hangout with friends</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:'20px', cursor: "pointer"  }}
                onClick={() => navigate("/posts", {
                    state : {
                        category: "hangout"
                    }
                    
                })}>
                <Card.Body>
                    <Card.Title>Profile</Card.Title>
                    <Card.Text>View/Edit Profile</Card.Text>
                </Card.Body>
            </Card>
            </Row>
        </div>
    )
}


export default Main;