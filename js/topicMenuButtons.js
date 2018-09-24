// function that creates navbar
function addMenuItem(pairedTopicsList) {
	// build-up the topics menu for the navbar
	menuTopics= '';
	for (var ind = 0; ind < pairedTopicsList.length; ind++) {
		menuTopics += '<li><a href="#" onclick="topic = ' + pairedTopicsList[ind][0] + '; topicQ = ' + "'" + pairedTopicsList[ind][1] + "'" + '; noteTopic(topicQ);alert(' + "'" + 'Please choose total number of quiz questions below.' + "'" + '); smoothScroll(document.getElementById(' + "'" + notifyTopic + "'" + '));"><span class="fa fa-bookmark"></span> '  +  pairedTopicsList[ind][1] + '</a></li>';
	}
	// create navbar witn topics menu
	document.getElementById("navBar").innerHTML += '<nav class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html"><img alt="mcQuiz Logo" style="margin-top: -10px" src="res/mcQuiz-lib.gif" height="40" width="40"></img></a><a class="navbar-brand" href="index.html"><font color="yellow">mcQuiz</font></a></div><div class="collapse navbar-collapse" id="myNavbar"><ul class="nav navbar-nav"><li class="active"><a href="index.html"><span class="fa fa-home"></span>Home</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" id ="topicsListNB" href="#"><span class="fa fa-book"></span>Topics<span class="caret"></span></a><ul class="dropdown-menu" id="topicsMenu">' + menuTopics + '</ul></li></ul><ul class="nav navbar-nav navbar-right"><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="fa fa-github"></span> GitHub<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="https://github.com/justineuro/mcQuiz"><span class="fa fa-github-square"></span> GitHub Site</a></li><li><a href="https://github.com/justineuro/mcQuiz/archive/master.zip"><span class="fa fa-download"></span> .zip</a></li><li><a href="https://github.com/justineuro/mcQuiz/archive/master.tar.gz"><span class="fa fa-download"></span> .tar.gz</a></li></ul></div></div></nav>';
}

/* function that creates three-column table for topics */
  function addTopicsTable(pairedTopicsList) {
	// if number of topics not divisible by 3 extend pairedTopicsList
	var pairs = pairedTopicsList;
	var lackMax = 3 - (pairs.length % 3);
	if (pairs.length % 3 !== 0) {
		for (var lack = 0; lack < lackMax; lack++) {
			pairs.push([[],'[ - ]']);
		}
	}
	// add table caption
	document.getElementById('table1').innerHTML += '<caption><center><h5>Please choose a topic:</h5><center></caption><tbody id=' + "'" + 'table1Body' + "'" + '></tbody>';	
	// generate each table row then add to table body
	for (var ind = 0; ind < pairedTopicsList.length/3; ind++) {
		// generate row; three buttons per row
		var rowContent = '';
		for (var jnd = 3 * ind; jnd < 3 * (ind + 1); jnd++) {
			if (pairs[jnd][1] == '[ - ]') {
				rowContent = rowContent + '<td></td>';
			} else {
				rowContent = rowContent + '<td><button id="' + pairs[jnd][1] + '" type="button" class="btn btn-primary" onclick="topic = ' + pairs[jnd][0] + '; topicQ = ' + "'" + pairs[jnd][1] + "'" + '; noteTopic(topicQ);smoothScroll(document.getElementById('+ "'" + 'notifyTopic' + "'" + '));">' + pairs[jnd][1] + '</button></td>';
			}
		}
		// add newly generated row to the table body
		document.getElementById('table1Body').innerHTML += '<tr align="center">' + rowContent + '</tr>';
	}
}

addMenuItem(pairedTopicsList); // create navbar
addTopicsTable(pairedTopicsList); // create table of topics
