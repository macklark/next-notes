import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";

export default function EachEvent() {
  const events = [
    { id: 1, title: "React conf", image: "../public/react.jpg" },
    { id: 2, title: "Vue conf", image: "../public/vue.jpg" },
    { id: 3, title: "Angular conf", image: "../public/angular.jpg" },
  ];
  const router = useRouter();
  const PageEvent = events.filter((event) => event.title == router.query.id);

  return (
    <div className="container mx-auto mt-20">
      <Navbar />
      {PageEvent.length == 0 && (
        <h1 className="text-center mt-10">Loading...</h1>
      )}
      {PageEvent.length > 0 && (
        <div>
          <h1 className="text-center mt-10">{PageEvent[0].title}</h1>
          <div className="flex justify-center mt-10">
            <Image
              src={"/" + PageEvent[0].image}
              alt="conference image"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
