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
  
  