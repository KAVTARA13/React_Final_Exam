import { useState } from 'react';

function PostsListItem({ post }) {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, addComment] = useState([]);
  const [text, setText] = useState('');
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addComment([...comment, text]);
    setText('');
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button className="btn btn-primary" onClick={likeHandler}>
          Like
        </button>
        <small className="text-muted"> {like}</small>
        <ul className="list-group">
          {comment.map((comment) => (
            <li className="list-group-item">{comment}</li>
          ))}
        </ul>
        <form className="row g-3" onSubmit={onSubmit}>
          <div className="col-auto">
            <input
              type="text"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
              className="form-control"
              placeholder="Comment"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostsListItem;
