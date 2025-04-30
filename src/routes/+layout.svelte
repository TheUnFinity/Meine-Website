<script>
    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';
    import '../app.css';

    import { navigation } from '$lib/data.js';
    
    let { children } = $props();


</script>

<div class="app">

    <main>
        {@render children()}
    </main>

</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-content: center;
    }

</style>