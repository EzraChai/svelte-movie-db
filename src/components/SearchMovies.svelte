<script>
	import SearchIcon from '../assets/search.svg';
	let inputMovie = '';
</script>

<form class="search pt-10 flex justify-center">
	<input
		bind:value={inputMovie}
		class="h-10 p-2 rounded-lg"
		name="search_movie"
		type="text"
		placeholder="Search"
	/>
	<button disabled={!inputMovie} class="ml-4 w-14 flex justify-center bg-white p-2 rounded-lg">
		<img
			class={!inputMovie ? 'opacity-50 w-6 h-6' : 'w-6 h-6'}
			src={SearchIcon}
			alt="Search Icon"
		/>
	</button>
</form>
