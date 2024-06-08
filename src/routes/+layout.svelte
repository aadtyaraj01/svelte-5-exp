<script>
	import '../app.css';

	let { children } = $props();
</script>
<svelte:head>
	<link rel="stylesheet" href="https://matcha.mizu.sh/matcha.css">
	<link rel="stylesheet" href="https://matcha.mizu.sh/styles/@syntax-highlighting/mod.css">
</svelte:head>

{@render children()}
