import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Chat from '../Chat/Chat';
function Home(props) {
    let navigate = useNavigate();
    return (
        <>

            <Header />

            <Container>
                <Row>
                    <Col sm={8}>
                        <div className='shadow p-3  bg-white rounded'>


                       

                        <div class="d-flex mt-3 mb-4">
                            <div className='media me-3 shadow'>
                                <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                            </div>
                            <div class="media-body">
                                <h5 class="mt-0">Media heading</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>


                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            
                        </Form>
                        </div>


                    </Col>
                    <Col>
                        <Chat />
                    </Col>
                    <Col sm={4}>
                        <div className='shadow p-3  bg-white rounded'>sm=4</div>
                        <div className='shadow p-3  bg-white rounded'>sm=4</div>
                        <div className='shadow p-3  bg-white rounded'>sm=4</div>
                        </Col>
                </Row>
            </Container>


        </>
    )
}

export default Home;