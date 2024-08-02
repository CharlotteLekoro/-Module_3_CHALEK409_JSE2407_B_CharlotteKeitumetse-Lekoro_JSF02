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
{#if loading}
  <div class="loading text-center text-2xl text-primary-accent1">
    Loading...
  </div>
{:else if product}
  <div class="container mx-auto px-6 py-8">
    <h2 class="text-2xl font-semibold text-primary-dark mb-4">{product.title}</h2>
    <div class="flex flex-col md:flex-row">
      <img
        src={product.image}
        alt={product.title}
        class="h-64 w-64 object-contain mb-4 md:mr-8"
      />
      <div>
        <p class="mb-4">{product.description}</p>
        <p class="mb-4"><strong>Category:</strong> {product.category}</p>
        <p class="mb-4 text-xl font-semibold"><strong>Price:</strong> ${product.price}</p>
        <div class="flex items-center mb-4">
          {#each Array(5) as _, i}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
              class="w-6 h-6 {i < Math.round(product.rating.rate) ? 'text-primary-accent2' : 'text-primary-medium'}"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          {/each}
          <span class="ml-2 text-sm text-gray-600">{product.rating.rate} ({product.rating.count} reviews)</span>
        </div>
        <a href="/" class="bg-primary-dark text-primary-light font-semibold py-2 px-4 rounded">
          Back to Products
        </a>
      </div>
    </div>
  </div>
{/if}

  