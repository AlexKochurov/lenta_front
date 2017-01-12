import React    from 'react';
import Post     from './Post.jsx';
import PostForm from './PostForm.jsx';

let news = [
  {
    id: 1,
    name: 'Идентификация колокольни',
    description: 'В канун Нового года в селе Кукуево колокольня упала на человека'
  },
  {
    id: 2,
    name: 'Возвращение колокольни',
    description: 'В селе Можарово колокольня упала на человека. Объявлено чрезвычайное положение'
  },
  {
    id: 3,
    name: 'Крах колокольни',
    description: 'В посёлке Коминтерн колокольня упала на пустое место. К счастью, никто не пострадал'
  }
];

export default React.createClass({
  render: function() {
    return (
      <div>
        <Post news={news}/>
        <PostForm />
      </div>
    );
  }
});
