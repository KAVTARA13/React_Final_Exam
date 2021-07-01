import { useSelector } from 'react-redux';
import { getPosts } from '../../redux/selectors';
import PostsList from '../../components/list/profile-list';

function Profile() {
  const posts = useSelector(getPosts);
  return (
    <div className="col">
      <PostsList />
    </div>
  );
}

export default Profile;
