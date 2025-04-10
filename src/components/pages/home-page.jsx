import Link from "next/link";

export const HomePage = () => {
  return (
    <div>
      <div>home page</div>
      <Link href="/restaurants">view restaurants</Link>
    </div>
  );
};
