import React, { useState } from "react";
import useGET from "../../hooks/useGET";
import { renderProduct } from "../../components/Home/Products";
import ReactPaginate from "react-paginate";
import { setDataLocalStorage, getDataLocalStorage } from "../../Utils/LocalStorage";
export default function AllProduct() {
  const [activePage, setActivePage] = useState(getDataLocalStorage("activePage") || 1);
  const itemsPerPage = 8;

  // Handle ESM/CJS interop for react-paginate
  const Paginate = ReactPaginate.default || ReactPaginate;

  const { data: fetchedProducts, loading, error } = useGET(
    `${import.meta.env.VITE_API_URL}/myecom/products?page=${activePage}&limit=${itemsPerPage}`
  );

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto py-32 px-4 flex justify-center items-center">
        <p className="text-lg tracking-widest uppercase text-gray-500 animate-pulse">
          Loading Collection...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-xl mx-auto py-32 px-4 text-center">
        <p className="text-red-500 tracking-wide">Error loading products: {error}</p>
      </div>
    );
  }

  const pageCount = Math.ceil((fetchedProducts?.totalProducts || 0) / itemsPerPage);

  const handlePageClick = (event) => {
    setActivePage(event.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDataLocalStorage("activePage", event.selected + 1);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 min-h-screen">
      <h1 className="text-center text-3xl tracking-widest uppercase mb-16 text-[#2c2c2c] font-normal">
        All Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {renderProduct(fetchedProducts?.products || [])}
      </div>

      {pageCount > 1 && (
        <Paginate
          breakLabel="..."
          nextLabel="⟩"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="⟨"
          forcePage={activePage - 1}
          containerClassName="flex justify-center mt-20 gap-x-1 sm:gap-x-2 items-center"
          pageClassName="page-item"
          pageLinkClassName="px-3 sm:px-4 py-2 text-[10px] sm:text-xs tracking-widest border border-transparent transition-all duration-300 text-[#2c2c2c] hover:border-[#2c2c2c]"
          activeClassName="bg-[#2c2c2c] text-white"
          activeLinkClassName="!text-white"
          previousClassName="page-item"
          previousLinkClassName="px-3 sm:px-4 py-2 text-xs text-[#2c2c2c] font-light"
          nextClassName="page-item"
          nextLinkClassName="px-3 sm:px-4 py-2 text-xs text-[#2c2c2c] font-light"
          breakClassName=""
          breakLinkClassName="px-3 sm:px-4 py-2 text-xs text-[#2c2c2c]"
        />
      )}
    </div>
  );
}
