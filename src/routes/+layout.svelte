<script>
    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';
    import '../app.css';

    import { navigation } from '$lib/data.js';
    
    let { children } = $props();


</script>

<div class="app">

    <Header navItems={navigation} />

    <main>
        {@render children()}
    </main>

    <Footer />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        max-width: 90rem;
        margin: auto;
        align-content: center;
        padding: 1rem;
        padding-top: 5.5rem;
    }

</style>