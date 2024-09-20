import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">음식들</Link>
      </p>
      <p>
        <Link href="/meals/share">나눠먹기</Link>
      </p>
      <p>
        <Link href="/community">모임</Link>
      </p>
    </main>
  );
}
