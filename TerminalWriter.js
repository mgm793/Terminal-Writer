/*
Terminal Writer - https://github.com/mgm793/Terminal-Writer
Author: Marc Garcia i Mullon - https://github.com/mgm793
This project is licensed under the MIT License - see the LICENSE.md file for details
*/

function terminalWriter(tag, name){
	var cont = 0;
	var container = document.querySelector(tag);
	container.innerHTML += "<span id='terminal-writer'></span><span id='terminal-writing'>_</span>"
	showName(name, 0);
}

function showName(name, i){
	var time = 100;
	if(i < name.length){
		var txt = document.querySelector('#terminal-writer');
		txt.textContent = txt.textContent + name[i];
		++i;
	}
	else {
		var line = txt = document.querySelector('#terminal-writing');
		if(line.style.display == 'none' || line.style.display == '' ) line.style.display = 'inline-block';
		else line.style.display = 'none'; 
		time = 1000;
	}
	setTimeout(
		function(){
			showName(name, i);	
		}, time
	);
}