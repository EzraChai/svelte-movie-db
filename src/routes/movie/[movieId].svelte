<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=bb2a3c35744ec26c5fbde91ef906b421&language=en-US`
		);
		const movieDetails = await res.json();
		if (res.ok) {
			return {
				props: {
					movieDetails
				}
			};
		}
	}
</script>

<script>
	export let movieDetails;
</script>

<div class="relative movie-details pt-20 mx-auto">
	<div class="image relative">
		<div class="w-full h-full absolute opacity-[0.65] bg-black" />
		<div class="absolute text-white main-container mt-20 flex justify-center">
			<div class="image-container px-20 ">
				<img
					class="w-full h-[50vh] rounded-xl object-cover"
					src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
					alt={movieDetails.title}
				/>
			</div>
			<div class="text-container mt-20">
				<h1 class=" text-4xl font-bold">
					{movieDetails.title}
					<span class="font-normal text-lg">( {movieDetails.release_date.slice(0, 4)} )</span>
				</h1>
				<div class="flex mt-2">
					{#each movieDetails.genres as genre}
						<div class="pr-[0.4rem] font-semibold text-[1rem] text-gray-200 ">{genre.name}</div>
					{/each}
					•
					<div class=" px-2">
						{movieDetails.runtime}m
					</div>
				</div>

				<div class="wrapper">
					<div class="relative mt-6">
						<div
							class="absolute bg-white w-20 h-20 flex justify-center items-center rounded-full p-2"
						>
							<div
								class="absolute bg-gray-900 w-[4.2rem] h-[4.2rem] flex justify-center items-center rounded-full "
							>
								<div
									class="absolute bg-white w-[3.8rem] h-[3.8rem] flex justify-center items-center rounded-full "
								>
									<div class="text-black font-bold text-xl">
										{movieDetails.vote_average}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="relative">
						<div class="absolute top-[1.6rem] left-28 font-semibold text-xl">Overall Rating</div>
					</div>
				</div>

				<div class="mt-[8rem] max-w-[70rem]">
					<div class="text-xl font-semibold">Overview</div>
					<p>{movieDetails.overview}</p>
				</div>
				<p />
			</div>
		</div>
		<img
			class="w-full h-[70vh] object-cover"
			src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
			alt={movieDetails.title}
		/>
	</div>
</div>
