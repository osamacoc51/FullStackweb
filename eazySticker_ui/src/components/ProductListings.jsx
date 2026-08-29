import React, {useState} from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./searchBox";
import DropDown from "./dropDown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({products}) {

const [searchText, setSearchText] = useState("");
const [selectedSort, setSelectedSort] = useState("Popularity");

 function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
 }

 function handleSortChange (sortType){
    setSelectedSort(sortType);
 }

 let filteredAndSorted = Array.isArray(products)
   ? products.filter(
       (product) =>
         product.name.toLowerCase().includes(searchText.toLowerCase()) ||
         product.description.toLowerCase().includes(searchText.toLowerCase()),
     )
   : [];

 switch (selectedSort) {
   case "Price Low to High":
     filteredAndSorted.sort((a, b) => parseFloat(a.price) - parseInt(b.price));
     break;
   case "Price High to Low":
     filteredAndSorted.sort((a, b) => parseFloat(b.price) - parseInt(a.price));
     break;
   case "Popularity":
   default:
     filteredAndSorted.sort(
       (a, b) => parseInt(b.popularity) - parseInt(a.popularity),
     );
     break;
 }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
                <SearchBox label="Search" placeholder="Search products..." value={searchText} handleSearch={(value)=>handleSearchChange(value)}/>
                <DropDown label="Sort By" options={sortList} value={selectedSort} handleSort={(value)=>handleSortChange(value)}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                {filteredAndSorted.length > 0 ? (
                    filteredAndSorted.map((product)=> (
                        <ProductCard key={product.productId} product={product}/>
                    ))
                ) : (
                    <p className="text-center font-primary font-bold text-lg text-primary">No products found.</p>
                )
                }
            </div>
        </div>
    )
}