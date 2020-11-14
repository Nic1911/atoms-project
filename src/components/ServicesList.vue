<template>
	<div class="c-services-list">
		<ul>
			<li
				class="c-services-list__li"
				v-for="(item, index) in items"
				:key="index"
			>
				<div class="c-services-list__service">
					<BaseLead
						class="c-services-list__service-label"
						:tag="'p'"
						:label="item.service"
						:align="$vssWidth >= 1024 ? 'right' : 'left'"
						mode="medium"
					/>
					<div
						class="c-services-list__indicator"
						v-if="$vssWidth >= 1024"
					>
						<span class="point -start"></span
						><span class="point -end"></span>
					</div>
				</div>

				<div class="c-services-list__desc">
					<BaseLead
						class="c-services-list__desc-label"
						:tag="'p'"
						:label="item.description"
						align="left"
						mode="regular"
					/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
// components
import BaseLead from "@/components/BaseLead.vue";
// Mixins
import vuescreensize from "@/mixins/vuescreensize.js";

export default {
	name: "ServicesList",
	props: {
		items: Array,
	},
	mixins: [vuescreensize],
	components: { BaseLead },
};
</script>

<style lang="scss">
.c-services-list {
	width: 100%;
	margin: 80px 0;
	@include breakpoint(large) {
		margin: 0 auto;
	}

	&__li {
		position: relative;
		display: flex;
		flex-wrap: wrap;

		opacity: 0.5;

		transition: opacity 0.5ms ease-in;

		&:not(:last-child) {
			padding-bottom: 50px;

			@include breakpoint(large) {
				padding-bottom: 100px;
			}
		}

		&.is-active {
			opacity: 1;
		}
	}

	&__service {
		position: relative;
		width: 100%;

		@include breakpoint(large) {
			width: 50%;
		}

		.c-baselead {
			@include breakpoint(large) {
				max-width: calc(100% - 200px);
			}
		}
	}
	&__desc {
		width: 100%;
		margin-left: auto;

		@include breakpoint(large) {
			width: 50%;
		}
	}

	&__service-label {
		font-size: 28px;
		margin-bottom: 20px;
		@include breakpoint(large) {
			font-size: 32px;
			margin-bottom: 0;
		}
	}
	&__desc-label {
		font-size: 16px;
	}

	&__indicator {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 160px;
		height: 2px;

		position: absolute;
		right: 20px;
		top: calc(50% - 1px);
		z-index: -1;

		background-color: $soft-blue;

		opacity: 0.5;
	}

	.point {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: $light-blue;

		position: relative;
		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			border: 1px solid $light-blue;

			width: 0;
			height: 0;
			border-radius: 50%;

			transition: all 0.5s ease-out;
			opacity: 0;
		}

		&.-end {
			position: absolute;
			left: 0;
			animation: goBack 1s forwards;
		}
	}

	&__li.is-active {
		.point.-end {
			animation: endTrip 1s forwards;
		}
		.point.-end::before {
			// transform: scale(6);
			left: calc(50% - 16px);
			top: calc(50% - 16px);
			width: 30px;
			height: 30px;
			opacity: 1;
			transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
			transition-delay: 1s;
		}
	}
}

@keyframes endTrip {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(154px);
	}
}
@keyframes goBack {
	0% {
		transform: translateX(154px);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
