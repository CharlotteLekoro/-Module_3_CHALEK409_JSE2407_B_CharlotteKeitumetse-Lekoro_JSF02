<script>
    /**
     * The ID of the product to fetch and display.
     * @type {number}
     */
    export let productId;
  
    /** 
     * The product details fetched from the API.
     * @type {Object|null}
     * @property {number} id - The unique identifier of the product.
     * @property {string} title - The title of the product.
     * @property {string} image - The URL of the product image.
     * @property {string} description - The description of the product.
     * @property {string} category - The category of the product.
     * @property {number} price - The price of the product.
     * @property {Object} rating - The rating information for the product.
     * @property {number} rating.rate - The average rating of the product.
     * @property {number} rating.count - The number of reviews for the product.
     */
    let product = null;
  
    /** 
     * Indicates if the product details are still being loaded.
     * @type {boolean}
     */
    let loading = true;
  
    /**
     * Fetches the details of the product based on `productId` from the API.
     * Sets the `product` data and updates the `loading` state.
     */
    async function fetchProductDetails() {
      loading = true;
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      product = await response.json();
      loading = false;
    }
  
    /**
     * Reactively fetches product details when `productId` changes.
     * This runs whenever `productId` is updated.
     */
    $: if (productId) {
      fetchProductDetails();
    }
  </script>
  