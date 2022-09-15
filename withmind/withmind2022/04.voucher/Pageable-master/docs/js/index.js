
var pageable = new Pageable("main", {
	animation: 400,
	events: {
		mouse: false
	}
});

function update(data) {
	var that = this;

	document.getElementById("wheel").checked = this.events.wheel;
	document.getElementById("mouse").checked = this.events.mouse;
	document.getElementById("touch").checked = this.events.touch;
	document.getElementById("keydown").checked = this.events.keydown;
	document.getElementById("freescroll").checked = this.config.freeScroll;
}