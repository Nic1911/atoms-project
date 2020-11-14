<template>
	<div class="c-base-pag">
		<div
			class="c-base-pag__bullets"
			:class="[realIndex === index ? 'is-active-bullet' : null]"
			v-for="(item, index) in items"
			:key="index"
		></div>

		<div class="c-base-pag__progress-bar">
			<div
				class="c-base-pag__bar"
				:style="`width: ${barProgress}%;`"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Basecarousel-nav",
	props: {
		items: Number,
		barProgress: Number,
		realIndex: Number,
		isStart: Boolean,
		isEnd: Boolean,
	},
};
</script>

<style lang="scss">
.c-base-pag {
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	max-width: 650px;
	height: 35px;

	margin: 30px auto;

	position: relative;

	&__bullets {
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

		&.is-active-bullet::before {
			// transform: scale(6);
			left: calc(50% - 16px);
			top: calc(50% - 16px);
			width: 30px;
			height: 30px;
			opacity: 1;
			transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
		}
	}

	&__progress-bar {
		width: 100%;
		height: 2px;

		position: absolute;
		left: 0;
		top: calc(50% - 1px);
		z-index: -1;

		background-color: $soft-blue;

		opacity: 0.5;
	}
}
</style>
