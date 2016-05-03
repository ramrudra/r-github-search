import React, { Component } from 'react';
import RepoList from './repo_list';

class Profile extends Component {

    render() {
        return(
            <div>
            <div className="panel panel-info">
                <div className="panel-heading ">{this.props.userData.name}'s Github Info</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.props.userData.avatar_url} className="img-thumbnail" />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="label label-primary">{this.props.userData.public_repos} Public Repos</span>
                                    <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
                                    <span className="label label-info">{this.props.userData.followers} Followers</span>
                                    <span className="label label-warning">{this.props.userData.following} Following</span>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
                                        <li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
                                        <li className="list-group-item"><strong>Email: </strong> {this.props.userData.email}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <a href={this.props.userData.html_url} target="_blank" className="btn btn-primary">Visit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RepoList totalRepoCount={this.props.userData.public_repos} userRepos={ this.props.repoData } />
            </div>
        );
    }
}


export default Profile;
