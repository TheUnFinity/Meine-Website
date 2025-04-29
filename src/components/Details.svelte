<script>
    import ReadMore from '../components/ReadMore.svelte';
    import Markdown from './Markdown.svelte'

    export let description;
    export let requirements;
</script>

<ReadMore height={220}>

<div class="overview-item">
    <div class="description">
        <h3>Features</h3>
            <Markdown source={description}> </Markdown>
    </div>
    <div class="seperator-line"></div>
    <div class="requirements">
        <h3>Requirements</h3>
        <ul>
            {#each requirements as { title, link }}
                <li>
                    {#if link}
                        <a href={link} target="_blank">{title}</a>
                    {:else}
                        {title}
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
</div>
</ReadMore>

<style>
    .overview-item {
        display: flex;
        flex-direction: row;
        text-align: left;
        gap: 2rem;
    }

    h3 {
        font-size: 1.25rem;
    }

    .description {
        width: 55%;
    }

    .seperator-line {
        border-right: 1px solid var(--light);
        padding: 0;
        margin: 0;
    }

    .requirements a {
        color: var(--accent);
        text-decoration: underline;
    }

    .requirements ul {
        margin: 0;
    }

    .requirements a:hover {
        text-decoration: none;
    }

    @media (max-width: 48rem) {

        .overview-item {
            flex-direction: column-reverse;
        }

        .description {
            width: 100%;
        }

        .seperator-line {
            border-right: none;
            border-bottom: 1px solid var(--light);
        }

    }
</style>
