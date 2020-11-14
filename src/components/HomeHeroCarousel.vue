<template>
	<div class="c-homeherocarousel">
		<swiper
			class="c-homeherocarousel__swiper"
			ref="mySwiper"
			:options="swiperOptions"
			@ready="onInit"
			@slideChangeTransitionEnd="slideChangeTransitionEnd"
		>
			<swiper-slide
				class="c-homeherocarousel__slide"
				v-for="(item, index) in items"
				:key="index"
			>
				<div
					class="c-homeherocarousel__slide-content"
					:data-index="index"
				>
					<BaseLead
						class="c-homeherocarousel__slide-title"
						:tag="'p'"
						:label="item.title"
						mode="bold"
						data-swiper-parallax="-600"
					/>
					<BaseLead
						class="c-homeherocarousel__slide-subtitle"
						:tag="'p'"
						:label="item.subtitle"
						mode="regular"
						data-swiper-parallax="-200"
					/>
					<router-link
						class="c-homeherocarousel__slide-link call-to-action -outline"
						:to="item.link"
						data-swiper-parallax="-300"
						><span>Discover</span></router-link
					>
				</div>
				<div class="c-homeherocarousel__slide-visual">
					<div class="c-homeherocarousel__slide-labels">
						<BaseLead
							class="c-homeherocarousel__slide-label"
							:tag="'p'"
							:label="item.label"
							align="right"
							mode="medium"
							data-swiper-parallax="-400"
						/>
						<BaseLead
							class="c-homeherocarousel__slide-position"
							:tag="'p'"
							:label="item.position"
							align="right"
							mode="regular"
							data-swiper-parallax="-500"
						/>
					</div>
					<div
						class="c-homeherocarousel__slide-image"
						data-swiper-parallax="-700"
					>
						<img
							v-if="item.imgSrc"
							:src="require(`@/assets${item.imgSrc}`)"
							alt=""
						/>
					</div>
				</div>
			</swiper-slide>

			<div
				class="c-homeherocarousel__pagination swiper-pagination"
				slot="pagination"
			></div>
		</swiper>

		<BaseCarouselPagination
			:items="items.length"
			:barProgress="carouselProgress"
			:realIndex="swiper ? swiper.realIndex : 0"
		/>
	</div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

// components
import BaseLead from "@/components/BaseLead.vue";
import BaseCarouselPagination from "@/components/BaseCarouselPagination.vue";

export default {
	name: "HomeHeroCarousel",
	props: {
		items: Array,
	},
	components: {
		Swiper,
		SwiperSlide,
		BaseLead,
		BaseCarouselPagination,
	},
	data() {
		return {
			swiper: null,
			// carousel progress
			carouselProgress: 0,
			swiperOptions: {
				grabCursor: true,
				watchOverflow: true,
				loop: true,
				speed: 800,
				parallax: true,
			},
		};
	},
	// computed: {
	// 	swiper() {
	// 		return this.$refs.mySwiper.$swiper;
	// 	},
	// },
	methods: {
		onInit(event) {
			this.swiper = this.$refs.mySwiper.$swiper;
		},
		onSlideChange() {
			console.log("slide change");
		},
		slideChangeTransitionEnd() {
			if (this.swiper === null) {
				return;
			}

			const outOff = this.items.length;
			let value =
				this.swiper.realIndex === 0 ? 0 : this.swiper.realIndex + 1;
			let result = (value * 100) / outOff;

			this.carouselProgress = result;

			this.swiper.update();
		},
	},
};
</script>

<style lang="scss" scoped>
.c-homeherocarousel {
	&__slide {
		position: relative;
	}
	&__slide-content {
		position: relative;
		z-index: 2;

		@include breakpoint(large) {
			max-width: 60%;
			position: absolute;
			top: 0;
			left: 0;
			padding: 22vh 0;
		}
	}
	&__slide-title {
		font-size: 48px;

		@include breakpoint(large) {
			font-size: 72px;
		}
	}
	&__slide-subtitle {
		font-size: 16px;
		color: $color-text-light;
		margin: 20px 0;
	}

	.swiper-slide-active {
		.c-homeherocarousel__slide-visual {
			opacity: 1;
			transform: translateY(0);
		}
	}

	&__slide-visual {
		position: relative;

		height: 100%;

		display: flex;
		flex-wrap: wrap;
		flex-direction: column;

		margin-left: auto;

		opacity: 0;
		transform: translateY(50px);

		transition: all 0.5s ease-in 0.5s;

		@include breakpoint(large) {
			flex-direction: row;
			margin-right: 12%;
			width: 60%;
			margin-right: 10%;
		}
	}
	&__slide-image {
		width: 100%;
		padding-top: (14 / 19) * 100%;
		position: relative;

		img {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__slide-labels {
		margin-bottom: 20px;
	}
	&__slide-label {
		font-size: 24px;
		margin-bottom: 10px;
	}
	&__slide-position {
		font-size: 12px;
		color: $color-text-light;
	}

	&__slide-labels {
		text-align: right;
		align-self: flex-end;

		@include breakpoint(large) {
			position: absolute;
			left: 0;
			bottom: 0;
			transform: translateX(calc(-100% - 2rem));
		}
	}
}
</style>
