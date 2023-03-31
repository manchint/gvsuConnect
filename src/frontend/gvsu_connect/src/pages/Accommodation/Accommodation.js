import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Chat from "../Chat/Chat";
import Corousel from "../Corousel/Corousel";
import { Button } from "react-bootstrap";
import axios from "axios";
function Accommodation(props) {
  let navigate = useNavigate();
  const [postMsg, setPostMsg] = useState("");
  const [postimages, setPostImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [users, setUsers] = useState([]);
  const [toUser, setToUser] = useState('');
  const [commentData, setCommentData] =  useState({
    commentMsg : '',
    post_id : ''
  });
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    var data = {
      category: "accommodation",
    };
    axios.post('http://localhost:3001/getposts',data, headers).then (res => {
        setPosts(res.data);
    });
    var userData = {
        from: localStorage.getItem("username")
    };
    axios.post('http://localhost:3001/getChatUsers',userData, headers).then (res => {
        setUsers(res.data);
    });
  }, []);
  useEffect(() => {
    setShowChat(true);
  }, [toUser])
  setTimeout(() => {
      var data = {
          "category": "accommodation"
      }
      axios.post('http://localhost:3001/getposts',data, headers).then (res => {
          setPosts(res.data);
      });
  }, 900000)
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
  const addComment = (e) => {
    e.preventDefault();
      var dataComments = {
        post_id: commentData.post_id,
        comment_user: localStorage.getItem("username"),
        msg : commentData.commentMsg
      }
      setCommentData({
        commentMsg : '',
        post_id : ''
      });
      var data = {
        "category": "general"
    }
      axios.post("http://localhost:3001/addComment", dataComments, headers).then((res) => {
        axios.post('http://localhost:3001/getposts',data, headers).then (res => {
          setPosts(res.data);
      });
    });
  }
  const handleUpload = () => {
    document.querySelector(".upload-images").click();
  };

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
                          <h4 className="ml-10" onClick={() => {if(post.username !== localStorage.getItem("username")) {setToUser(post.username)}}}>{post.username}</h4>
                        </div>
                        <div class="media-body mt-2">
                          <div>{post.post_msg}</div>
                          {post.images.length > 0 && (
                            <div className="media-container">
                                <Corousel images = {post.images}/>
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
                              onChange={(e) => setCommentData({commentMsg : e.target.value, post_id: post.post_Id})}
                            />
                            <i className="icon-send" onClick={(e) => addComment(e)}></i>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Row>
          </Col>
        </Row>

        {showChat && <Chat to={toUser}  setShowChat={setShowChat}/>}
      </Container>
    </>
  );
}

export default Accommodation;
