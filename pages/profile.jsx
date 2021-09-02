export default function Profile({ name }) {
  return (
    <div>
      <p>Hello, {name}</p>
    </div>
  );
}

export async function getServerSideProps({ params, req, res }) {
  //   console.log(req);
  //   console.log(res);

  return {
    props: {
      name: "ralph",
    },
  };
}
