import fs from "fs/promises";
import path from "path";
import Link from "next/link";

export default function Home(props) {
  const { cars } = props;
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-xl font-bold mt-20">Home</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Link href={`/${car.id}`}>{car.model}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const fetcher = await fs.readFile(path.join(process.cwd(), "backend.json"));
  const parser = JSON.parse(fetcher);

  if (parser.cars.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cars: parser.cars,
    },
    revalidate: 100,
    // redirect: { destination: "/no-data" }
  };
}
