<template>
	<div>Hello {{ name }}!</div>
</template>

<script lang="ts">
export default {
	setup() {
		const name: string = 'Brian';
		return {
			name
		};
	},
};
</script>