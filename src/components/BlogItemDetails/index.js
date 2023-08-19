import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const Response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await Response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  tharun = () => {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData
    return (
      <div className="list12">
        <h1 className="title harani">{title}</h1>
        <div className="containerForAuthor harani">
          <img src={avatarUrl} className="img" alt={author} />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="img1234" alt={title} />
        <p className="ContentInformation">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <Loader type="TailSpin" color="blue" height={50} width={50} />
    ) : (
      this.tharun()
    )
  }
}

export default BlogItemDetails
