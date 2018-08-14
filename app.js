'use strict';

// const calculationPromise = new Promise( function(resolve, reject) {
// 	setTimeout(function(){
// 		resolve(1 + 1);
// 	}, 1000);
// });

// const calculationPromise2 = new Promise( function(resolve, reject) {
// 	setTimeout(function(){
// 		resolve(1 + 1);
// 	}, 500);
// });

// function addTwo(value) {
// 	return value + 2;
// }

// function PrintFinalValue(finalValue) {
// 	console.log("The final value is", finalValue);
// }

// calculationPromise
// 	.then(addTwo)
// 	.then(addTwo)
// 	.then(addTwo)
// 	.then(addTwo)
// 	.then(PrintFinalValue);

// calculationPromise2
// 	.then(addTwo)
// 	.then(PrintFinalValue);

// 	Ajax w/ JS Promises
// function provideStudentName(studentName) {
// 	studentName = prompt("Enter name of student you'd like to search..");
// 	return studentName;
// }

// function searchStudent(student) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'https://teamtreehouse.com/' + student + '.json');
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			var students = JSON.parse(xhr.responseText);
// 			console.log(students.badges);
// 			for (let i = 0; i < students.badges.length; i++) {
// 				var build =
// 				'<div>' +
// 					'<a href="' + students.badges[i].url + '">' +
// 						'<img src="' + students.badges[i].icon_url + '">' +
// 					'</a>' +
// 					'<h3>' + students.badges[i].name + '</h3>' +
// 					'<p>' + students.badges[i].earned_date + '</p>' +
// 				'</div>'

// 				document.getElementById('badges').innerHTML += build;
// 			}
// 		}
// 	}
// 	xhr.send();
// }

// searchStudent( provideStudentName() );


function getJSON(url) {
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = handleResponse;
		xhr.onerror = function(error) { reject(error); };
		xhr.send();

		function handleResponse() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var student = JSON.parse(xhr.responseText);
					resolve(student);
				} else {
					reject(this.statusText);
				}
			}
		}
	});
}

function buildClassPointTotals(student) {
	var classPointTotals = document.getElementById('html-points').innerHTML = student.points.HTML;
							 document.getElementById('css-points').innerHTML = student.points.CSS;
							 document.getElementById('design-points').innerHTML = student.points.Design;
							 document.getElementById('javascript-points').innerHTML = student.points.JavaScript;
							 document.getElementById('ruby-points').innerHTML = student.points.Ruby;
							 document.getElementById('php-points').innerHTML = student.points.PHP;
							 document.getElementById('wordpress-points').innerHTML = student.points.WordPress;
							 document.getElementById('ios-points').innerHTML = student.points.iOS;
							 document.getElementById('android-points').innerHTML = student.points.Android;
							 // document.getElementById('devtools-points').innerHTML = student.points. + 'Development Tools';
							 document.getElementById('business-points').innerHTML = student.points.Business;
							 document.getElementById('python-points').innerHTML = student.points.Python;
							 document.getElementById('java-points').innerHTML = student.points.Java;
							 // document.getElementById('digital-lit-points').innerHTML = student.points.'Digital Literacy';
							 // document.getElementById('c#-points').innerHTML = student.points.C#;
							 document.getElementById('databases-points').innerHTML = student.points.Databases;
							 // document.getElementById('data-analysis-points').innerHTML = student.points.'Data Analysis';
							 document.getElementById('api-points').innerHTML = student.points.APIs;
							 document.getElementById('security-points').innerHTML = student.points.Security;
							 document.getElementById('go-points').innerHTML = student.points.Go;
							 // document.getElementById('qa-points').innerHTML = student.points.'Quality Assurance';
							 // document.getElementById('machine-learning-points').innerHTML = student.points.'Machine Learning';

	for (let i = 0; i < student.badges.length; i++) {

		document.getElementById('studentPhoto').src = student.gravatar_url;

		const build =
		'<div class="badgeItem">' +
			'<a href="' + student.badges[i].url + '" target="_blank">' +
				'<img src="' + student.badges[i].icon_url + '">' +
			'</a>' +
			'<div>' +
				'<h3 class="classTitle">' + student.badges[i].name + '</h3>' +
				'<p>' + student.badges[i].earned_date + '</p>' +
			'</div>' +
		'</div>'

		document.getElementById('badges').innerHTML += build;
	}
}


var studentName = prompt("input");


const ajaxPromise = getJSON('https://teamtreehouse.com/' + studentName + '.json');


ajaxPromise.then(buildClassPointTotals)
					 // .then(buildClassPointTotals)
					 .catch(function(e) {
					 	console.log(e);
					 });




// function buildCompletedClassBadges(student) {
// 	for (let i = 0; i < student.badges.length; i++) {

// 		const build =
// 		'<div class="badgeItem">' +
// 			'<a href="' + student.badges[i].url + '" target="_blank">' +
// 				'<img src="' + student.badges[i].icon_url + '">' +
// 			'</a>' +
// 			'<div>' +
// 				'<h3 class="classTitle">' + student.badges[i].name + '</h3>' +
// 				'<p>' + student.badges[i].earned_date + '</p>' +
// 			'</div>' +
// 		'</div>'

// 		document.getElementById('badges').innerHTML += build;
// 	}
// }

