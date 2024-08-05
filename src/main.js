import './app.css'
import App from './App.svelte'
import { Router } from 'svelte-routing'

const app = new App({
  target: document.body,
  props: {
    url: ''
  }
})

export default app
