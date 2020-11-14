import Vue from "vue";

const reactiveComponent = new Vue({
	data() {
		return {
			event: null,
			vssWidth: null,
			vssHeight: null,
		};
	},
});

export default {
	data() {
		return {
			// event: null,
			// vssWidth: null,
			// vssHeight: null
		};
	},
	computed: {
		$vssWidth() {
			return reactiveComponent.vssWidth || this.getScreenWidth();
		},
		$vssHeight() {
			return reactiveComponent.vssHeight || this.getScreenHeight();
		},
	},
	methods: {
		getScreenWidth() {
			return (
				window.innerWidth ||
				document.documentElement.clientWidth ||
				document.body.clientWidth
			);
		},
		getScreenHeight() {
			return (
				window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight
			);
		},
		handleResize(event) {
			reactiveComponent.event = event;
			reactiveComponent.vssWidth = this.getScreenWidth();
			reactiveComponent.vssHeight = this.getScreenHeight();
		},
		$vssDestroyListener() {
			window.removeEventListener("resize", this.handleResize);
		},
	},
	mounted() {
		// console.log(reactiveComponent.vssWidth);
		window.addEventListener("resize", this.handleResize);
	},
	destroyed() {
		window.removeEventListener("resize", this.handleResize);
	},
};
