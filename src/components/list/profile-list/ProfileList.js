import { useContext } from 'react';
// import { useSelector } from 'react-redux';
import { getPosts } from '../../../redux/selectors';
import { PostsProvider } from '../../../providers/PostsProvider';
import Post from './Post';

function ProfileList() {
  // const posts = useSelector(getPosts);
  const { postsList } = useContext(PostsProvider);
  return (
    <div className="col">
      {postsList.map((post) =>
        post.userId == '99' ? <Post key={post.id} post={post} /> : null,
      )}
    </div>
  );
}

export default ProfileList;
