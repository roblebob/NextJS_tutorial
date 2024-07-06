import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, page not found</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
