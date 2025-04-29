<script>
    import { onMount } from 'svelte';
    import { aboutMe, projects, technologies } from '$lib/data.js';
    import Card from '../components/Card.svelte';
    import CardBig from '../components/CardBig.svelte';
    import Logo from '../components/Logo.svelte';
    import Section from '../components/Section.svelte';
    import ReadMore from '../components/ReadMore.svelte';
    import AboutMe from '../components/AboutMe.svelte';
    import Carousel from '../components/Carousel.svelte';

</script>

<main>

    <Section title="About Me" id="about-me">
        <AboutMe {...aboutMe}/>
    </Section>

</main>

<style>

</style>