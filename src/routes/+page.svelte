<script lang="ts">
	// transitions
	import { slide } from 'svelte/transition';

	// need local storage to perpetuate user selection.

	let consentGiven: boolean | null = $state(null);
	let hasLoaded = $state(false);

	$effect(() => {
		let cookieStatus = localStorage.getItem('cookie-consent');
		if (cookieStatus === null) {
			consentGiven = null;
		} else {
			consentGiven = cookieStatus === 'true';
		}

		hasLoaded = true;
	});

	const acceptCookies = () => {
		localStorage.setItem('cookie-consent', 'true');
		consentGiven = true;
	};
	const rejectCookies = () => {
		localStorage.setItem('cookie-consent', 'false');
		consentGiven = false;
	};
</script>

<h1 class="text-center text-slate-700 text-3xl font-semibold">Svelte 5 Labs 🧪</h1>

{#if consentGiven}
	<h2 class="text-2xl text-center mt-8">Analytics Running</h2>
{/if}

{#if consentGiven === null && hasLoaded}
	<div
		class="absolute bottom-5 left-1/2 -translate-x-1/2 w-4/5 md:max-w-xl rounded-md flex flex-col gap-4 shadow-md bg-slate-800 px-3 py-5 md:px-5 md:py-8 select-none"
		transition:slide
	>
		<h3 class="text-2xl text-slate-300 font-semibold">Cookie Consent</h3>

		<p class="text-white text-lg">
			We use cookkies to store data and provide a better experience tailored to each user. To know
			more about how we use your data, read our <a href="/privacy-policy">Privacy Policy</a>
		</p>

		<div class="btn-group flex flex-col gap-2">
			<button
				type="button"
				class="bg-slate-200 rounded-sm text-slate-800 px-2 py-1 text-lg w-full"
				onclick={acceptCookies}>Accept All</button
			>
			<button
				type="button"
				class="bg-slate-200 rounded-sm text-slate-800 px-2 py-1 text-lg w-full"
				onclick={rejectCookies}>Reject All</button
			>
		</div>
	</div>
{/if}
