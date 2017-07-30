export const openUpload = payload => {
  return {
    type: 'OPEN_UPLOAD',
    payload,
  };
};

export const closeUpload = payload => {
  return {
    type: 'CLOSE_UPLOAD',
    payload,
  };
};

export const fileUpload = payload => {
  return {
    type: 'FILE_UPLOAD',
    payload,
  };
};
