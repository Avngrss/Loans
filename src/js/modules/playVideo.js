export default class VideoPlayer {
	constructor(triggers, popup) {
		this.btns = document.querySelectorAll(triggers);
		this.popup = document.querySelector(popup);
	}
}
