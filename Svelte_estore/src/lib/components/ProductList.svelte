<script>
    import { createEventDispatcher } from 'svelte';
  
    /**
     * @typedef {Object} Product
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
  
    /**
     * A boolean indicating whether products are currently being loaded.
     * @type {boolean}
     */
    export let loading;
  
    /**
     * The list of products after filtering and sorting.
     * @type {Array<Product>}
     */
    export let filteredProductsList;
  
    /**
     * The list of product categories.
     * @type {Array<string>}
     */
    export let categories;
  
    /**
     * The currently selected product category.
     * @type {string}
     */
    export let selectedCategory;
  
    /**
     * The current sorting order for the products (e.g., "asc", "desc").
     * @type {string}
     */
    export let sortOrder;
  
    const dispatch = createEventDispatcher();
  
    /**
     * Dispatches an event when the category selection changes.
     * @param {Event} event - The change event from the category dropdown.
     */
    function handleCategoryChange(event) {
      dispatch('categoryChange', event.target.value);
    }
  
    /**
     * Dispatches an event when the sort order changes.
     * @param {Event} event - The change event from the sort dropdown.
     */
    function handleSortChange(event) {
      dispatch('sortChange', event.target.value);
    }
  
    /**
     * Dispatches an event to reset all filters.
     */
    function handleResetFilters() {
      dispatch('resetFilters');
    }
  
    /**
     * Dispatches an event when a product is clicked.
     * @param {number} productId - The ID of the clicked product.
     */
    function handleProductClick(productId) {
      dispatch('productClick', productId);
    }
  </script>

<div class="container mx-auto px-6 py-8">
    <div class="flex justify-between items-center mb-4">
      <div>
        <label for="category" class="text-xl font-semibold mr-2 text-primary-dark">Category:</label>
        <select value={selectedCategory} on:change={handleCategoryChange} class="border rounded p-2">
          <option value="">All</option>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
      </div>
  
      <div>
        <label for="sort" class="text-xl font-semibold mr-2 text-primary-dark">Sort by price:</label>
        <select value={sortOrder} on:change={handleSortChange} class="border rounded p-2">
          <option value="">Default</option>
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>
    </div>
  
    <div>
      <button
        on:click={handleResetFilters}
        class="bg-primary-dark text-primary-light font-semibold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  </div>
  {#if loading}
    <div class="loading text-center text-2xl text-primary-accent1">
      Loading...
    </div>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each filteredProductsList as product (product.id)}
        <div
          class="card bg-primary-light shadow rounded-lg border-primary-dark p-4 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          on:click={() => handleProductClick(product.id)}
        >
          <div class="flex justify-center w-full mb-4">
            <img
              src={product.image}
              alt="Product Image"
              class="h-32 w-full object-contain mb-4"
            />
          </div>
          <h2 class="text-lg font-semibold mb-2 text-primary-dark">{product.title}</h2>
          <p class="text-gray-600 mb-2">${product.price}</p>
          <p class="text-gray-600 mb-2">{product.category}</p>
          <div class="flex items-center">
            {#each Array(5) as _, i}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
                class="w-4 h-4 ms-1 {i < Math.round(product.rating.rate) ? 'text-primary-accent2' : 'text-primary-medium'}"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
            {/each}
            <span class="ml-2 text-sm text-gray-600">{product.rating.count} reviews</span>
          </div>
        </div>
      {/each}
    </div>
  {/if}
  
  
  