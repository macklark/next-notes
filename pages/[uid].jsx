export default function UserId({ id }) {
  return (
    <div>
      <h1>Hello - {id}</h1>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const UserId = params.uid;

  return {
    props: {
      id: UserId,
    },
  };
}
