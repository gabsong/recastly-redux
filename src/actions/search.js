import searchYouTube from '../lib/searchYouTube.js'
import changeVideoList from './videoList.js'
import changeVideo from './currentVideo.js'
import YOUTUBE_API_KEY from '../config/youtube.js'

// https://stackoverflow.com/questions/46765896/react-redux-actions-must-be-plain-objects-use-custom-middleware-for-async-acti
var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({ key: YOUTUBE_API_KEY, q }, (videos) => {
      dispatch(changeVideoList(videos))
      dispatch(changeVideo(videos[0]))
    })
  }
}

export default handleVideoSearch
