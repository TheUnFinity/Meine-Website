<script>
  import Button from './Button.svelte';

  export let icon;
  export let image;
  export let title;
  export let text;
  export let link;
  export let linkText = "Try It Now";
</script>  

<div class="card">
  <div class="card-image">
    <img src={image} alt="" class="background-image" />
    <img src={icon} alt="Icon" class="icon" />
  </div>
  <div class="card-content">
    <h2>{title}</h2>
    <p>{text}</p>
    <Button href={link}>{linkText}</Button>
  </div>
</div>

<style>

.card {
  line-height: 1.25;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: var(--light-background);
  transition: transform 0.3s ease;
}

.card-image {
  padding-bottom: 40%;
  position: relative;
  overflow: hidden;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  transition: transform 0.3s ease;
}

.card:hover .icon {
  transform: translate(-50%, -50%) scale(1.2);
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px) brightness(0.85);
}

.card-content {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 1rem;
}

.card-content h2 {
  font-size: 2rem;
  font-weight: bold;
  color: var(--light);
}

.card-content p {
  color: var(--middle);
  max-width: 85%;
}

</style>
