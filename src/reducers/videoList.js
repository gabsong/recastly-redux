const videoListReducer = (state = [], action) => {
  if (!action) throw new Error('missing action')
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return [...action.videos]
    default:
      return state
  }
}

export default videoListReducer
