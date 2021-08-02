import { useRouter } from "next/router";

export default function Filtered() {
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

  const filterer = () => {
    const nYear = +router.query.slug[0];
    const nMonth = +router.query.slug[1];

    const filter = events.filter((event) => {
      const eventDate = new Date(event.date);
      console.log(eventDate);
      if (!router.query.slug) {
        return <p className="text-center">Loading...</p>;
      }

      return (
        eventDate.getFullYear() === nYear && eventDate.getMonth() === nMonth
      );
    });

    return filter;
  };

  filterer();

  return (
    <div className="mt-10 text-center">
      <h1>Filtered Pages</h1>
    </div>
  );
}
