import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Cover from "../../resources/public/images/the-return-of-the-king.png";
import Image from "next/image";

export default function King() {
  const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  const index = volumes.indexOf(book);

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => {
          return (
            <li key={book.ordinal}>
              <h3>{book.ordinal}</h3>
              <p>{book.title}</p>
            </li>
          );
        })}
      </ul>
      <Image height={230} width={140} src={Cover} alt="book-cover" />
      <Navigation book={book} />
    </>
  );
}
