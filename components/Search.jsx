import { useRef } from "react";

export default function Search(props) {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const yearSelected = yearRef.current.value;
    const monthSelected = monthRef.current.value;

    props.onSearch(yearSelected, monthSelected);
  };

  return (
    <form
      className="flex mt-10 justify-center gap-4 content-center items-center"
      onSubmit={submitHandler}
    >
      <div>
        <label htmlFor="year">Year</label>
        <select className="border-2 border-black ml-2" ref={yearRef}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <select className="border-2 ml-2 border-black" ref={monthRef}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <button className="bg-red-500 px-3 py-2 rounded text-white">
        Search
      </button>
    </form>
  );
}
