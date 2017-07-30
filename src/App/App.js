import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';
import { getFiles } from '../actions/files';
import Menu from '../components/Menu';
import Upload from '../components/Upload';
import FileList from '../components/FileList';
import './App.css';

/*
 * I didn't write any unit tests wasn't specified in the task can do if needed.
 */

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getFiles({page: this.props.page}));
    window.addEventListener('scroll', this.loadMore);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadMore);
  }

  loadMore = () => {
    if(document.documentElement.offsetHeight <= window.scrollY +  window.innerHeight) {
      this.props.dispatch(getFiles({page: this.props.page}));
    }
  }

  render() {
    return (
      <div className={`App ${this.props.completed ? 'App-loading' : 'App-loading'}`}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu dispatch={this.props.dispatch} />
          <Upload
            dispatch={this.props.dispatch}
            file={this.props.file}
            open={this.props.open}
          />
        </div>
        <FileList
          files={this.props.data}
          page={this.props.page}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.files.page || 0,
    data: state.files.data || [],
    completed: state.files.completed || false,
    file: state.upload.file || undefined,
    open: state.upload.open || false,
  }
};

App.propTypes = {
  page: PropTypes.number,
  data: PropTypes.array,
  completed: PropTypes.bool,
  file: PropTypes.object,
  open: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
