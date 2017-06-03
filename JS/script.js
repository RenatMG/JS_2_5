'use strict';

function showMeClock() {
	var canvas = document.getElementById('myClock');
	var context = canvas.getContext('2d');

	// centre of clock
	var radiusClock = canvas.width / 2 - 10;
	var xCentreClock = canvas.width / 2;
	var yCentreClock = canvas.height / 2;

	// clear display
	context.fillStyle = '#ffffff';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.strokeStyle = '#000000';
	context.lineWidth = 2;

	// clock face design
	context.beginPath();
	context.arc(xCentreClock, yCentreClock, radiusClock, 0, 2 * Math.PI, true);
	context.stroke();
	context.closePath();

	// clock points design
	var radiusPoints = radiusClock - 10;
	var radiusPoint;
	for (var i = 0; i < 60; i++) {
		context.beginPath();
		if (i % 5 == 0) {
			radiusPoint = 5;
		} else {
			radiusPoint = 2;
		}
		var xPoint = xCentreClock + radiusPoints * Math.cos(Math.PI / 2 - 6 * i * Math.PI / 180);
		var yPoint = yCentreClock + radiusPoints * Math.sin(Math.PI / 2 - 6 * i * Math.PI / 180);
		context.arc(xPoint, yPoint, radiusPoint, 0, 2 * Math.PI, true);
		context.stroke();
		context.closePath();
	}
	
	// clock numbers design
	var radiusNumbers = radiusPoints - 25;
	for (var i = 1; i <= 12; i++) {
		context.beginPath();
		context.font = 'bold 25px sans-serif';
		var xNumber = xCentreClock + radiusNumbers * Math.cos(Math.PI / 2 - 30 * i * Math.PI / 180);
		var yNumber = yCentreClock - radiusNumbers * Math.sin(Math.PI / 2 - 30 * i * Math.PI / 180);
		if (i <= 9) {
			context.strokeText(i, xNumber - 7, yNumber + 9);
		} else {
			context.strokeText(i, xNumber - 13, yNumber + 9);
		}
		context.stroke();
		context.closePath();
	}

	// Arrows design
	var lengthSeconds = radiusPoints - 10;
	var lengthMinuts = radiusPoints - 20;
	var lengthHours = radiusPoints - 50;
	var date = new Date();
	var secArrow = 6 * date.getSeconds();
	var minuteArrow = 6 * (date.getMinutes() + date.getSeconds() / 60);
	var hourArrow = 30 * (date.getHours() + date.getMinutes() / 60);

	context.beginPath();
	context.strokeStyle = '#FF0000';
	context.lineWidth = 3;
	context.moveTo(xCentreClock, yCentreClock);
	context.lineTo(xCentreClock + lengthSeconds * Math.cos(Math.PI / 2 - secArrow * Math.PI / 180),
		yCentreClock - lengthSeconds * Math.sin(Math.PI / 2 - secArrow * Math.PI / 180));
	context.stroke();
	context.closePath();

	context.beginPath();
	context.strokeStyle = '#000000';
	context.lineWidth = 6;
	context.moveTo(xCentreClock, yCentreClock);
	context.lineTo(xCentreClock + lengthMinuts * Math.cos(Math.PI / 2 - minuteArrow * Math.PI / 180),
		yCentreClock - lengthMinuts * Math.sin(Math.PI / 2 - minuteArrow * Math.PI / 180));
	context.stroke();
	context.closePath();

	context.beginPath();
	context.strokeStyle = '#000000';
	context.lineWidth = 10;
	context.moveTo(xCentreClock, yCentreClock);
	context.lineTo(xCentreClock + lengthHours * Math.cos(Math.PI / 2 - hourArrow * Math.PI / 180),
		yCentreClock - lengthHours * Math.sin(Math.PI / 2 - hourArrow * Math.PI / 180));
	context.stroke();
	context.closePath();


}


window.onload = function () {
	showMeClock();
}

window.onmousemove = function () {
	//	setInterval(function () {
	var date = new Date();
	document.getElementById('clock').innerHTML = date.toLocaleTimeString();
	showMeClock();
	//		}, 1000);
}
