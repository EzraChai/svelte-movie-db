<script>
	import SearchIcon from '../assets/search.svg';
	import { goto } from '$app/navigation';

	export let search = '';

	let inputMovie = search;

	function submitSearch() {
		goto(`/search/${inputMovie}`);
	}
</script>

<form on:submit|preventDefault={submitSearch} class="search flex justify-center">
	<input
		bind:value={inputMovie}
		class="h-10 p-2 rounded-lg text-white bg-gray-700 focus:bg-gray-800"
		name="search_movie"
		type="text"
		placeholder="Search"
	/>
	<button disabled={!inputMovie} class={'ml-4 w-14 flex bg-gray-700 justify-center p-2 rounded-lg'}>
		<img
			class={!inputMovie ? 'opacity-50 w-6 h-6' : 'w-6 h-6'}
			src={SearchIcon}
			alt="Search Icon"
		/>
	</button>
</form>
