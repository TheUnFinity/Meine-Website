<script>
    import Markdown from './Markdown.svelte';
    import ReadMore from '../components/ReadMore.svelte';


    export let title = '';
    export let date = '';
    export let changes = '';
</script>

<div class="changelog-item">
    <div class="changelog-header">
        <h3 class="changelog-title">{title}</h3>
        <span class="changelog-date">{date}</span>
    </div>
    
    <ReadMore height=300>
        <div class="changelog-line"></div>
        <Markdown source={changes} />
    </ReadMore>

</div>

<style>
    .changelog-item {
        background: var(--light-background);
        padding: 2rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    .changelog-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding-bottom: 1rem;
    }

    .changelog-title {
        font-weight: 600;
        font-size: 1.75rem;
        margin: 0;
    }

    .changelog-date {
        font-size: 1rem;
        color: var(--gray);
    }

    .changelog-line {
        border-top: 1px solid var(--light);
        margin-bottom: 2rem;
    }

    @media (max-width: 48rem) {

        .changelog-date {
            display: none;
        }

    }

</style>
