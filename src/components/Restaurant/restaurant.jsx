import Link from "next/link";

export const Restaurant = ({ id, name, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <Link href={`/restaurants/${id}/menu`}>show menu</Link>|
      <Link href={`/restaurants/${id}/review`}>reviews</Link>
    </div>
  );
};
