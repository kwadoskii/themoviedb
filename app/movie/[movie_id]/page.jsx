import Image from "next/image";

export const metadata = {
  title: "My Movies - Next 13",
  description: "Diving into Next 13",
};

export default async function page({ params }) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${process.env.API_KEY}`
  ).then((data) => data.json());

  return (
    <div className="flex flex-col max-w-7xl px-10 min-h-screen py-5 mx-auto gap-5">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        priority
        width={1000}
        height={1000}
        className="rounded-lg"
      />

      <div className="">
        <h3 className="text-4xl">{movie.title}</h3>
        <p className="text-sm">Released: {movie.release_date.substr(0, 4)}</p>
      </div>
      <p className="text-lg leading-normal md:w-4/5 lg:w-3/5">{movie.overview}</p>
      <p className="text-sm">
        Runtime:
        <span className="text-base">{movie.runtime} minutes</span>
      </p>
      <div className="flex bg-green-600 w-fit p-3 rounded-md py-1.5 text-xs">
        <p>{movie.status}</p>
      </div>
    </div>
  );
}
