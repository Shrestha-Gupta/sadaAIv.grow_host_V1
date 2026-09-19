import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-enter not-found">
      <div className="not-found-inner">
        <span className="nf-num">404</span>
        <h2>Page not found.</h2>
        <p>This page does not exist or has been moved. Head back to the homepage.</p>
        <Link to="/" className="btn btn-dark">Go home &rarr;</Link>
      </div>
    </main>
  );
}