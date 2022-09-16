let calendar = document.querySelector('.carousel-inner');
let mydates = document.querySelector('.date');
let myTime = document.querySelector('.time');
let myDay = document.querySelector('.day');
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let weekFullDay = '';
switch(new Date().getDay()){
	case 0:
		weekFullDay = 'Sunday';
		break;
	case 1: 
	weekFullDay = "Monday";
	break;
	case 2:
		weekFullDay = 'Tuesday';
		break;
	case 3:
		weekFullDay = 'Wednesday';
		break;
	case 4:
		weekFullDay = 'Thursday';
		break;
	case 5: 
	weekFullDay = 'Friday';
	break;
	case 6:
		weekFullDay = 'Saturday';
		break;
}
myDay.innerHTML = weekFullDay.toUpperCase();
let $date = new Date().getDate();
mydates.innerHTML = $date;
// calendar section 
const currentYear = new Date().getFullYear();
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'Octomber',
	'November',
	'December'
];
const getAllDays = function(year){
    const firstDay = new Date(`January 1 ${year}`);
    const  lastDay = new Date(`December 31 ${year}`);
    let days = [firstDay];
    let lastDayInArray = firstDay;
    while(lastDayInArray.getTime() !== lastDay.getTime()){
        days.push(addDays(lastDayInArray, 1));
        lastDayInArray = days[days.length-1];
    }
    return days;
}
const dates = getAllDays(currentYear);

let monthsHTML = '';

// Loop over the months and create a div for each month
months.forEach((month, idx) => {
	monthsHTML += `<div class="carousel-item">
	<div class="calendar"><div class="months month_${idx}">
	<h3>${month} ${currentYear}</h3>
	<div class="week_days_container">
		${weekDays
						.map(day => `<div class="week_days">${day}</div>`)
						.join('')}
	</div>
	<div class="days_container"></div>
     </div></div> </div>`;
});

calendar.innerHTML = monthsHTML;

// Loop over each day and
dates.forEach(date => {
	const month = date.getMonth();
	const monthEl = document.querySelector(`.month_${month} .days_container`);

	// create extra day slots if needed before day 1
	if (date.getDate() === 1 && date.getDay() !== 0) {
		for (let i = 0; i < date.getDay(); i++) {
			const emptySpot = createEmptySpot();

			monthEl.appendChild(emptySpot);
		}
	}

	const dateEl = createDateEl(date);

	monthEl.appendChild(dateEl);
});

function createDateEl(date) {
	const day = date.getDate();
	const dateEl = document.createElement('div');
	dateEl.classList.add('days');
	dateEl.innerHTML = `<span class="circle">${day}</span>`;
    
	return dateEl;
}

function createEmptySpot() {
	const emptyEl = document.createElement('div');
	emptyEl.classList.add('days');

	return emptyEl;
}

// function from StackOverflow: https://stackoverflow.com/questions/563406/add-days-to-javascript-date
function addDays(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}
// months method 
let carousel = document.querySelector('.carousel-item')
switch(new Date().getMonth()){
	case 0:
		carousel.classList.add('active');
		break;
	case 1: 
	carousel.classList.add('active');
	break;
	case 2: 
	carousel.classList.add('active');
	break;
	case 3: 
	carousel.classList.add('active');
	break;
	case 4: 
	carousel.classList.add('active');
	break;
	case 5: 
	carousel.classList.add('active');
	break;
	case 6: 
	carousel.classList.add('active');
	break;
	case 7: 
	carousel.classList.add('active');
	break;
	case 8: 
	carousel.classList.add('active');
	break;
	case 9: 
	carousel.classList.add('active');
	break;
	case 10: 
	carousel.classList.add('active');
	break;
	case 11: 
	carousel.classList.add('active');
	break;
};
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s ;
	document.querySelector('.moods').innerHTML= session;
    document.querySelector('.time').innerText = time;
    document.querySelector('.time').textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
let circle = document.querySelectorAll('.circle');



