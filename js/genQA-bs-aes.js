/* Functions for building per-item Q & A page 
 * 
 */

// function for notifying Choice clicked
choiceInd = ['choice1','choice2','choice3','choice4']; // array of choice input ids
function echoChoice(id) {
	document.getElementById("echoChoice").innerHTML = "<font color='blue'>Your answer is Choice " + (choiceInd.indexOf(id) + 1 )  + '.</font>';
} 

// function for verifying answer
function checkAns() {
	for (var ind = 0; ind < 4; ind++) {
		value = choiceInd[ind];
		y = document.getElementById(value).checked;
		z = document.getElementById(value).id;
		ansChoice = choiceInd.indexOf(z);
		if (y) { 
			if(ansChoice == ansDat[1]) { 
				//coin();
				var snd = new Audio('res/coin.ogg');
				snd.play();
				document.getElementById('label' + (ansDat[1] + 1)).style.color = '#007700';
				document.getElementById('label' + (ansDat[1] + 1)).innerHTML += '&nbsp;&nbsp;&nbsp;<img src="res/check.png" width="14px" height="14px"/>';
				document.getElementById("echoChoice").innerHTML = "<br><b><font color='green'> Choice " + (choiceInd.indexOf(z) + 1 ) + '</b> is <b><u>correct</u>!</b></font>!';
				} else {
				//bump();
				var snd = new Audio('res/bump.ogg');
				snd.play();
				document.getElementById('label' + (ansDat[1] + 1)).style.color = '#00AA00';
				document.getElementById('label' + (ansDat[1] + 1)).innerHTML += '&nbsp;&nbsp;&nbsp;<img src="res/check.png" width="14px" height="14px"/>';
				document.getElementById('label' + (ansChoice + 1)).innerHTML += '&nbsp;&nbsp;&nbsp;<img src="res/nocheck.png" width="14px" height="14px"/>';
				document.getElementById('label' + (ansChoice + 1)).style.color = 'red';
				document.getElementById("echoChoice").innerHTML = "<br><b><font color='red'>Choice " + (choiceInd.indexOf(z) + 1 ) + '</b> is <b><u>incorrect</u></b>.</font><br><b><font color="green">Choice ' + (ansDat[1] + 1)  + '</b> is the <b><u>correct</u></b> answer.</font>';
			}
		}
	}
	document.getElementById("answer").innerHTML = '<button id="nextBtn" type="button" class="btn btn-primary" onclick="iqn += 1;genQ(iqn,dat);">Next Question</button><br></div><div id="ansInfo">';
}

// function for converting AES-decrypted string for Object to js Object 
function toObj(str) {
	var pass = str.replace(/:/g,',');
	var arr = pass.split(',');
	var empty = {};
	for(var ind = 0; ind < arr.length; ind += 2) {
		empty[parseInt(arr[ind],10)] = arr[ind + 1];
	}
	return empty;
}

// function for converting TeX to MathML via TeXZilla or MathJax
if (tex == 'texzilla') {
	function tz(expr) {
		var exprML = '<span style="display:inline-block; margin-top:-45px; margin-bottom:-45px;">' + TeXZilla.toMathML(expr).outerHTML + '</span>';
		return exprML;
	}
} else {
	function mhq(id) {
			MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById(id)]);
	}
}

