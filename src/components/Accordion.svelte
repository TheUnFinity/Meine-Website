<script>
  import { onMount } from 'svelte';

  export let title = "";
  export let href = "";
  export let hidden = false;
  export let onClick = () => {};
  let isOpen = false;
  let contentHeight = 0;
  let contentRef;

  export function close() {
    isOpen = false;
  }

  onMount(() => {
    if (contentRef)
      contentHeight = contentRef.scrollHeight;
  });

  function toggleAccordion(event) {
    event.preventDefault(); // Prevents the default action (e.g., navigating to href)
    event.stopPropagation(); // Prevents the click from propagating to the parent `a`
    isOpen = !isOpen;
  }
</script>

<div class="accordion">
  <a 
    class="accordion-header" 
    on:click={onClick}
    href={href}
    aria-expanded={isOpen}
  >
    <div class="text">
      {title}
    </div>
    <div class="icon-wrapper" on:click={toggleAccordion} style="display: {hidden ? 'none' : 'flex'}">
      <img 
        src="/ChevronDown.svg" 
        alt="Toggle accordion" 
        class="icon {isOpen ? 'rotate' : ''}"
      />
    </div>
  </a>

  <div 
    class="accordion-content" style="height: {isOpen ? contentHeight + 'px' : '0px'}" bind:this={contentRef} >
    <div class="accordion-body {isOpen ? 'open' : ''}">
      <slot></slot>
    </div>
  </div>
</div>

<style>
  .accordion {
    border-radius: 0 0 0.5rem 0.5rem;
    overflow: hidden;
  }

  .accordion-header {
    width: 100%;
    background-color: var(--light-background);
    color: var(--light);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 0.75rem 1rem;
  }

  .text {
    font-size: 1.25rem;
  }

  .icon-wrapper {
    height: 100%;
    align-self: center;
    cursor: pointer;
    width: 1.25rem;
  }

  .icon {
    align-self: center;
    transition: transform 0.3s ease-out;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .accordion-content {
    background-color: var(--light-background);
    transition: height 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);

    border-radius: 0 0 0 0.5rem;
    overflow: hidden;
  }

  .accordion-body {
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    opacity: 0;
    transform: translateY(-10px);
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    padding-top: 0rem;
  }

  .accordion-body.open {
    opacity: 1;
    transform: translateY(0);
  }
</style>
