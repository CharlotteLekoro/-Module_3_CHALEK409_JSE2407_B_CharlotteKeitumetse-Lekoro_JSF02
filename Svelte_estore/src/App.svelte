<script>
    import { onMount } from 'svelte';
    import { Router, Route, Link } from "svelte-routing";
    import Home from './lib/components/Home.svelte';
    import ProductDetails from './lib/components/ProductDetails.svelte';
  
    export let url = "";