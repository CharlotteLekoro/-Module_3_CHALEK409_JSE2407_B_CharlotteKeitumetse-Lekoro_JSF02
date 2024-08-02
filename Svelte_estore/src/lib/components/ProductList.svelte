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
  