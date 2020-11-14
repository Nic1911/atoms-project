<template>
	<Layout>
		<div class="p-home">
			<div class="p-home__hero">
				<div class="grid-container">
					<HomeHeroCarousel :items="heroItems" />
					<div class="c-geometry -rounded -soft-blue"></div>
				</div>
			</div>
			<section class="p-home__lead section">
				<div class="grid-container">
					<div class="grid-x align-center">
						<div class="cell large-8 xxxlarge-6">
							<BaseLead
								:tag="'h2'"
								align="center"
								:label="leadFirstSeciton"
								mode="medium"
							/>
						</div>
					</div>
				</div>
			</section>
			<section class="p-home__focus section" ref="focus">
				<div class="c-geometry -rounded -soft-gray -bigger">
					<div class="c-geometry__child -rounded -soft-blue"></div>
				</div>

				<div class="grid-container">
					<div class="grid-x align-middle">
						<div class="cell large-3">
							<BaseLead
								class="p-home__focus-title"
								:tag="'h2'"
								align="left"
								:label="focusLead"
								mode="medium"
							/>
							<router-link
								class="call-to-action -outline"
								:to="'#'"
								data-swiper-parallax="-300"
								><span>{{ focusCta }}</span></router-link
							>
						</div>
						<div class="cell large-7 large-offset-2">
							<ServicesList :items="focusItems" />
						</div>
					</div>
				</div>
			</section>
			<section class="p-home__why-us section">
				<div class="grid-container">
					<TextBannerOverlay :item="banner" />
				</div>
			</section>

			<section class="p-home__blog section">
				<div class="grid-container">
					<div class="grid-x align-justify align-middle">
						<div class="cell small-8 large-6">
							<BaseLead
								class="p-home__blog-title"
								:tag="'h3'"
								label="Our Blog"
								mode="bold"
							/>
						</div>
						<div class="cell shrink">
							<router-link class="p-home__blog-link" to="#"
								><span>Discover</span></router-link
							>
						</div>
					</div>
				</div>
				<BlogCardsCarousel :items="blogData" />
			</section>
		</div>
	</Layout>
</template>

<script>
// components
import Layout from "@/layouts/main.vue";
import HomeHeroCarousel from "@/components/HomeHeroCarousel.vue";
import BaseLead from "@/components/BaseLead.vue";
import ServicesList from "@/components/ServicesList.vue";
import TextBannerOverlay from "@/components/TextBannerOverlay.vue";
import BlogCardsCarousel from "@/components/BlogCardsCarousel.vue";

// data
import appConfig from "@/app.config.json";
// dependencies
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Mixins
import vuescreensize from "@/mixins/vuescreensize.js";