// function for generating Question link
function genQ(ind,data) {
	var ind = ind;
	var dat = data;
	/* if last item has been asked end and generate review instructions and 
	 * re-start button */
	if (ind >= dat.length) {
		document.getElementById("question").remove();
		document.getElementById("answer").remove();
		document.getElementById("ansInfo").remove();
		document.getElementById("endInfo").innerHTML = '<center><h4>*** End of Quiz! ***</h4><center><br><h4>Use the <a href="#"><b>Q#</b></a> button above to return to a previous number of the quiz or the button below to create a new quiz.</h4><button type="button" class="btn btn-primary" onclick="location.reload()"><b>Create new quiz</b></button>';
	};
	if (ind < dat.length) { // if not last item remove div endInfo; added to allow review 
		document.getElementById("endInfo").remove();
	}
	if (aes) {
		var question = CryptoJS.AES.decrypt(dat[ind][0], "Secret Passphrase").toString(CryptoJS.enc.Utf8);
		var choicesO = CryptoJS.AES.decrypt(dat[ind][1], "Secret Passphrase").toString(CryptoJS.enc.Utf8);
		var notes = CryptoJS.AES.decrypt(dat[ind][2], "Secret Passphrase").toString(CryptoJS.enc.Utf8);
		choicesO = toObj(choicesO.slice(1,length-2)); //left-, right-ends are { }
	} else {
		var question = dat[ind][0];
		var choicesO = dat[ind][1];
		var notes = dat[ind][2];
	}
	if (tex == 'texzilla') {question = tz(question);}
	choices=[choicesO['1'],choicesO['2'],choicesO['3'],choicesO['4']];
	rndIndexes = [1,2,3,4].sort(function(a, b){return 0.5 - Math.random()});
	newChoices=[];
	for (var jnd = 0; jnd < 4; jnd++) {
		if (tex == 'texzilla') {
		newChoices[jnd] = tz(choices[rndIndexes[jnd]-1]);
		} else {
		newChoices[jnd] = choices[rndIndexes[jnd]-1];
		}
	}
	choices=newChoices;
	indices=[1,2,3,4];
	answerChoice=rndIndexes.indexOf(1);
	qn = ind + 1;
	document.getElementById("qa").innerHTML = '<div id="question" class="choices"><a id="qlabel" href="#"><b><u>Question</u>:</b></a><br></div><br><div id="answer"><button id="alabel" type="button" class="btn btn-info"  onclick="genA(iqn,dat);">Submit Answer</button><a></a>&thinsp;<button id="nextBtn" type="button" class="btn btn-primary" onclick="iqn += 1;genQ(iqn,dat);">Next Question</button><br></div><div id="ansInfo"></div><br>';
	document.getElementById("question").innerHTML +=  '<b>' + qn + '. </b>' + question + '<br><input type="radio" class="choiceradio" id="choice1" name="choices" onclick="echoChoice(' + "'" + 'choice1' + "'" + ');"><label id="label1" for="choice1"> 1.&nbsp;&nbsp;' + choices[0] + '</label><br><input type="radio" class="choiceradio" id="choice2" name="choices" onclick="echoChoice(' + "'" + 'choice2' + "'" + ');"><label id ="label2" for="choice2"> 2.&nbsp;&nbsp; ' +  choices[1] + '</label><br><input type="radio" class="choiceradio" id="choice3" name="choices" onclick="echoChoice(' + "'" + 'choice3' + "'" + ');"><label id="label3" for="choice3"> 3.&nbsp;&nbsp; ' + choices[2] + '</label><br><input type="radio" class="choiceradio" id="choice4" name="choices" onclick="echoChoice(' + "'" + 'choice4' + "'" + ');"><label id ="label4" for="choiceD"> 4.&nbsp;&nbsp; ' + choices[3] + '</label><br><div id="echoChoice"></div>';
	if (tex == 'mathjax') {mhq('question');mhq('label1');mhq('label2');mhq('label3');mhq('label4');}
	document.getElementById("end").innerHTML += '<div id="endInfo"></div>';
	ansDat = [choices,answerChoice,notes];
	return ansDat;
}

/* function for generating Answer link and preventive measure for additional clicks that 
 * may reveal answers of later items */
function genA(ind,data) {
	ind = ind;
	dat = data
	qn = ind + 1;
	var question = dat[ind][0];
	var answer = dat[ind][1];
	if(document.getElementById("echoChoice").innerHTML == '' | document.getElementById("echoChoice").innerHTML == '<font color="blue">Please <u>choose</u> an answer first!</font>') {
		document.getElementById("echoChoice").innerHTML = '<font color="blue">Please <u>choose</u> an answer first!</font>';
		document.getElementById("answer").innerHTML = '<button id="alabel" type="button" class="btn btn-info"  onclick="genA(iqn,dat);">Submit Answer</button><a></a>&thinsp;<button id="nextBtn" type="button" class="btn btn-primary" onclick="iqn += 1;genQ(iqn,dat);">Next Question</button><br></div><div id="ansInfo">';
		return;
	};
	checkAns();
}
