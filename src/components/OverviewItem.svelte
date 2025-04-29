<script>
    export let title;
    export let description;
    export let image;
    export let flipped = false;  // Added flipped prop with default value false
</script>

<div class={`overview-item ${flipped ? 'flipped' : ''}`}>
    <img src={image} alt="{title}" class="overview-image" />
    <div class="overview-text">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>

<style>
    .overview-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .overview-item.flipped {
        flex-direction: row-reverse;
    }

    .overview-text h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .overview-image {
        width: 55%;
        border-radius: 0.5rem;
    }

    @media (max-width: 48rem) {
        .overview-item {
            flex-direction: column;
        }

        .overview-item.flipped {
            flex-direction: column;
        }

        .overview-image {
            width: 100%;
        }
    }
</style>
