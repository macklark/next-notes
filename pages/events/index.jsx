import Navbar from "../../components/Navbar";
import Link from "next/link";
import Search from "../../components/Search";
import { useRouter } from "next/router";

export default function Events() {
  const router = useRouter();
  const events = [
    {
      id: 1,
      title: "React conf",
      image: "../public/react.jpg",
      date: "2021-04-21",
    },
    {
      id: 2,
      title: "Vue conf",
      image: "../public/vue.jpg",
      date: "2022-02-22",
    },
    {
      id: 3,
      title: "Angular conf",
      image: "../public/angular.jpg",
      date: "2021-01-23",
    },
  ];

  const finder = (year, month) => {
    const path = `/events/${year}/${month}`;

    router.push(path);
  };

  return (
    <div className="container mx-auto mt-20">
      <Navbar />
      <Search onSearch={finder} />
      <h1 className="text-center mt-10 text-3xl">Events page</h1>
      {events.map((event) => {
        return (
          <div key={event.id} className="mt-10">
            <div className="text-center">
              <Link href={`/events/${event.title}`}>{event.title}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
