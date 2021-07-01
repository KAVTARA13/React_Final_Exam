import { useState, useContext } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';

function AddPostForm() {
  const { onTodoAdd } = useContext(PostsProvider);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      body,
      title,
      id: Math.random().toString(),
      userId: '99',
    };

    onTodoAdd(newPost);
    setBody('');
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        className="form-control"
        placeholder="Title"
      />
      <input
        type="text"
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
        className="form-control"
        placeholder="Body"
      />
      <button type="submit" className="btn btn-primary">
        Add new post
      </button>
    </form>
  );
}

export default AddPostForm;
