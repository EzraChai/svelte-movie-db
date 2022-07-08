<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=bb2a3c35744ec26c5fbde91ef906b421&language=en-US&page=1`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				status: res.status,
				props: {
					popular: data.results
				}
			};
		}
	}
</script>

<script lang="ts">
	import PopularMovies from '../components/PopularMovies.svelte';
	export let popular;
</script>

<section class="bg-zinc-100">
	<PopularMovies {popular} />
</section>
