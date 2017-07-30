const initialState = {
  open: false,
  file: undefined,
};

const upload = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_UPLOAD':
      return Object.assign({}, state, {
        open: true,
      });
    case 'CLOSE_UPLOAD':
      return Object.assign({}, state, {
        open: false,
      });
    case 'FILE_UPLOAD':
      return Object.assign({}, state, {
        file: action.payload.file
      });
    default:
      return {
        ...state
      };
  }
}

export default upload;
