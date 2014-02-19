(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "CNAME": {
      "path": "CNAME",
      "mode": "100644",
      "content": "www.danielx.net\n",
      "type": "blob"
    },
    "index.html": {
      "path": "index.html",
      "mode": "100644",
      "content": "Hello.\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "publishBranch: \"master\"\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"publishBranch\":\"master\"};",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "entryPoint": "main",
  "repository": {
    "id": 3356864,
    "name": "strd6.github.io",
    "full_name": "STRd6/strd6.github.io",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/strd6.github.io",
    "description": "Github pages",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/strd6.github.io",
    "forks_url": "https://api.github.com/repos/STRd6/strd6.github.io/forks",
    "keys_url": "https://api.github.com/repos/STRd6/strd6.github.io/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/strd6.github.io/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/strd6.github.io/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/strd6.github.io/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/strd6.github.io/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/strd6.github.io/events",
    "assignees_url": "https://api.github.com/repos/STRd6/strd6.github.io/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/strd6.github.io/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/strd6.github.io/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/strd6.github.io/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/strd6.github.io/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/strd6.github.io/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/strd6.github.io/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/strd6.github.io/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/strd6.github.io/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/strd6.github.io/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/strd6.github.io/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/strd6.github.io/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/strd6.github.io/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/strd6.github.io/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/strd6.github.io/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/strd6.github.io/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/strd6.github.io/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/strd6.github.io/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/strd6.github.io/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/strd6.github.io/merges",
    "archive_url": "https://api.github.com/repos/STRd6/strd6.github.io/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/strd6.github.io/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/strd6.github.io/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/strd6.github.io/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/strd6.github.io/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/strd6.github.io/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/strd6.github.io/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/strd6.github.io/releases{/id}",
    "created_at": "2012-02-05T01:56:50Z",
    "updated_at": "2014-01-18T22:06:21Z",
    "pushed_at": "2014-01-18T22:06:20Z",
    "git_url": "git://github.com/STRd6/strd6.github.io.git",
    "ssh_url": "git@github.com:STRd6/strd6.github.io.git",
    "clone_url": "https://github.com/STRd6/strd6.github.io.git",
    "svn_url": "https://github.com/STRd6/strd6.github.io",
    "homepage": "strd6.github.io",
    "size": 156,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});