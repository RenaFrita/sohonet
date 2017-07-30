import React from 'react';
import PropTypes from 'prop-types';
import File from '../File';
import './FileList.css';

const FileList = ({ files }) => {
  return (
  <ul className="FileList">
    {
      files.map(file => (
        <li key={file.id}>
          <File
            created={file.created}
            desc={file.desc}
            ext={file.ext}
            name={file.name}
            size={file.size}
          />
        </li>
      ))
    }
  </ul>
)};

FileList.propTypes = {
  files: PropTypes.array,
};

export default FileList;
