import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {Final: [], isLoading: true}

  componentDidMount() {
    this.getAllBlogDetails()
  }

  getAllBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const ans = await response.json()
    const Updated = ans.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({Final: Updated, isLoading: false})
  }

  render() {
    const {Final, isLoading} = this.state

    return (
      <ul className="Unordered">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="blue" height={50} width={50} />
          </div>
        ) : (
          Final.map(eachItem => <BlogItem user={eachItem} key={eachItem.id} />)
        )}
      </ul>
    )
  }
}

export default BlogList
