function go()
{
    var action = getSelectedAction();

    if (action == 'teams')
    {
        fetch('https://statsapi.web.nhl.com/api/v1/teams')
            .then(response => {
                return response.json();
            }).then(teams => {
                document.getElementById("out").innerHTML = JSON.stringify(teams.teams, undefined, 4);
            });
    } else if (action == 'roster') {
        fetch('https://statsapi.web.nhl.com/api/v1/teams/' + param1() + '/roster')
            .then(response => {
                return response.json();
            }).then(roster => {
                document.getElementById("out").innerHTML = JSON.stringify(roster, undefined, 4);
            });  
    } else if (action == 'player') {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + param1())
            .then(response => {
                return response.json();
            }).then(roster => {
                document.getElementById("out").innerHTML = JSON.stringify(roster, undefined, 4);
            });
    } else if (action == 'player_stats') {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + param1() + '/stats?stats=statsSingleSeason&season=' + param2())
        .then(response => {
            return response.json();
        }).then(roster => {
            document.getElementById("out").innerHTML = JSON.stringify(roster, undefined, 4);
        });       
    } else {
        alert("Unknown action:  " + action);
    }

}

function getSelectedAction() {
    return document.getElementById("action").value;
}

function param1() {
    return document.getElementById("param1").value;
}

function param2() {
    return document.getElementById("param2").value;
}