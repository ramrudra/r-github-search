import React, { Component } from 'react';
import Repo from './repo';

class RepoList extends Component {

    render() {
        return(
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading ">Repositories contributing to [ {this.props.totalRepoCount} ]</div>
                    <div className="panel-body">
                        <ul class="list-group">
                            {
                                this.props.userRepos.map(repo => {
                                    return <Repo repo={repo} key={repo.id} />;
                                })
                            }
                        </ul>
                    </div>
                    </div>


            </div>
        );
    }


}

export default RepoList;
