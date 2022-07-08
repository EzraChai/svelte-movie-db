<script>
	export let popular;
	import MovieCard from './MovieCard.svelte';
</script>

<h3 class="text-center pt-10 pb-5 text-4xl font-semibold text-gray-800">Popular Movies</h3>
<h6 class="text-center tracking-wide text-gray-600 pb-12">
	The most popular movies around the global.
</h6>
<div
	class="p-4  max-w-[90rem] mx-auto popular-movies grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
>
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>
