<template>
	<component
		class="c-baselead"
		:class="
			`text-color-${color} letter-case-${letterCase} font-mode-${mode} text-align-${align}`
		"
		:is="tag"
		v-html="label"
	></component>
</template>

<script>
export default {
	name: "BaseLead",
	props: {
		tag: String,
		label: String,
		display: { type: String, default: "normal" },
		align: { type: String, default: "left" },
		mode: { type: String, default: 3 },
		letterCase: { type: String, default: "none" },
		color: { type: String, default: "dark" },
	},
};
</script>

<style lang="scss">
.c-baselead {
	line-height: 1;
	margin: 0;
}
// font style
.font-mode-regular {
	@include font-regular;
}
.font-mode-regular-medium {
	@include font-regular-medium;
}
.font-mode-medium {
	@include font-medium;
}
.font-mode-bold {
	@include font-bold;
}
// letter case
.letter-case-none {
	text-transform: none;
}
.letter-case-lowercase {
	text-transform: lowercase;
}
.letter-case-capitalize {
	text-transform: capitalize;
}
.letter-case-uppercase {
	text-transform: uppercase;
}

.text-align-center {
	text-align: center;
}
.text-align-right {
	text-align: right;
}
.text-align-left {
	text-align: left;
}
.text-lign-justify {
	text-align: justify;
}
</style>
