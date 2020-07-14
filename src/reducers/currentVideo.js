const currentVideoReducer = (state = null, action) => {
  if (!action) throw new Error('missing action')
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return { ...action.video }
    default:
      return state
  }
}

export default currentVideoReducer