export default {
	name: "Home",
	mixins: [vuescreensize],
	components: {
		Layout,
		HomeHeroCarousel,
		BaseLead,
		ServicesList,
		TextBannerOverlay,
		BlogCardsCarousel,
	},
	data() {
		return {
			title: appConfig.title,
			description: appConfig.description,
			// labels
			leadFirstSeciton:
				"Zerogrey is a et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti et quas  excepturi sint occaecati cupiditate non provident.",
			// hero data
			heroItems: [
				{
					title: "Performance without compromises",
					subtitle:
						"How we helped Blumarine to conquer new businesses",
					label: "Blumarine",
					position: "Front end, Design UX/UI",
					imgSrc: "/images/pages/home/hero/slide_1.jpg",
					link: "#",
				},
				{
					title: "Compromises and performance",
					subtitle:
						"How we helped Blumarine to conquer new businesses",
					label: "Blumarine",
					position: "Back end",
					imgSrc: "/images/pages/home/hero/slide_1.jpg",
					link: "#",
				},
				{
					title: "Performance without compromises",
					subtitle:
						"How we helped Blumarine to conquer new businesses",
					label: "Blumarine",
					position: "Front end, Design UX/UI",
					imgSrc: "/images/pages/home/hero/slide_1.jpg",
					link: "#",
				},
				{
					title: "Compromises and performance",
					subtitle:
						"How we helped Blumarine to conquer new businesses",
					label: "Blumarine",
					position: "Back end",
					imgSrc: "/images/pages/home/hero/slide_1.jpg",
					link: "#",
				},
			],
			// focus data
			focusLead: "How can we help your business?",
			focusCta: "Dicsover our services",
			focusItems: [
				{
					service: "Merchant of records",
					description:
						"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
				},
				{
					service: "Operations",
					description:
						"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
				},
				{
					service: "Merchant of records",
					description:
						"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
				},
				{
					service: "Operations",
					description:
						"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
				},
			],
			// why us data
			banner: {
				title: "Why should  you choose us?",
				body:
					"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet dolorem ipsum quia dolor sit amet.",
				link: "#",
				imgSrc: "/images/pages/home/why-us.jpg",
			},
			// blog data
			blogData: [
				{
					title: "Taking your eCommerce business international",
					author: "Zerogrey Team",
					date: "29 may 2020",
					imgSrc: "/images/pages/home/blog-thumbs/article-1.jpg",
					link: "#",
					hashtag: "#atoms",
				},
				{
					title: "How to open a user friendly e-commerce store",
					author: "Zerogrey Team",
					date: "29 may 2020",
					imgSrc: "/images/pages/home/blog-thumbs/article-2.jpg",
					link: "#",
					hashtag: "#atoms",
				},
			],
		};
	},
	methods: {
		init() {
			const isMobile = this.$vssWidth < 1024;

			gsap.registerPlugin(ScrollTrigger);

			const endCalc = this.$refs.focus.offsetHeight * 4;

			ScrollTrigger.create({
				trigger: this.$refs.focus,
				start: `top ${isMobile ? "-250px" : "150px"}`,
				// end: "bottom 10%",
				end: `${
					isMobile
						? this.$refs.focus.offsetHeight
						: this.$refs.focus.offsetHeight + 800
				}px top`,
				pin: this.$refs.focus,
				// markers: true,
			});

			const li = gsap.utils.toArray(
				this.$refs.focus.querySelectorAll(".c-services-list__li")
			);

			li.forEach((service, index) => {
				gsap.from(service, {
					scrollTrigger: {
						trigger: service,
						// markers: true,
						toggleActions: "play complete reverse reset",
						className: { targets: service, className: "is-active" },
						start: "top 150px",
						// end: `+=100px 25%`,
						end: `${service.offsetHeight + 200}px top`,
						onEnter() {
							service.classList.add("is-active");
						},
						onLeave() {
							// service.classList.remove("is-active");
						},
						onEnterBack() {
							service.classList.add("is-active");
						},
						onLeaveBack() {
							service.classList.remove("is-active");
						},
					},
				});
			});
		},
	},
	mounted() {
		this.init();
	},
};
</script>

<style lang="scss">
.basemessage {
	font-family: $system-default-font-family;
}

.p-home {
	overflow: hidden;
	// min-height: 1000vh;
	.section {
		margin-bottom: 20vh;
		// z-index: $layer-modal-z-index;
		@include breakpoint(large) {
			margin-bottom: 40vh;
		}
	}
	&__hero {
		position: relative;
		margin-bottom: 10vh;
		padding: 30px 0;
		> .grid-container {
			height: 100%;
		}

		@include breakpoint(large) {
			margin-bottom: 40vh;
		}

		.c-geometry {
			position: absolute;
			z-index: -1;
			top: 0;
			right: 0;
			width: 90vh;
			height: 90vh;

			transform: translateX(60%) translateY(28%);

			@include breakpoint(large) {
				width: 60vw;
				height: 60vw;
				transform: translateX(10%);
			}
		}
	}
	&__lead .c-baselead {
		font-size: 32px;
		line-height: 100%;
		color: $color-text;
	}

	&__focus {
		position: relative;
		z-index: $layer-negative-z-index;
		.c-geometry {
			position: absolute;
			z-index: -1;
			top: 0;
			right: 0;
			width: 140vh;
			height: 140vh;
			transform: translateX(45%) translateY(0%);

			&__child {
				width: 100vh;
				height: 100vh;
				@include breakpoint(large) {
					width: 60vw;
					height: 60vw;
				}
			}

			@include breakpoint(large) {
				width: 90vw;
				height: 90vw;
				transform: translateX(30%) translateY(-30%);
			}
		}
	}

	&__focus-title {
		font-size: 48px;
		margin-bottom: 20px;
	}

	&__blog-title {
		font-size: 48px;
	}

	.c-blogcards {
		margin-top: 40px;
	}
}
</style>
