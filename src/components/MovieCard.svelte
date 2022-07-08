<script>
	export let movie;
</script>

<div
	class="movie-card bg-white rounded-lg overflow-hidden hover:cursor-pointer hover:-translate-y-2 transition-all"
>
	<a href={`/movie/${movie.id}`}>
		<div class="relative">
			<div class="absolute opacity-0 hover:opacity-25 transition-opacity bg-black w-full h-full" />
			<img
				class="w-full h-[40vh] object-cover"
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
			/>
		</div>
		<div class="description p-3">
			<h2 class="text-gray-800 text-xl font-semibold">{movie.title}</h2>
			<p class="mt-2 text-gray-600">{movie.release_date}</p>
		</div>
	</a>
</div>

<style>
</style>
