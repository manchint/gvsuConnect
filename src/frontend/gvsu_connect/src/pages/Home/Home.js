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
    const [postimages, setPostImages] = useState([])
    const [posts, setPosts] = useState([]);
    const [showChat, setShowChat] = useState(false);
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    useEffect(() => {
        var data = {
            "category": "general"
        }
        setPosts([{
            "username": "test",
            "post_msg" : "dsvcdfsvfdvgdfgvfgfgfsdgfd",
            "comments" : [{
                "comment_user" : "dhgds",
                "msg" : "comment"
            },
            {
                "comment_user" : "dfdsfsd",
                "msg" : "2ekjfhds"
            }
        ]
        }]);
        // axios.post('http://localhost:3001/getposts',data, headers).then (res => {
        //     setPosts([{
        //         "username": "test",
        //         "comments" : [{
        //             "comment_user" : "dhgds",
        //             "msg" : "comment"
        //         },
        //         {
        //             "comment_user" : "dfdsfsd",
        //             "msg" : "2ekjfhds"
        //         }
        //     ]
        //     }]);
        // });
    }, [])
    
    // setTimeout(() => {
    //     var data = {
    //         "category": "general"
    //     }
    //     axios.post('http://localhost:3001/getposts',data, headers).then (res => {
    //         setPosts(res.data);
    //     });
    // }, 900000)
    const postGeneral = (e) => {
        e.preventDefault();
        var data = {
            "username": localStorage.getItem("username"),
            "post_msg": postMsg,
            "images" : postimages,
            "category": "general"
        }
        axios.post('http://localhost:3001/addPost',data, headers).then (res => {
                setPosts([...posts, data]);
                setPostMsg('')
            });
    }

   //  useEffect(()=> setPosts(finlaData), [finlaData])
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
                                            <Form.Control type="file"
                                                multiple
                                                accept="image/png, image/jpeg"
                                                onChange = {(e) => setPostImages([...postimages, e.target.files[0]])}/>
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
                        {posts.map(post => (
                        <div className='shadow p-3  bg-white rounded'>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                <div class="media-body">
                                    <h5 class="mt-0">{post.username}</h5>
                                    {post.post_msg}
                                    {post.images !== undefined && post.images.length > 0 && <p>csdcdsc</p>}
                                    {post.images !== undefined && post.images.length > 0 && <image src ={`data:image/png;base64,${post.images[0].imageData.toString('base64')}`}/>}
                                </div>
                            </div>
                            Comments:
                            {post.comments !== undefined && post.comments.length > 0 && 
                                post.comments.map(comment => (
                                    <div class="d-flex mt-3 mb-4">
                                    <div className='media me-3 shadow'>
                                        <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mt-0">{comment.comment_user}</h5>
                                        {comment.msg}
                                    </div>
                                </div>))}
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Any Comments?" />
                                </Form.Group>
                                
                            </Form>
                        </div>))}   


                    </Col>
                }
                    <Col sm={4}>
                        <div className='shadow p-3  bg-white rounded'>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                sm=4
                            </div>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                sm=4
                            </div>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                sm=4
                            </div>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                sm=4
                            </div>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                sm=4
                            </div>
                            <div class="d-flex mt-3 mb-4">
                                <div className='media me-3 shadow'>
                                    <img class="mr-3" src="../profile.jpg" alt="Generic placeholder image" />
                                </div>
                                sm=4
                            </div>
                        </div>
                        </Col>
                </Row>
                <Chat to="test1" />

            </Container>


        </>
    )
}

export default Home;