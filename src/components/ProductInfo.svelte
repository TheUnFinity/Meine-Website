<script>
    import Button from './Button.svelte';

    export let icon;
    export let title;
    export let text;
    export let price;
    export let buyLink;
    export let downloadLink;
    export let includes = [];  // Ensure includes is an array, defaulting to empty array if not provided

</script>

<div class="card">
    <img src={icon} alt="Icon" class="icon" />
    <h2>{title}</h2>
    <p>{text}</p>
</div>

<div class="product-info">
    <div class="price">
        <span>{price}</span>
        <a href="#" class="license-link">License terms</a>
    </div>

    <div class="buttons">
        <Button href={buyLink}>Try It Now</Button>
        <Button href={downloadLink} bgColor="var(--light)">Download</Button>
    </div>
    <div class="includes">
        <h6>What's included?</h6>
        <ul>
            {#each includes as feature}
                <li>{feature}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .product-info {
        background: var(--light-background);
        padding: 1.5rem;
        border-radius: 0.5rem;
    }

    .price {
        justify-content: left;
        align-content: center;
        align-items: center;
        display: flex;
        gap: 0.75rem;
    }

    .price span {
        font-size: 1.2rem;
    }

    .license-link {
        font-weight: 100;
        font-size: 0.9rem;
        color: var(--middle);
        text-decoration: underline;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1rem;
        justify-content: center;
        align-content: center;
    }
    
    .includes {
        margin-top: 1.25rem;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: left;
    }


    .includes li {
        font-weight: 100;
    }

    .card {
        margin-bottom: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem 3rem;
        border-radius: 0.5rem;
        overflow: hidden;
        color: var(--light);
        background-color: var(--light-background);
    }

    .icon {
        width: auto;
        height: 6rem;
        margin-bottom: 0.5rem;
        transition: transform 0.3s ease;
    }

    .card:hover .icon {
        transform: scale(1.1);
    }

    .card h2 {
        font-size: 2rem;
        font-weight: bold;
        margin: 0;

    }

    .card p {
        color: var(--middle);
        font-size: 0.8rem;
        margin: 0;
    }

    @media (max-width: 48rem) {

        .card p {
            display: none;
        }


        .icon {
            width: auto;
            height: 5rem;
        }

        
        .card {
            padding: 1.5rem 0rem;
        }

    }
</style>
