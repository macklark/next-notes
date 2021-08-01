import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Events() {
  const events = [
    { id: 1, title: "React conf", image: "../public/react.jpg" },
    { id: 2, title: "Vue conf", image: "../public/vue.jpg" },
    { id: 3, title: "Angular conf", image: "../public/angular.jpg" },
  ];

  return (
    <div className="container mx-auto mt-20">
      <Navbar />
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
