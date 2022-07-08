<script>
	import SearchMovies from './SearchMovies.svelte';
	import MovieDbLogo from '../assets/moviedb-logo.png';
</script>

<nav class=" bg-slate-800">
	<div class="max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-20">
			<a sveltekit:noscroll href="/" class="flex items-center">
				<img class="w-12 h-12" src={MovieDbLogo} alt="MovieDB logo" />
				<div class=" ml-2 text-2xl text-gray-50 font-bold -tracking-wider">MovieDB</div>
			</a>
			<div class="search">
				<SearchMovies />
			</div>
		</div>
	</div>
</nav>
