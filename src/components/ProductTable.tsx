"use client";

import { ProductTableProps } from "@/types/types";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { formatPrice } from "@/lib/formartPrice";
import { getProductIcon } from "@/lib/phoneIcon";

export function ProductTable({ products }: ProductTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen">
      {/* Search Bar */}
      <div className="mb-6 z-10 py-2">
        <div className="relative max-w-md">
          <BiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="h-full overflow-auto">
          <table className="w-full min-w-[900px]">
            <thead className="z-10 bg-gray-100">
              <tr>
                <th className="p-3 text-left text-lg font-semibold text-black whitespace-nowrap">
                  ID
                </th>
                <th className="p-3 text-left text-lg font-semibold text-black whitespace-nowrap">
                  Name
                </th>
                <th className="p-3 text-left text-lg font-semibold text-black whitespace-nowrap">
                  Color
                </th>
                <th className="p-3 text-left text-lg font-semibold text-black whitespace-nowrap">
                  Capacity
                </th>
                <th className="p-3 text-left text-lg font-semibold text-black whitespace-nowrap">
                  Price
                </th>
                <th className="p-3 text-left text-lg font-semibold text-black whitespace-nowrap">
                  Generation
                </th>
                <th className="p-3 text-left text-lg font-semibold text-black whitespace-nowrap">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 text-lg text-black whitespace-nowrap">
                    {item.id}
                  </td>
                  <td className="p-3 text-lg text-black whitespace-nowrap max-w-[300px]">
                    <div className="flex items-center gap-2">
                      {getProductIcon(item.name)}
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td className={`p-3 text-lg text-black whitespace-nowrap`}>
                    <p
                      className={` p-1 rounded-lg text-black ${
                        item.data?.color === "Cloudy White"
                          ? "bg-[#a8a6a692] text-white"
                          : item.data?.color === "Brown"
                          ? "bg-green-700 text-white"
                          : item.data?.color === "Purple"
                          ? "bg-purple-900 text-white"
                          : ""
                      }`}
                    >
                      {item.data?.color || "N/A"}
                    </p>
                  </td>
                  <td className="p-3 text-lg text-black whitespace-nowrap">
                    {item.data?.capacity || item.data?.capacityGB || "N/A"}
                  </td>
                  <td className="p-3 text-lg text-black whitespace-nowrap">
                    {item.data?.price ? formatPrice(item.data.price) : "N/A"}
                  </td>
                  <td className="p-3 text-lg text-black whitespace-nowrap">
                    {item.data?.generation || item.data?.year || "N/A"}
                  </td>
                  <td className="p-3 text-lg text-black max-w-[200px] truncate">
                    {item.data?.description || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
