<template>
	<div class="c-blogcards">
		<swiper
			class="c-swiper"
			ref="mySwiper"
			:options="swiperOptions"
			@ready="onInit"
		>
			<swiper-slide
				class="c-swiper__slide"
				v-for="(item, index) in items"
				:key="index"
			>
				<div class="c-swiper__slide-content" :data-index="index">
					<p class="c-swiper__slide-date">{{ item.date }}</p>
					<div class="c-swiper__slide-hashtag">
						<span>{{ item.hashtag }}</span>
					</div>
					<BaseLead
						class="c-swiper__slide-title"
						:tag="'p'"
						:label="item.title"
						mode="bold"
						data-swiper-parallax="-100"
					/>
					<p class="c-swiper__slide-author">{{ item.author }}</p>
				</div>
				<div class="c-swiper__slide-visual">
					<div
						class="c-swiper__slide-image"
						data-swiper-parallax="-700"
					>
						<router-link :to="item.link">
							<img
								v-if="item.imgSrc"
								:src="require(`@/assets${item.imgSrc}`)"
								alt=""
							/>
						</router-link>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

// components
import BaseLead from "@/components/BaseLead.vue";

export default {
	name: "HomeHeroCarousel",
	props: {
		items: Array,
	},
	components: {
		Swiper,
		SwiperSlide,
		BaseLead,
	},
	directives: {
		swiper: directive,
	},
	data() {
		return {
			swiper: null,
			// carousel progress
			carouselProgress: 0,
			swiperOptions: {
				grabCursor: true,
				watchOverflow: true,
				threshold: 10,
				speed: 600,
				loop: true,
				centeredSlides: true,
				slidesPerView: 2.5,
				spaceBetween: 40,
				breakpoints: {
					320: {
						slidesPerView: 1.2,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 2.5,
						spaceBetween: 40,
					},
				},
			},
		};
	},
	methods: {
		onInit(event) {
			this.swiper = this.$refs.mySwiper.$swiper;
		},
		onSlideChange() {
			console.log("slide change");
		},
	},
};
</script>

<style lang="scss" scoped>
.c-swiper {
	&__slide {
		position: relative;
	}
	&__slide-content {
		position: relative;
		z-index: 2;
		max-width: 60%;

		position: absolute;
		bottom: 0;
		left: 0;

		padding: 20px;
		color: $color-white;
	}
	&__slide-title {
		font-size: 24px;
		margin: 0 0 20px;

		@include breakpoint(large) {
			font-size: 32px;
		}
	}

	&__slide-date {
		font-size: 12px;
		margin: 0 0 20px;
	}

	&__slide-author {
		font-size: 14px;
		margin: 0 0 0;
	}

	&__slide-hashtag {
		margin: 0 0 20px;
		span {
			display: inline-block;

			background-color: $color-white;

			backface-visibility: hidden;
			position: relative;
			cursor: pointer;
			display: inline-block;
			white-space: nowrap;
			border-radius: 500px;
			border: 0px solid $color-white;
			border-width: 0px 0px 0px 0px;
			padding: 5px 15px 5px 15px;
			text-align: center;
			color: $dark-blue;
			text-decoration: none;

			@include breakpoint(large) {
				padding: 10px 15px 10px 15px;
			}
		}
	}

	&__slide-visual {
		position: relative;
		width: 100%;
	}
	&__slide-image {
		width: 100%;
		padding-top: (10 / 7) * 100%;
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
