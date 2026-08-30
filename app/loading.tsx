export default function Loading() {
  return (
    <main className="loading-state" aria-live="polite" aria-busy="true">
      <span className="loading-mark">ST</span>
      <p>Loading portfolio…</p>
    </main>
  );
}
