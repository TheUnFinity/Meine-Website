<script>
  import { onMount } from 'svelte';
  import CarouselItem from './CarouselItem.svelte';

  export let products = [];

  let carousel;
  let touchStartX = 0;
  let touchEndX = 0;
  let isSwiping = false;
  let isHovered = false;

  onMount(() => {
    const carouselElement = document.getElementById('Carousel');
    carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000,
      touch: false,
    });
  });

  const next = () => {
    if (carousel) carousel.next();
  };

  const prev = () => {
    if (carousel) carousel.prev();
  };

  function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
  }

  function handleTouchMove(event) {
    if (Math.abs(event.changedTouches[0].screenX - touchStartX) > 1) {
      isSwiping = true;
      touchEndX = event.changedTouches[0].screenX;
    }
  }

  function handleTouchEnd() {
    if (!isSwiping) return;

    isSwiping = false;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 0) next();
    else prev();
  }
</script>

<section>
  <div 
    id="Carousel" 
    class="carousel slide" 
    data-bs-ride="carousel" 
    role="region"
    aria-label="Product Carousel"
    on:touchstart={handleTouchStart} 
    on:touchmove={handleTouchMove} 
    on:touchend={handleTouchEnd}
    on:mouseenter={() => isHovered = true} 
    on:mouseleave={() => isHovered = false}
  >
    <div class="carousel-inner">
      {#each products as product, index}
        <div class="carousel-item {index === 0 ? 'active' : ''}">
          <CarouselItem {...product} />
        </div>
      {/each}
    </div>

    <button class="chevron prev {isHovered ? 'visible' : ''}" on:click={prev}>
      <img src="/ChevronLeft.svg" alt="Previous" />
    </button>

    <button class="chevron next {isHovered ? 'visible' : ''}" on:click={next}>
      <img src="/ChevronRight.svg" alt="Next" />
    </button>

    <div class="carousel-indicators">
      {#each products as _, index}
        <button
          type="button"
          data-bs-target="#Carousel"
          data-bs-slide-to={index}
          class={index === 0 ? 'active' : ''}
          aria-current={index === 0 ? 'true' : 'false'}
          aria-label={`Slide ${index + 1}`}
        ></button>
      {/each}
    </div>
  </div>
</section>

<style>
    #Carousel {
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .carousel-indicators button {
    width: 0.66rem;
    height: 0.66rem;
    border-radius: 50%;
    background-color: var(--middle);
    opacity: 1;
    border: none;
    margin: 0.25rem;    
  }

  .carousel-indicators .active {
    background-color: var(--accent);
  }

  .chevron {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .visible {
    opacity: 1;
  }

  .chevron img {
    width: 3rem;
    height: 3rem;
  }

  .prev {
    left: 1rem;
  }

  .next {
    right: 1rem;
  }
  
  @media (max-width: 48rem) {
    .chevron {
      display: none;
    }
  }
</style>