import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Chat from '../Chat/Chat';
import { Button } from 'react-bootstrap';
import axios from 'axios';
function Home(props) {
    let navigate = useNavigate();

    const [postMsg, setPostMsg] = useState("");
    const [posts, setPosts] = useState([])
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    useEffect(() => {
        var data = {
            "category": "general"
        }
        axios.post('http://localhost:3001/getposts',data, headers).then (res => {
            getComments(res.data);
        });
    }, [])
    
    setTimeout(() => {
        var data = {
            "category": "general"
        }
        axios.post('http://localhost:3001/getposts',data, headers).then (res => {
            getComments(res.data);
        });
    }, 90000000)

    const getComments = (dataPosts) => {
        var finalData = []
        dataPosts.map(async (data, idx) => {
            var req = {
                "post_id": data.post_Id
            };
            await axios.post('http://localhost:3001/getComments',req, headers).then (res => {
                dataPosts[idx]["comments"] = res.data
                //console.log("data", dataPosts);
                //setPosts([...dataPosts, dataPosts[idx]["comments"] = res.data])
            });
        })
        console.log("data", dataPosts);
        
        
    }
    const postGeneral = (e) => {
        e.preventDefault();
        var data = {
            "username": localStorage.getItem("username"),
            "post_msg": postMsg,
            "category": "general"
        }
        axios.post('http://localhost:3001/addPost',data, headers).then (res => {
                //localStorage.setItem('username', emailRef.current.value)
                //console.log(res)
                //navigate('/home');
                // let posts = posts;
                // posts.push
                setPosts([...posts, data]);
                setPostMsg('')
            });
    }
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
                                    <h5 class="mt-0">{localStorage.getItem("username")}</h5>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" placeholder="Write your thoughts" onChange = {(e) => setPostMsg(e.target.value)}
                                                value={postMsg}/>
                                        </Form.Group>
                                        
                                    </Form>
                                </div>
                            </div>
                            <Button onClick={(e) => postGeneral(e)}>Post</Button>

                        
                        </div>
                        </Col>
                </Row>
                <Row>
                {posts.length > 0 && 
                    <Col sm={8}>
                        {posts.map(post => { 
                        return <div className='shadow p-3  bg-white rounded'>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                <div class="media-body">
                                    <h5 class="mt-0">{post.username}</h5>
                                    {post.post_msg}
                                </div>
                            </div>
                            Comments:
                            {post.comments.length > 0 && 
                                post.comments.map(comment => {
                                    return <div class="d-flex mt-3 mb-4">
                                    <div className='media me-3 shadow'>
                                        <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mt-0">{post.username}</h5>
                                        {post.msg}
                                    </div>
                                </div>
                                })
                                
                        }
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Any Comments?" />
                            </Form.Group>
                            
                        </Form>
                        </div>}
                        )
                    }   


                    </Col>
}
                    {/* <Col>
                        <Chat from="test" to="test1"/>
                    </Col> */}
                    <Col sm={4}>
                        <div className='shadow p-3  bg-white rounded'>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                sm=4
                            </div>
                        </div>
                        </Col>
                </Row>
                {/* <Row>
                    <Chat from="test" to="test1"/>
                </Row> */}
            </Container>


        </>
    )
}

export default Home;