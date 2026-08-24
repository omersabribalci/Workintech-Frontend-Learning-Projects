import { useState } from "react";
import { thedata } from "../../data";
import ProductList from "./ProductList";
import Dropdown from "./Dropdown";

function Products() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    const categories = ["all", ...new Set(thedata.map((item) => (item.category)))];
    
    function FilteredCategory() {
       return selectedCategory === "all" ? thedata : thedata.filter(item => selectedCategory === item.category)
    }
    

    return (
        <div>
            <Dropdown
                categories={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
            />

            <ProductList product={FilteredCategory()} />
        </div>
    )
}

export default Products;