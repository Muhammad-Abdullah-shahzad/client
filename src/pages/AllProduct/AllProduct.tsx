import React, { useState, useEffect } from "react";
import useGET from "../../hooks/useGET";
import { renderProduct } from "../../components/Home/Products";
import ReactPaginate from "react-paginate";
import { setDataLocalStorage, getDataLocalStorage } from "../../Utils/LocalStorage";
import Filters from "../../components/AllProduct/Filters";
import { VscSettings } from "react-icons/vsc";
type Gender = "Men" | "Women" | "";

type Props = {
  title?: string;
  gender?: Gender;
}

export default function AllProduct({ title = "All Products", gender = "" }: Props) {
  const [activePage, setActivePage] = useState(getDataLocalStorage("activePage") || 1);
  const [selectedGender, setSelectedGender] = useState(gender);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("high_to_low");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const itemsPerPage = 8;

  // Handle ESM/CJS interop for react-paginate
  const Paginate = ReactPaginate.default || ReactPaginate;

  // Reset page when filters change
  useEffect(() => {
    setActivePage(1);
    setDataLocalStorage("activePage", 1);
  }, [selectedGender, selectedCategory, selectedPrice]);

  const { data: fetchedProducts, loading, error, refetch } = useGET(
    `${import.meta.env.VITE_API_URL}/myecom/products?page=${activePage}&limit=${itemsPerPage}${selectedGender ? `&gender=${selectedGender}` : ""}${selectedCategory ? `&category=${selectedCategory}` : ""}${selectedPrice ? `&price=${selectedPrice}` : ""}`
  );

  useEffect(() => {
    setSelectedGender(gender)
  }, [gender])

  console.log(fetchedProducts);
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

  const handlePageClick = (event: { selected: number }) => {
    setActivePage(event.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDataLocalStorage("activePage", event.selected + 1);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
        <div className="flex-1 order-2 md:order-1">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="group flex items-center space-x-3 text-[10px] tracking-[0.4em] uppercase text-[#2c2c2c] hover:text-gray-500 transition-all duration-300"
          >
            <VscSettings className="text-lg rotate-90" />
            <span>Filter</span>
          </button>
        </div>

        <h1 className="text-center text-3xl tracking-[0.3em] uppercase text-[#2c2c2c] font-light order-1 md:order-2">
          All Products
        </h1>

        <div className="flex-1 order-3 text-right hidden md:block">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
            {fetchedProducts?.totalProducts || 0} Products
          </p>
        </div>
      </div>

      <Filters
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
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
          containerClassName="flex justify-center mt-32 gap-x-1 sm:gap-x-2 items-center"
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
