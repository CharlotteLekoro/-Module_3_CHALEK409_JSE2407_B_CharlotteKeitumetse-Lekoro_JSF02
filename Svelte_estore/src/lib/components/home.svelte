<script>
    export let products = [];
    export let loading = true;
    export let selectedCategory = "";
    export let sortOrder = "";
    export let filteredProductsList = [];
    export let categories = [];
    export let goToProductDetails;
  
    function filterProducts() {
      let tempProducts = products;
  
      if (selectedCategory) {
        tempProducts = tempProducts.filter(
          (product) => product.category === selectedCategory
        );
      }
  
      if (sortOrder === "asc") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
  
      filteredProductsList = tempProducts;
    }
  
    function resetFilters() {
      selectedCategory = "";
      sortOrder = "";
      filteredProductsList = products;
    }
  </script>