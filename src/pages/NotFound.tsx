import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | PBSRK</title>
        <meta name="description" content="The page you are looking for doesn't exist. Head back to PBSRK's homepage for AI-powered websites, apps, ads, and automation." />
        <meta property="og:title" content="Page Not Found | PBSRK" />
        <meta property="og:description" content="The page you are looking for doesn't exist. Head back to PBSRK's homepage for AI-powered websites, apps, ads, and automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hustlebharat.lovable.app${location.pathname}`} />
        <meta name="twitter:title" content="Page Not Found | PBSRK" />
        <meta name="twitter:description" content="The page you are looking for doesn't exist. Head back to PBSRK's homepage for AI-powered websites, apps, ads, and automation." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
