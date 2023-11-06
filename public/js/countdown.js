// set end date
const endDate = new Date("2023-11-28 23:59:59").getTime();

// refresh countdowntimer every second
const timer = setInterval(function() {
	const now = new Date().getTime();
	const distance = endDate - now;

	if (distance <= 0) {
		clearInterval(timer);
		document.getElementById("countdown").innerHTML = "Countdown abgelaufen!";
	} else {
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
		}
	},
1000);