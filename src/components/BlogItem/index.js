import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {user} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = user
  return (
    <Link to={`blogs/${id}`}>
      <li className="list">
        <img src={imageUrl} alt={title} className="imageUrl" />
        <div>
          <h1 className="topic">{topic}</h1>
          <h1 className="title">{title}</h1>
          <div className="containerForAuthor">
            <button type="button">
              <img src={avatarUrl} className="img" alt="name" />
            </button>
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
