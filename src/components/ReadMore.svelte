<script>
  import { onMount } from 'svelte';

  export let text = "View";
  export let height = 0;
  export let fadeColor = 'light-background'; // Default color

  let isOpen = false;
  let contentWrapperRef;
  let fullHeight = 0;
  let duration = 1;

  let hide = false;

  onMount(() => {

    fullHeight = contentWrapperRef.scrollHeight;

    if (fullHeight <= height) {
      hide = true;
      return;
    }

    const heightDiff = Math.abs(fullHeight - height);
    
    const speedPerPixel = 0.0025;
    duration = Math.min(1.5, Math.max(heightDiff * speedPerPixel, 0.5));
    contentWrapperRef.style.transition = `height ${duration}s ease-in-out`;
  });

  function toggle() {
    if (isOpen) {
      contentWrapperRef.style.height = `${height}px`;
      contentWrapperRef.style.setProperty("--fade-opacity", "1");
    } else {
      contentWrapperRef.style.height = `${fullHeight}px`;
      contentWrapperRef.style.setProperty("--fade-opacity", "0");
    }

    isOpen = !isOpen;
  }
</script>

<div>
  {#if hide}
    <slot />
  {:else}

  <div bind:this={contentWrapperRef} class="content-wrapper" style="height: {height}px;">
    <slot />
      <div class="fade-overlay" style="background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--{fadeColor}) 100%);"></div>
  </div>
      <button on:click={toggle} class="view-more">
        {text} {isOpen ? ' Less' : ' More'}
        <img src="/ChevronDown.svg" alt="Chevron Down" class:rotate={isOpen} />
      </button>

  {/if}
</div>

<style>
  .view-more {
    color: var(--middle);
    display: flex;
    align-items: center;
    font-weight: 600;
    padding-top: 1rem;
    cursor: pointer;
    text-align: left;
    font-size: 1.25rem;
  }

  .content-wrapper {
    contain: content;
    will-change: height, opacity;
    overflow: hidden;
    height: 0;
    position: relative;
  }

  .fade-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    pointer-events: none;
    opacity: var(--fade-opacity, 1);
    transition: opacity 1s ease;
  }

  .view-more img {
    margin-left: 0.5rem;
    transition: transform 0.3s ease-in-out;
    width: 1.25rem;
    height: 1.25rem;
  }

  .rotate {
    transform: rotate(180deg);
  }
</style>