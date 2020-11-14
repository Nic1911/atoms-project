<template>
	<div class="c-navigation" ref="wrapper">
		<div class="c-navigation__inner-wr">
			<nav class="c-navigation__nav">
				<ul class="nav" v-if="$vssWidth >= 1024">
					<li
						class="nav__li"
						v-for="(page, index) in navigationData"
						:key="index"
					>
						<router-link class="nav__link" :to="page.link"
							><span>{{ page.label }}</span></router-link
						>
					</li>
				</ul>
				<div class="c-navigation__nav-link">
					<router-link class="call-to-action -boxed" to="#"
						><span>Let's talk</span></router-link
					>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
// vendors
import { gsap } from "gsap";
// Mixins
import vuescreensize from "@/mixins/vuescreensize.js";

export default {
	name: "TheNavigation",
	mixins: [vuescreensize],
	data: function() {
		return {
			navigationData: [
				{
					label: "Works",
					link: "#",
				},
				{
					label: "Services",
					link: "#",
				},
				{
					label: "Why us",
					link: "#",
				},
			],
		};
	},

	computed: {},

	mounted() {
		this.$nextTick(() => {});
	},
};
</script>

<style lang="scss">
.c-navigation {
	width: 100%;
	height: auto;

	position: relative;

	margin-right: 20px;

	&__nav {
		display: flex;
		flex-wrap: wrap;
	}

	&__nav-link {
		margin-right: 20px;

		@include breakpoint(large) {
			margin-right: 0;
			margin-left: 20px;
		}
	}
}

.nav {
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;

	&__li {
		display: flex;
		align-items: center;
		justify-content: center;

		list-style: none;

		@include font(14px, "regular-medium");

		&:not(:last-child) {
			margin-right: 20px;
		}
	}
	&__link {
		display: flex;
		align-items: center;
		color: $dark-blue;
		text-decoration: none;

		transition: all 0.5s ease-out;

		&:hover {
			opacity: 0.6;
		}
	}
}
</style>
