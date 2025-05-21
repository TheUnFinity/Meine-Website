<script>
    import '../app.css';
    import Navbar from '$components/Figma/Navbar.svelte';
    import Contact from '$components/Figma/Contact.svelte';

    let { children } = $props();

</script>

<div class="app">

    <Navbar />

    <main>
        {@render children()}
    </main>

    <Contact />

</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

</style>