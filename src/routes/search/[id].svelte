<script context="module">
	export async function load({ fetch, params }) {
		const api_key = import.meta.env.VITE_MOVIEDB_API_KEY;
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${params.id}&page=1&include_adult=true`
		);
		const data = await res.json();
		return {
			status: res.status,
			props: {
				search: params.id,
				popular: res.ok && data.results
			}
		};
	}
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';

	export let popular;
	export let search;
	console.log(popular);
</script>

<section class="bg-zinc-100 pt-10">
	<div
		class="p-4 max-w-[90rem] mx-auto popular-movies grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
	>
		{#each popular as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</section>
