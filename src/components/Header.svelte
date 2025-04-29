<script>
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import Flyout from './Flyout.svelte';
  import Accordion from './Accordion.svelte';
  import { page } from '$app/stores';

  export let navItems = [];

  let isMenuOpen = writable(false);
  let mobileNavRef;
  let mobileNavItemsRef;
  let accordions = [];

  function closeMenu() {
    accordions.forEach(accordion => accordion.close()); // Close all accordions

    mobileNavRef.style.transition = 'max-height 0.7s ease-out';
    mobileNavItemsRef.style.transition = 'opacity 0.7s ease-in, transform 0.7s ease-in';

    mobileNavRef.style.maxHeight = `0`;
    mobileNavItemsRef.style.opacity = 0;
    mobileNavItemsRef.style.transform = 'translateY(-1rem)';

    isMenuOpen.set(false);
  }

  function toggleMenu(event) {
    event.stopPropagation(); // Prevent the click event from propagating to other elements
    isMenuOpen.update(open => {
      if (open) { //close
        mobileNavRef.style.transition = 'max-height 0.7s ease-out';
        mobileNavItemsRef.style.transition = 'opacity 0.7s ease-in, transform 0.7s ease-in';

        mobileNavRef.style.maxHeight = `0px`; // Collapse the menu to 0 height
        mobileNavItemsRef.style.opacity = 0;
        mobileNavItemsRef.style.transform = 'translateY(-1rem)';

        accordions.forEach(accordion => accordion.close()); //close all accordions
      } else { //open
        mobileNavRef.style.transition = 'max-height 0.7s ease-in';
        mobileNavItemsRef.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';

        mobileNavRef.style.maxHeight = `535px`; // Expand the menu to full height
        mobileNavItemsRef.style.opacity = 1;
        mobileNavItemsRef.style.transform = 'translateY(0)';
      }
      return !open;
    });
  }
</script>

<header class="header">
  <div class="content">
    <a href="/" on:click={() => closeMenu()}>
      <h1 class="logo">Marcel K.</h1>
    </a>

    <!-- Hamburger button for mobile -->
    <button class="menu-button mobile" on:click={toggleMenu} aria-label={$isMenuOpen ? "Close menu" : "Open menu"}>
      <img src={$isMenuOpen ? "/Close.svg" : "/Menu.svg"} class="menu-icon" alt="Menu Icon" />
    </button>

    <!-- Desktop navigation with flyout -->
    <nav class="nav-links desktop">
      <ul class="nav-items">
        {#each navItems as item}
          <li>
            <Flyout items={item.items}>
              <Button variant="header" href={item.link}>{item.name}</Button>
            </Flyout>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  
  <!-- Mobile navigation -->
  <nav class="mobile-nav mobile" bind:this={mobileNavRef}>
    <ul class="mobile-nav-items" bind:this={mobileNavItemsRef}>
      {#each navItems as navItem, index}
      <li>
          <Accordion
            bind:this={accordions[index]}
            title={navItem.name} 
            href={navItem.link}
            onClick={() => closeMenu()} 
            hidden={!navItem.items}
          >
            {#each navItem.items as item}
              <Button variant="header-mobile" href={item.link} onClick={() => closeMenu()}>
                {#if item.icon}
                  <img src={item.icon} alt="Icon" style="width: 1.5rem" />
                {/if}
                {item.title}
              </Button>
            {/each}
          </Accordion>
      </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .header {
    position: fixed;
    z-index: 10;
    background-color: var(--background);
    padding: 1rem;
    width: 100%;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 100);
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--light);
    align-self: center;
  }

  .menu-button {
    display: flex;
    top: 0;
    padding: 0;
    width: 2rem;
  }

  .menu-icon {
    width: 100%;
  }

  .mobile {
    display: none;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .content {
    max-width: 90rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }

  .nav-items {
    display: flex;
    gap: 1rem;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.7s ease-in-out;
  }

  .mobile-nav-items {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
    transform: translateY(-1rem); /* Start slightly above */
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  }

  @media (max-width: 48rem) {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }

  }

</style>
