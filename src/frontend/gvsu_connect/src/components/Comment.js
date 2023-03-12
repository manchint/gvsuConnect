import React, { useState } from 'react';

function UserProfile({ user }) {
  return (
    <div style={{display: 'flex'}}>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
    </div>
  );
}

function Comment({ comment }) {
  return (
    <div>
      <UserProfile user={comment.user} />
      <p style={{marginLeft: '32px'}}>{comment.text}</p>
    </div>
  );
}

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (newComment.trim() === '') {
      return;
    }
    const newCommentObj = {
      text: newComment,
      user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        avatar: 'https://placehold.it/50x50'
      }
    };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  }

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  return (
    <div>
      <h2>Comments</h2>
      
      <div style={{marginLeft: '10px'}}>
        {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{marginLeft: '10px'}}>
          <input type="text" value={newComment} onChange={handleChange} />
        <button type="submit" style={{float: 'right', marginRight: '20px', backgroundColor:' rgb(131, 189, 239)', color: 'white'}}>Post</button>
      </form>
    </div>
  );
}

export default CommentsSection;
