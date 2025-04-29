<script>
  import Button from './Button.svelte';

  export let icon;
  export let title;
  export let titleLong;
  export let text;
  export let link;
  export let buttonText;
  export let image;
</script>

<div class="product-card">

  <div class="product-image">
    <img src={image} alt={titleLong} />
  </div>

  <div class="product-content">
    <img src={icon} alt={titleLong} class="product-icon" />
    
    <h1 class="title">{title}</h1>
    <h1 class="title-long">{titleLong}</h1>
    
    <p>{text}</p>
    <Button href={link}>{buttonText}</Button>
  </div>
</div>

<style>
  .product-card {
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .product-content {
    padding: 3rem 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .product-icon {
    width: 7rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--light);
    line-height: normal;
    display: block;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: var(--middle);
  }

  .product-card {
    min-height: 30rem;
  }

  .product-image img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: translate(-50%, -50%);
    filter: blur(2px);
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  }

  .title {
    content-visibility: visible;
  }

  .title-long {
    content-visibility: hidden;
  }

  @media (min-width: 48rem) {
    .title {
      content-visibility: hidden;
    }

    .title-long {
      content-visibility: visible;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 48rem) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .product-card {
      min-height: 25rem;
    }
  }
</style>
