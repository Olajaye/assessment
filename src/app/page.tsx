"use client";
import { useFetchObjects } from "@/api/useFetch";
import { ErrorComponent } from "@/components/miniComponent/Error";
import { LoadingSpinner } from "@/components/miniComponent/Loading";
import { ProductTable } from "@/components/ProductTable";

export default function Home() {
  const { data, error, loading, refetch } = useFetchObjects();
  console.log(data)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Featured Products
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our collection of premium devices and accessories
          </p>
        </div>
        {loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div>
            <ErrorComponent error={error} refetch={refetch} />
          </div>
        ) : (
          <div className="mt-4">
            <ProductTable products={data} />
          </div>
        )}
      </div>
    </main>
  );
}
