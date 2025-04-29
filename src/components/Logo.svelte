<script>
    export let icon; // Path to the SVG file
    export let text = ""; // Text to show on hover
</script>

<div class="logo">
    <img src={icon} alt="icon" />
    <div class="hover-overlay">
        <span class="hover-text">{text}</span>
    </div>
</div>

<style>

.logo {
    background-color: var(--light-background);
    border-radius: 6px;

    position: relative;
    width: 100%;
    height: 100%;
    height: auto;
    aspect-ratio: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 66%;
    width: 66%;
}

.hover-overlay {

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: (0, 0, 0, 0.15);
    backdrop-filter: blur(2px);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.6s ease;
}

.hover-text {
    color: var(--middle);
    font-weight: bold;
    text-align: center;
    width: 66%;
}

.logo:hover .hover-overlay {
    opacity: 1;
}

.logo:hover img {
    filter: blur(4px) brightness(0.5);
}

</style>