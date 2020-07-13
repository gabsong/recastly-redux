const currentVideoReducer = (state, action) => {
  if (!action) throw new Error('missing action')
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return { ...action.video }
    default:
      return null
  }
}

export default currentVideoReducer
