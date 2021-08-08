import fs from "fs/promises";
import path from "path";

export default function CarId(props) {
  const { car } = props;
  return (
    <div className="text-center mt-20">
      <p>{car.model}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const carId = params.id;

  const fetcher = await fs.readFile(path.join(process.cwd(), "backend.json"));
  const parser = JSON.parse(fetcher);

  const filterer = parser.cars.find((car) => car.id === carId);

  return {
    props: {
      car: filterer,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}
