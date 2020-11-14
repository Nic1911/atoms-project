<template>
	<button class="c-hamburger" @click="toggleNav">
		<span class="c-hamburger__wrapper">
			<span
				class="c-hamburger__hamb"
				:class="{ '-nav-is-open': showAppNavigation }"
			>
				<!-- <transition v-on:enter="enter" v-on:leave="leave"></transition> -->
				<span class="c-hamburger__line line-1"></span>
				<span class="c-hamburger__line line-2"></span>
			</span>
			<span class="c-hamburger__label-wr">
				<transition name="labelSlide">
					<span class="c-hamburger__label" v-if="!showAppNavigation"
						>Menu</span
					>
				</transition>
				<transition name="labelSlide">
					<span class="c-hamburger__label" v-if="showAppNavigation"
						>Close</span
					>
				</transition>
			</span>
		</span>
	</button>
</template>

<script>
// vendors
import { gsap } from "gsap";
export default {
	name: "Hamburger",
	computed: {
		showAppNavigation() {
			return this.$store.state.showAppNavigation;
		},
	},
	methods: {
		toggleNav() {
			this.$store.commit("toggleAppNavigation");
		},
		enterLeave(el, done) {
			const tl = gsap.timeline({
				onComplete: () => {
					done();
				},
				defaults: { ease: "power4.out" },
			});
			tl.addLabel("start");
		},
		leaveLeave(el, done) {
			const tl = gsap.timeline({
				onComplete: () => {
					done();
				},
				defaults: { ease: "power4.out" },
			});
			tl.addLabel("start");
		},
	},
};
</script>

<style lang="scss">
.c-hamburger {
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	width: 40px;
	height: 100%;

	&__wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	&__label-wr {
		position: relative;
		width: 100%;
		margin-top: 5px;
	}

	&__label {
		color: $dark-blue;
		display: block;
	}

	&__hamb {
		width: 40px;
		height: 10px;

		position: relative;
	}

	&__line {
		display: block;
		width: 40px;
		height: 1px;

		position: absolute;
		left: 0;

		background-color: $dark-blue;

		transition: 0.25s ease-in-out;

		&:first-child {
			top: calc(50% - 4px);
		}
		&:last-child {
			top: calc(50% + 4px);
		}
	}

	.-nav-is-open {
		.c-hamburger__line:first-child {
			transform: rotate(45deg);
			top: 50%;
			width: 25px;
			left: 10px;
		}
		.c-hamburger__line:last-child {
			transform: rotate(-45deg);
			top: 50%;
			width: 25px;
			left: 10px;
		}
	}
}

.labelSlide-enter-active {
	animation: labelSlide 0.5s;
}
.labelSlide-leave-active {
	animation: labelSlide 0.5s reverse;
}
@keyframes labelSlide {
	0% {
		transform: translateX(-30px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}

.storesPanelCardAnimation-enter-active {
	transition: all 0.6s ease-out;
}
.storesPanelCardAnimation-leave-active {
	transition: all 0.3s ease-in;
}
</style>
