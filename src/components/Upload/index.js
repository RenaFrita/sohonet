import React from 'react';
import PropTypes from 'prop-types';
import File from '../File';
import { closeUpload, fileUpload } from '../../actions/upload';
import './Upload.css';

const close = (dispatch) => {
  dispatch(closeUpload());
};

const handleChange = (dispatch, evt) => {
  const file = evt.currentTarget.files[0];
  dispatch(fileUpload({file: file}));
}

const Upload = ({ dispatch, file, open }) => {
  const upload = file ?
    <File created={file.lastModifiedDate.toString()} desc={file.desc} ext={file.type} name={file.name} size={file.size} />:
    null;

  return (
    <div className={`Upload ${open ? 'Upload-open' : ''}`}>
      <div className="Upload-panel">
        <button className="Upload-close" onClick={()=> close(dispatch)}>X</button>
        <input type="file" onChange={(evt) => handleChange(dispatch, evt)}/>
        {upload}
      </div>
    </div>
)};

Upload.propTypes = {
  dispatch: PropTypes.func,
  file: PropTypes.object,
  open: PropTypes.bool,
};

export default Upload;
