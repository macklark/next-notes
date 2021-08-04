import { useRouter } from "next/router";
import Link from "next/link";

export default function Filtered() {
  const router = useRouter();

  const events = [
    {
      id: 1,
      title: "React conf",
      image: "../public/react.jpg",
      date: "2022-05-21",
    },
    {
      id: 2,
      title: "Vue conf",
      image: "../public/vue.jpg",
      date: "2022-05-02",
    },
    {
      id: 3,
      title: "Angular conf",
      image: "../public/angular.jpg",
      date: "2021-04-23",
    },
  ];

  const filterer = () => {
    const filterData = router.query.slug;
    const filterYear = filterData[0];
    const filterMonth = filterData[1];
    const nYear = +filterYear;
    const nMonth = +filterMonth;

    const filter = events.filter((event) => {
      const eventDate = new Date(event.date);
      if (!router.query.slug) {
        return <p className="text-center">Loading...</p>;
      }

      return (
        eventDate.getFullYear() === nYear && eventDate.getMonth() + 1 === nMonth
      );
    });

    return filter;
  };

  if (router.query.slug == undefined) {
    return <p className="text-center">Loading...</p>;
  } else {
    filterer();
  }

  return (
    <div className="mt-10 text-center">
      {filterer().length == 0 && (
        <p className="text-2xl text-center">No events on this date</p>
      )}
      {filterer().map((event) => {
        return (
          <div
            key={event.id}
            className="flex justify-center content-center mb-10"
          >
            <Link href={`/events/${event.title}`}>
              <a className="text-4xl">{event.title}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
