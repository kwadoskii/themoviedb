import Movie from "@/components/Movie";
import Image from "next/image";

export default async function Home() {
  const movieData = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
  ).then((data) => data.json());

  return (
    <main className="bg-slate-900 min-h-screen">
      <div className="grid gap-10 grid-cols-fluid mx-auto px-10 py-10 max-w-7xl">
        {movieData?.results?.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}
