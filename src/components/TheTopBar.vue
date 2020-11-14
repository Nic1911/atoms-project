<template>
	<div class="c-topbar" :class="[navIsOpen ? 'navigation-is-open' : null]">
		<div class="grid-container">
			<div class="grid-x ">
				<div class="c-topbar__logo cell small-4 large-shrink">
					<router-link class="logo-link" :to="'/'">
						<img src="@/assets/images/brand/logo.svg" alt="Logo" />
					</router-link>
				</div>
				<div class="c-topbar__nav cell small-8 large-6">
					<div class="cell grid-x align-right">
						<div class="cell small-7 large-shrink">
							<TheNavigation />
						</div>
						<div class="cell shrink">
							<Hamburger />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// components

import Hamburger from "@/components/Hamburger";
import TheNavigation from "@/components/TheNavigation";

export default {
	name: "TheTopBar",
	components: {
		Hamburger,
		TheNavigation,
	},
	data() {
		return {
			navIsOpen: false,
		};
	},
	computed: {},
	methods: {
		toggleAppNavigation() {},
	},
	mounted() {},
};
</script>

<style lang="scss">
.c-topbar {
	width: 100%;
	// position: fixed;
	// left: 0;
	// top: 0;

	padding: 20px 0;

	&__nav {
		display: flex;
		margin-left: auto;
	}

	.logo-link {
		img {
			width: 120px;
			height: auto;
			@include breakpoint(large) {
				width: 190px;
			}
		}
	}
}
</style>
