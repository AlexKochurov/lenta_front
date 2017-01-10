import React from 'react';

import Post  from './Post.jsx';
import PostForm from './PostForm.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Post />
        <PostForm />
      </div>
    );
  }
});
