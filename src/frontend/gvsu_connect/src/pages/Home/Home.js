import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Chat from "../Chat/Chat";
import Accommodation from "../Corousel/Corousel";
import { Button } from "react-bootstrap";
import axios from "axios";
function Home(props) {
  let navigate = useNavigate();
  const [postMsg, setPostMsg] = useState("");
  const [postimages, setPostImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showChat, setShowChat] = useState(true);
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Content-Type": "application/json",
  };
  const users = [
    { name: "username1", id: 1 },
    { name: "username2", id: 2 },
    { name: "username3", id: 3 },
    { name: "username4", id: 4 },
    { name: "username5", id: 5 },
    { name: "username6", id: 6 },
    { name: "username7", id: 7 },
    { name: "username8", id: 8 },
  ];

  useEffect(() => {
    var data = {
      category: "general",
    };
    // setPosts([
    //   {
    //     username: "test",
    //     post_msg: "dsvcdfsvfdvgdfgvfgfgfsdgfd",
    //     comments: [
    //       {
    //         comment_user: "dhgds",
    //         msg: "commentaksjn;askdfn;alskdfn;alskdfasdf",
    //       },
    //       {
    //         comment_user: "dfdsfsd34234234234jn2k",
    //         msg: "2ekjfhds",
    //       },
    //     ],
    //   },
    //   {
    //     username: "test1",
    //     post_msg: "dsvcdfsvfdvgdfgvfgfgfsdgfd",
    //     comments: [
    //       {
    //         comment_user: "dhgds",
    //         msg: "asdfasdf;masdl;kfnal;sdknf",
    //       },
    //       {
    //         comment_user: "dfdsfsd",
    //         msg: "2ekjfhds",
    //       },
    //     ],
    //   },
    // ]);
    axios.post('http://localhost:3001/getposts',data, headers).then (res => {
        setPosts(res.data);
    });
  }, []);

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
      username: localStorage.getItem("username"),
      post_msg: postMsg,
      images: postimages,
      category: "general",
    };
    axios.post("http://localhost:3001/addPost", data, headers).then((res) => {
      setPosts([...posts, data]);
      setPostMsg("");
    });
  };

  const handleUpload = () => {
    document.querySelector(".upload-images").click();
  };

  //  useEffect(()=> setPosts(finlaData), [finlaData])
  return (
    <>
      <Header />

      <Container className="mt-3">
        <Row>
          <Col sm={8} className="mid-container">
            <Row sm={12}>
              <div className="shadow p-3  bg-white rounded">
                <div class="d-flex mt-3 mb-4">
                  <div className="media me-3 shadow profile-pic">
                    <img
                      class="mr-3"
                      src="../profile.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                  <div class="media-body w-100">
                    <h5 class="mt-0">{localStorage.getItem("username")}</h5>
                    <form>
                      <div class="mb-3">
                        <textarea
                          class="form-control min-width-400"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Write your thoughts"
                          onChange={(e) => setPostMsg(e.target.value)}
                          value={postMsg}
                        ></textarea>
                      </div>
                      <div className="d-flex align-items-center">
                        <i
                          className="bi bi-upload"
                          onClick={() => handleUpload()}
                        ></i>
                        <span>Images/Video</span>
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control upload-images d-none"
                          type="file"
                          id="formFileMultiple"
                          multiple
                          accept="image/png, image/jpeg"
                          onChange={(e) =>
                            setPostImages([...postimages, e.target.files[0]])
                          }
                        />
                      </div>
                    </form>
                    {postimages.length > 0 && <div className="thumbnails">
                        {postimages.map(image => (
                            <div className="item">
                                <i className="icon-del"></i>
                                <img src={URL.createObjectURL(image)} alt="" />
                            </div>
                        ))}
                    </div>}
                  </div>
                </div>
                <div className="d-flex justify-content-end  ">
                  <Button onClick={(e) => postGeneral(e)}>Post</Button>
                </div>
              </div>
            </Row>
            <Row sm={12} className="min-height-600">
              {posts.length > 0 && (
                <>
                  {posts.map((post) => (
                    <div className="shadow p-3 mt-2  bg-white rounded">
                      <div class="mt-3 mb-4">
                        <div className="d-flex align-items-center media me-3 shadow profile-pic">
                          <img
                            class="mr-3"
                            src="../profile.jpg"
                            alt="Generic placeholder image"
                          />
                          <h4 className="ml-10">{post.username}</h4>
                        </div>
                        <div class="media-body mt-2">
                          <div>{post.post_msg}</div>
                          {post.images.length > 0 && (
                            <div className="media-container">
                                <Accommodation images = {post.images}/>
                            </div>
                          )}

                        </div>
                      </div>
                      <h4 className="header">Comments:</h4>
                      {post.comments !== undefined &&
                        post.comments.length > 0 &&
                        post.comments.map((comment) => (
                          <div class="d-flex mt-3 mb-4">
                            <div className="media me-3 shadow profile-pic">
                              <img
                                class="mr-3"
                                src="../profile.jpg"
                                alt="Generic placeholder image"
                              />
                            </div>
                            <div class="media-body comment-box">
                              <h6 class="mt-0 user-name">
                                {comment.comment_user}
                              </h6>
                              {comment.msg}
                            </div>
                          </div>
                        ))}
                      <div className="d-flex add-comment">
                        <div className="d-flex align-items-center media me-3 shadow profile-pic">
                          <img
                            class="mr-3"
                            src="../profile.jpg"
                            alt="Generic placeholder image"
                          />
                        </div>

                        <Form className="w-100">
                          <Form.Group
                            className="mb-3 p-relative"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Any Comments?"
                            />
                            <i className="icon-send"></i>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Row>
          </Col>
          <Col sm={4} className="right-container">
            <div className="shadow p-3  bg-white rounded chat-box">
              {users.map((user) => (
                <div class="d-flex mt-3 mb-4 align-items-center">
                  <div className="media me-3 shadow profile-pic">
                    <img
                      class="mr-3"
                      src="../profile.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                  <h4>{user.name}</h4>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {showChat && <Chat to="test1" />}
      </Container>
    </>
  );
}

export default Home;
