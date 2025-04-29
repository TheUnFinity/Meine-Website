<script>
    import { writable } from 'svelte/store';
    import Button from './Button.svelte';

    export let items = [];
    let isOpen = writable(false);

    function showMenu() {
        if (items.length > 0) {
            isOpen.set(true);
        }
    }

    function hideMenu(event) {
        const container = event.currentTarget;
        const relatedTarget = event.relatedTarget;

        if (!container.contains(relatedTarget)) {
            isOpen.set(false);
        }
    }
</script>

<div class="dropdown-container" role="menu" tabindex="0" on:mouseleave={hideMenu}>
    <!-- Trigger Button -->
    <div class="dropdown-trigger" role="button" tabindex="0" on:mouseover={showMenu} on:focus={showMenu}>
        <slot></slot> <!-- Slot for trigger -->
    </div>

    <!-- Invisible Buffer to Prevent Flicker, does NOT trigger open anymore -->
    <div class="dropdown-buffer" role="presentation"></div>

    <!-- Dropdown Menu with transition -->
    <div 
        class="dropdown-menu { $isOpen ? 'open' : '' }"
        role="menu"
        aria-label="Flyout menu"
        tabindex="0"
    >
        {#each items as item}
            <Button variant="header" align="left" href={item.link}>
                {item.title}
            </Button>
        {/each}
    </div>
</div>

<style>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  cursor: pointer;
}

/* Invisible buffer to prevent flicker, no interaction */
.dropdown-buffer {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 2.5rem; /* Adjust height as needed */
  background: transparent;
  opacity: 0; /* Hidden by default */
}

/* Dropdown Menu Styling */
.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 0.5rem); /* 0.5rem gap between button and menu */
  left: 0;
  background: rgba(50, 50, 50, 0.25);
  backdrop-filter: blur(50px);
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  visibility: hidden; /* Initially hidden */
  opacity: 0; /* Initially hidden */
  transform: translateY(-10px) scale(0.95);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s 0.3s; /* Delay visibility change */
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
}

/* Ensure menu opens properly */
.dropdown-menu.open {
  visibility: visible; /* Show the dropdown */
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>