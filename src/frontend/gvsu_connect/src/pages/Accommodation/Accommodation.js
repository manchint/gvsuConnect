import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Chat from "../Chat/Chat";
import Corousel from "../Corousel/Corousel";
import { Button } from "react-bootstrap";
import { getAuth } from "firebase/auth";
import {db} from '../../firebase';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, serverTimestamp, getDocs, doc, updateDoc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
// import { getDatabase, ref as dbDatabase,dbref } from "firebase/database";
function Accommodation({route, navigation}) {
  let navigate = useNavigate();
  let location = useLocation();
  const [formdata, setFormData] = useState({
    postMsg : '',
    postimages: {},
    user: ''
  })
  const [posts, setPosts] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [toUser, setToUser] = useState();
  const [users, setusers] = useState([])
  const auth = getAuth();

  const getPosts =  async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    let postsTemp = [];
    let postIds = [];
    let idx = 0;
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        idx += 1;
        if(postIds.indexOf(doc.id) < 0) {
          if(doc.data().category == location.state.category) {
            postIds.push(doc.id)
            postsTemp.push({id:doc.id, data:doc.data()});
          }
        }
        if(querySnapshot.size - 1 == idx) {setPosts(postsTemp)}
      });
      const messagesSna = await getDocs(collection(db, "messages"));
        let users = [];
        let msgidx = 0;
        messagesSna.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data(), "===", idx);
          if(users.indexOf(doc.data().from) < 0 && doc.data().from !== auth.currentUser.displayName) {
            users.push(doc.data().from);
          }
          else if(users.indexOf(doc.data().to) < 0 && doc.data().to !== auth.currentUser.displayName) {
            users.push(doc.data().to)
          }
          msgidx += 1;
          if(messagesSna.size - 1 == msgidx) {setusers(users)}
        });
  };
  useEffect(() => {
    if(auth.currentUser == null || auth.currentUser == undefined) {navigate("/")}
    else {setFormData((prevState) => ({
      ...prevState,
      user : auth.currentUser.displayName
    }))}
    getPosts();
  }, []);
  useEffect(() => {
    if(auth.currentUser == null || auth.currentUser == undefined) {navigate("/")}
    else {setFormData((prevState) => ({
      ...prevState,
      user : auth.currentUser.displayName
    }))}
    getPosts();
  }, [location.state]);
  const onClickofChat = (e, user) => {
    if(user !== auth.currentUser.displayName) {
      setToUser(user);
      setShowChat(true);
    }
    
  }
  const storeImage = async (image) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage();
      const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          reject(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  }
  const uploadPost = async (e) => {
    e.preventDefault();

    const imagesURL =  formdata.postimages.length > 0 ? await Promise.all(
      [...formdata.postimages].map((image) => storeImage(image))) : []
    console.log(imagesURL);
    const formdataCopy = {
      ...formdata,
      imagesURL: imagesURL,
      category: location.state.category,
      timestamp: serverTimestamp(),
    }
    delete formdataCopy.postimages;
    //uplpoading to firebase
    const docRef = await addDoc(collection(db, "posts"), formdataCopy);
    setFormData((prevState) => ({
      ...prevState,
      postMsg : '',
      postimages: {},
    }))
    toast.success('Successfully Added!')
    getPosts();
  };
  const addComment = async (e, idx, id) => {
    e.preventDefault();
    const docController = doc(db, "posts", id);
    const postDataCopy = {
      ...posts[idx],
    }
    const comment = {
      commentUser: auth.currentUser.displayName,
      commentMsg: posts[idx].commentMsg
    }
    postDataCopy.data.comments = postDataCopy.data.comments == undefined ? [comment] : [...postDataCopy.data.comments, comment]
    const docRef = await updateDoc(docController, postDataCopy.data);
    getPosts();
    }
  const handleUpload = () => {
    document.querySelector(".upload-images").click();
  };

  return (
    <>
       <div><Toaster
            position="bottom-center"
            reverseOrder={false}
            /></div>
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
                    <h5 class="mt-0">{auth.currentUser == null ? '' : auth.currentUser.displayName}</h5>
                    <form>
                      <div class="mb-3">
                        <textarea
                          class="form-control min-width-400"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Write your thoughts"
                          onChange={(e) => setFormData((prevState) => ({
                            ...prevState,
                            postMsg : e.target.value
                          }))}
                          value={formdata.postMsg}
                        ></textarea>
                      </div>
                      <div className="d-flex align-items-center">
                        <i
                          className="bi bi-upload"
                          onClick={() => handleUpload()}
                        ></i>
                        <span>Upload Images</span>
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control upload-images d-none"
                          type="file"
                          id="formFileMultiple"
                          multiple
                          accept=".jpg,.png,.jpeg"
                          onChange={(e) => setFormData((prevState) => ({
                            ...prevState,
                            postimages : e.target.files
                          }))}
                        />
                      </div>
                    </form>
                    {formdata.postimages.length > 0 && <div className="thumbnails">
                        {[...formdata.postimages].map((image) => (
                            <div className="item">
                                <img src={URL.createObjectURL(image)} alt="" />
                            </div>
                        ))}
                    </div>}
                  </div>
                </div>
                <div className="d-flex justify-content-end  ">
                  <Button onClick={(e) => uploadPost(e)}>Post</Button>
                </div>
              </div>
            </Row>
            <Row sm={12} className="min-height-600">
              {posts.length > 0 && (
                <>
                  {posts.map((post, idx) => (
                    <div className="shadow p-3 mt-2  bg-white rounded">
                      <div class="mt-3 mb-4">
                        <div className="d-flex align-items-center media me-3  w-100">
                          <img
                            class="mr-3 profile-pic  shadow"
                            src="../profile.jpg"
                            alt="Generic placeholder image"
                          />
                          <h4 className="ml-10" onClick={(e) => onClickofChat(e, post.data.user)}>{post.data.user}</h4>
                        </div>
                        <div class="media-body mt-2">
                          <div>{post.data.postMsg}</div>
                          {post.data.imagesURL.length > 0  && (
                            <div className="media-container">
                                <Corousel imagesURL = {post.data.imagesURL}/>
                            </div>
                          )}

                        </div>
                      </div>
                      <h4 className="header">Comments:</h4>
                      {post.data.comments !== undefined &&
                        post.data.comments.length > 0 &&
                        post.data.comments.map((comment) => (
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
                                {comment.commentUser}
                              </h6>
                              {comment.commentMsg}
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
                              value={post.commentMsg}
                              onChange={(e) =>  {
                                let tempPosts = [...posts];
                                let item = {...tempPosts[idx]};
                                item.commentMsg = e.target.value;
                                tempPosts[idx] = item
                                setPosts(tempPosts)
                              }}
                            />
                            <i className="icon-send" onClick={(e) => addComment(e, idx, post.id)}></i>
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
              {users.length > 0 && [...users].map((user) => (
                        <div class="d-flex mt-3 mb-4 align-items-center">
                        <div className="media me-3 shadow profile-pic">
                            <img
                            class="mr-3"
                            src="../profile.jpg"
                            alt="Generic placeholder image"
                            />
                        </div>
                        <h4 onClick={(e) => onClickofChat(e,user)}>{user}</h4>
                        </div>
              ))}
            </div>
          </Col>
        </Row>

        {showChat && <Chat to={toUser}  setShowChat={setShowChat}/>}
      </Container>
    </>
  );
}

export default Accommodation;
