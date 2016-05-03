import React, { Component } from 'react';

class Search extends Component {

    onSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        this.props.onSearchProfile(username);
    }

    render() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">
                    Github Profile Search
                </h1>
            </div>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="col-lg-6">
                    <div className="input-group">
                      <input type="text" ref="username" className="form-control" placeholder="Search Github Users..." />
                      <span className="input-group-btn">
                        <input type="submit" className="btn btn-primary" />
                      </span>
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default Search;
