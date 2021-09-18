var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
    
    fetch(apiUrl).then(function(response) {  //Is it that "then" always plugs in the object returned by the fetch it attaches to? So then enters that into a function parameter and runs the code... but is that all "then" ever does?
        response.json().then(function(data) {
            console.log(data);
        });
      });
};

getUserRepos();