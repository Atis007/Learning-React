import { ErrorBoundary } from "../../components/ErrorBoundary";
import Products from "./Products"

export default async function page({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.slug?.[0] || null;
  
  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Products Page</h1>
      </div>
      <ErrorBoundary fallback="Could not load products, please refresh the page.">
        <Products category={category} />
      </ErrorBoundary>
    </div>
  );
}
