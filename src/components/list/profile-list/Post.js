// import { useDispatch, useSelector } from 'react-redux';
// import { deletePostsAction } from '../../../redux/actions/posts-actions';
// import { getPosts } from '../../../redux/selectors';
import { useContext } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';

function PostsListItem({ post }) {
  const { onPostDelete } = useContext(PostsProvider);
  // const dispatch = useDispatch();
  // const posts = useSelector(getPosts);
  // const deletePost = () => {
  //   const index = posts.findIndex((post) => post.id === post.id);

  //   const newPosts = [...posts.slice(0, index), ...posts.slice(index + 1)];

  //   dispatch(deletePostsAction(newPosts));
  // };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button className="btn btn-danger" onClick={() => onPostDelete(post)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostsListItem;
