import React from 'react';

export default React.createClass({
  propTypes: {
    news: React.PropTypes.arrayOf(React.PropTypes.shape({
      id:   React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string
    }))
  },

  render: function() {
    var posts = this.props.news.map((item) => (
      <div key={item.id} style={{ background: 'lightgreen' }}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    ));
    return <div>{posts}</div>;
  }
});
