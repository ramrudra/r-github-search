import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

// API Keys
const CLIENT_ID = '40ac6bfe8265689fb252';
const CLIENT_SECRET = '56ccf829a52ec27f6acabea955db5ca760735a83';

// Common Components
import MenuBar from './components/menu_bar';
import Footer from './components/footer';

// Global Components
import Search from './components/search';
import Profile from './components/profile';
import RepoList from './components/repo_list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'ramrudra',
            userData: [],
            userRepos: [],
            perPage: ''
        };
    }

    getUserData() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.userName + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userName: null});
                alert(err);
            }.bind(this)
        });
    }

    getReposData() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.userName + '/repos?per_page=' + this.state.perPage + '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userName: null});
                alert(err);
            }.bind(this)
        });
    }

    updateProfile(username) {
        this.setState({userName: username}, function() {
            this.getUserData();
            this.getReposData();
        });
    }

    componentDidMount() {
        this.getUserData();
        this.getReposData();
    }

    render() {
        return (
            <div>
                <Search onSearchProfile={ this.updateProfile.bind(this) } />
                <Profile repoData={ this.state.userRepos } userData={ this.state.userData } />
            </div>
        );
    }
}


ReactDom.render(<MenuBar />, document.querySelector('.navbar-fixed-top'));
ReactDom.render(<App />, document.querySelector('.main-layout'));
ReactDom.render(<Footer />, document.querySelector('footer'));
