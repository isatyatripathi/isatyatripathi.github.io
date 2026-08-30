import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page is not part of the portfolio.</h1>
      <p>Return to the homepage to explore Satya Tripathi’s experience and engineering impact.</p>
      <Link className="button button-primary" href="/">Return home</Link>
    </main>
  );
}
