<script>
    import ProductInfo from '../../components/ProductInfo.svelte';
    import Section from '../../components/Section.svelte';
    import CarouselWithThumbs from '../../components/CarouselWithThumbs.svelte';
    import OverviewItem from '../../components/OverviewItem.svelte';
    import Details from '../../components/Details.svelte';
    import ChangeLogItem from '../../components/ChangeLogItem.svelte'

    import { products } from '$lib/data.js';
    let product = products.find(products => products.title === 'UniversalUmap');

</script>

<main class="product-page">
    <div class="product-header">
        <CarouselWithThumbs items={product.carouselMedia} />
    </div>

    <div class="product-info">
        <ProductInfo {...product} />
    </div>

    <div class="product-content">
        <Section title="Overview">
            <div class="section">
                <div class="overview-grid">
                    {#each product.overview  as item, index}
                        <OverviewItem {...item} flipped={index % 2 !== 0} />
                    {/each}
                </div>
            </div>
        </Section>

        <Section title="Details">
            <div class="section">
                <Details description={product.description} requirements={product.requirements}> </Details>
            </div>
        </Section>

        <Section title="Changelog">
            {#each product.changelog as changelog}
                <ChangeLogItem {...changelog} />
            {/each}
        </Section>
        
    </div>
</main>

<style>
    .product-page {
        display: grid;
        gap: 1rem;
        grid-template-columns: 3fr 1fr;
    }

    .product-info {
        position: sticky;
        top: 5.5rem;
    }
    
    .section {
        padding: 2rem;
        background-color: var(--light-background);
        border-radius: 0.5rem;
        
    }

    .overview-grid {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 48rem) {

        .product-page {
            display: flex;
            flex-direction: column;
        }
    
        .product-header {
            order: 1;
        }
    
        .product-info {
            position: relative;
            order: 2;
            top: 0rem;
        }
        
        .product-content {
            order: 3;
        }
    }
    </style>
    