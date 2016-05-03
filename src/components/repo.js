import React from 'react';

const Repo = ({repo}) => {
    const repoName = repo.name;
    const repoDesc = repo.description;
    const repoUrl = repo.html_url;

    return (
        <li className="list-group-item">
            <a href={repoUrl} target="_blank">{repoName}</a> : {repoDesc}
        </li>
    )
};

export default Repo;
