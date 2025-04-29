<script>
    import { writable } from 'svelte/store';

    export let variant = 'primary';  // 'primary', 'header', 'header-mobile'
    export let additionalClasses = '';  // Extra classes
    export let onClick = () => {}; // Default click handler
    export let href = ''; // Optional link functionality
    export let bgColor = 'var(--accent)'; // Default background color
    export let textColor = 'var(--dark)'; // Default text color
</script>

{#if href}
    <a 
        href={href}
        on:click={onClick}
        class={`button ${variant} ${additionalClasses}`} 
        style="--button-bg: {bgColor}; --button-color: {textColor};">
        <div class="button-content">
            <slot></slot>
        </div>
    </a>
{:else}
    <button 
        class={`button ${variant} ${additionalClasses}`} 
        on:click={onClick} 
        style="--button-bg: {bgColor}; --button-color: {textColor};">
        <div class="button-content">
            <slot></slot>
        </div>
    </button>
{/if}

<style>
    .button {
        display: inline-flex;
        justify-content: center;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        background-color: var(--button-bg);
        color: var(--button-color);
        border-radius: var(--radius);
        padding: 0.5rem 1rem;
        margin: 0;

        transition: background-color 0.3s, color 0.3s, filter 0.3s ease-in-out;
    }

    .header-mobile {
        background-color: var(--light-background);
        color: var(--light);
        display: flex;
        font-weight: 100;
        font-size: 18px;       
    }

    .primary {
        background-color: var(--button-bg);
        color: var(--button-color);
    }

    .primary:hover {
        filter: brightness(80%);
    }
    .primary:hover {
        filter: brightness(80%);
    }
    .header {
        background-color: transparent;
        color: var(--light);
    }

    .header:hover {
        background-color: rgba(255, 255, 255, 0.15);
    }

    /* Dropdown specific styles */
    .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
    }

    .header-mobile .button-content {
        justify-content: flex-start;
    }
</style>
