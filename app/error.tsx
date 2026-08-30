"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="not-found">
      <p className="eyebrow">Something went wrong</p>
      <h1>The portfolio could not be displayed.</h1>
      <p>Please retry. Direct email and LinkedIn links remain available from the homepage once it loads.</p>
      <button className="button button-primary" type="button" onClick={reset}>Try again</button>
    </main>
  );
}
