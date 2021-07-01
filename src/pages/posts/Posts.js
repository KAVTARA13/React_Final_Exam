// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getPostsAction } from '../../redux/actions/posts-actions';

// import { getPostsData } from '../../services';
import PostsList from '../../components/list/posts-list';
import AddPostForm from '../../components/forms/add-post-form';

function Posts() {
  // const dispatch = useDispatch();

  // const loadposts = async () => {
  //   const bookData = await getPostsData({
  //     limit: 20,
  //     start: 0,
  //   });
  //   dispatch(getPostsAction(bookData));
  // };

  // useEffect(() => {
  //   loadposts();
  //   console.log('axali');
  // }, []);

  return (
    <div className="col">
      <div className="col-6">
        <AddPostForm />
      </div>
      <PostsList />
    </div>
  );
}

export default Posts;
