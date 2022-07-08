<script context="module">
	export async function load({ fetch }) {
		const api_key = import.meta.env.VITE_MOVIEDB_API_KEY;
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false`
		);
		const data = await res.json();
		return {
			status: res.status,
			props: {
				popular: res.ok && data.results
			}
		};
	}
</script>
