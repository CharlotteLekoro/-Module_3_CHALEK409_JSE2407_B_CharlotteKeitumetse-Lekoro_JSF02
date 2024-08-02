<script>
    import { onMount } from 'svelte';
    import { Router, Route, Link } from "svelte-routing";
    import Home from './lib/components/Home.svelte';
    import ProductDetails from './lib/components/ProductDetails.svelte';
  
    export let url = "";
    
    function fetchProducts() {
    loading = true;
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        products = data;
        filteredProductsList = data;
        categories = [...new Set(data.map((product) => product.category))];
        loading = false;
      });
  }

  function goToProductDetails(productId) {
    window.location.href = `/product/${productId}`;
  }
</script>