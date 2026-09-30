import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-6">
      <Helmet>
        <title>Page not found | Avora Matcha</title>
        <meta name="description" content="This page doesn't exist. Return to Avora Matcha." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center">
        <h1 className="font-display text-6xl text-cream font-light mb-4">404</h1>
        <p className="font-body text-cream/60 mb-10">This page doesn't exist.</p>
        <Link
          to="/"
          className="inline-block font-body text-sm tracking-widest text-cream px-10 py-4 border border-cream/40 hover:border-cream transition-colors duration-500"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
