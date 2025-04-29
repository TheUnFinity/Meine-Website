<script>
    import { onMount } from 'svelte';
  
    export let items = [];
    let carousel;
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;
    let isHovered = false;
    let activeIndex = 0;
    let thumbnailContainer;
    let isOverflowing = false;
  
    onMount(() => {
      const carouselElement = document.getElementById('Carousel');
      carousel = new bootstrap.Carousel(carouselElement, {
        interval: 10000,
        touch: false,
      });
  
      carouselElement.addEventListener('slid.bs.carousel', (event) => {
      activeIndex = event.to;
    });

    carouselElement.addEventListener('slid.bs.carousel', (event) => {
      requestAnimationFrame(() => {
        scrollToActiveThumbnail();
      });
    });

      checkOverflow();
    });

    const scrollToActiveThumbnail = () => {
      if (thumbnailContainer) {
        const activeThumbnail = thumbnailContainer.querySelector('.active');
        if (activeThumbnail) {

          const containerRect = thumbnailContainer.getBoundingClientRect();
          const thumbnailRect = activeThumbnail.getBoundingClientRect();

          const offset = activeThumbnail.offsetLeft - thumbnailContainer.clientWidth;
          
          thumbnailContainer.scrollTo({ left: offset, behavior: 'smooth' });
        }
      }
    };
  
    const checkOverflow = () => {
      if (thumbnailContainer) {
        isOverflowing = thumbnailContainer.scrollWidth > thumbnailContainer.clientWidth;
      }
    };
  
    const next = () => {
      carousel?.next();
    };
  
    const prev = () => {
      carousel?.prev();
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
      deltaX > 0 ? next() : prev();
    }
  
  </script>
  
  <section>
    <div class='carousel-with-thumbs'>
      <div 
        id="Carousel" 
        class="carousel slide" 
        data-bs-ride="carousel" 
        role="region"
        aria-label="Media Carousel"
        on:touchstart={handleTouchStart} 
        on:touchmove={handleTouchMove} 
        on:touchend={handleTouchEnd}
        on:mouseenter={() => isHovered = true} 
        on:mouseleave={() => isHovered = false}
      >
        <div class="carousel-inner">
          {#each items as item, index}
            <div class="carousel-item {index === activeIndex ? 'active' : ''}">
              {#if item.type === 'video'}
                <video class="carousel-media" controls>
                  <source src={item.src} type="video/mp4" />
                </video>
              {:else}
                <img src={item.src} class="carousel-media" alt="carousel-item" />
              {/if}
            </div>
          {/each}
        </div>
  
        <button class="chevron prev {isHovered ? 'visible' : ''}" on:click={prev}>
          <img src="/ChevronLeft.svg" alt="Previous" />
        </button>
  
        <button class="chevron next {isHovered ? 'visible' : ''}" on:click={next}>
          <img src="/ChevronRight.svg" alt="Next" />
        </button>
      </div>
  
      <div class="carousel-thumbnails {isOverflowing ? 'overflowing' : ''}" bind:this={thumbnailContainer}>
        {#each items as item, index}
          <button
            type="button"
            data-bs-target="#Carousel"
            data-bs-slide-to={index}
            class={index === activeIndex ? 'active' : ''}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          >
            <img src={item.src} alt={`Thumbnail ${index + 1}`} />
          </button>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .carousel-with-thumbs {
      border-radius: 0.5rem;
      padding: 1rem;
      background-color: var(--light-background);
    }
  
    #Carousel {
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .carousel-media {
      aspect-ratio: 16 / 9;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }

    .carousel-thumbnails {
      display: flex;
      overflow-x: auto;
      margin-top: 1rem;
      padding: 0.5rem;
      gap: 0.75rem;
      justify-content: space-around;
      margin-left: 25%;
      margin-right: 25%;
      align-items: center;

      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
      transition: scrollbar-color 0.1s linear;
    }

    .carousel-thumbnails:hover,
    .carousel-thumbnails:active {
        scrollbar-color: rgb(50, 50, 50) transparent;
    }
  
    .carousel-thumbnails.overflowing {
      mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
    }
  
    .carousel-thumbnails button {
    flex-shrink: 0;
    flex: 0 0 6.5rem;
    display: flex;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    border-radius: 0.25rem;
  }

  .carousel-thumbnails button img {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 0.25rem;
  }
  
    .carousel-thumbnails .active {
      transform: scale(1.1);
      border: 2px solid var(--accent);
    }
  
    .chevron {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      padding: 0;
    }
  
    .visible {
      opacity: 1;
    }
  
    .chevron img {
      width: 3rem;
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
  