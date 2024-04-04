import Navbar from "./Components/Navbar";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center h-full">
        <div className="pl">
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__text">Loading…</div>
        </div>
      </section>
    </>
  );
}
