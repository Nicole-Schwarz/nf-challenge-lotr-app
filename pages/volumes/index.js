import Link from "next/link";
import { introduction, volumes } from "../../resources/lib/data.js";

export default function Volumes() {
  return (
    <>
      <Link href="/">← Back Home</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes:</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
