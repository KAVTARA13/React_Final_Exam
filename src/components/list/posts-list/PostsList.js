// import { useSelector } from 'react-redux';
import { useContext } from 'react';
// import { getPosts } from '../../../redux/selectors';
import { PostsProvider } from '../../../providers/PostsProvider';
import Post from './PostsListItem';

function PostsList() {
  // const posts = useSelector(getPosts);
  const { postsList } = useContext(PostsProvider);
  return (
    <div className="col">
      {postsList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
