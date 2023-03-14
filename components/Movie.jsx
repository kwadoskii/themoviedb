import Image from "next/image";
import Link from "next/link";

export default function Movie({ movie: { id, title, poster_path, release_date } }) {
  //https://api.themoviedb.org/3/movie/76341?api_key=${}
  return (
    <Link href={`/movie/${id}`}>
      <div className="cursor-pointer text-white">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          priority
          style={{ objectFit: "fill" }}
          width={1000}
          height={60}
          className="rounded-lg"
        />
        <h3 className="pt-2 text-lg">{title}</h3>
        <p>{release_date.substr(0, 4)}</p>
      </div>
    </Link>
  );
}
