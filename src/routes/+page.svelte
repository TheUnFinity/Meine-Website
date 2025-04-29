<script>
    import { onMount } from 'svelte';
    import { products, aboutMe, projects, technologies } from '$lib/data.js';
    import Card from '../components/Card.svelte';
    import CardBig from '../components/CardBig.svelte';
    import Logo from '../components/Logo.svelte';
    import Section from '../components/Section.svelte';
    import ReadMore from '../components/ReadMore.svelte';
    import AboutMe from '../components/AboutMe.svelte';
    import Carousel from '../components/Carousel.svelte';

</script>

<main>

    <Carousel {products} />

    <Section title="Products" id="products">
        <ReadMore height="350" fadeColor="background">
            <div class="cards">
                {#each products as product}
                    <Card {...product} />
                {/each}
            </div>
        </ReadMore>
    </Section>

    <Section title="About Me" id="about-me">
        <AboutMe {...aboutMe}/>
    </Section>

    <Section title="Recent Projects" id="recent-projects">
        <ReadMore height="350" fadeColor="background">
            <div class="cards-big">
                {#each projects as project}
                    <CardBig {...project} />
                {/each}
            </div>
        </ReadMore>
    </Section>

    <Section title="Technologies" id="technologies">
        <div class="logos">
            {#each technologies as tech}
                <Logo {...tech} />
            {/each}
        </div>
    </Section>

</main>

<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 1rem;
    }

    .cards-big {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 1rem;
    }

    .logos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr)); /* 150px equivalent */
        gap: 1rem;
    }
</style>
