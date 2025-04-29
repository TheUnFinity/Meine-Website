<script>    
  export let image;
  export let title;
  export let text;
  export let link = "";
</script>  
  
<div class="cardBig">
  <a href={link}>
  <div class="card-image">
    <img src={image} alt="" class="background-image" />
  </div>
  <div class="card-content">
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
  </a>
</div>
  
<style>
.cardBig {
  line-height: 1.25;
  position: relative;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  background-color: var(--light-background); 
  transition: transform 0.3s ease;
  overflow: hidden;
}

.card-image {
  padding-bottom: 40%;
  position: relative;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.cardBig:hover .background-image {
  transform: scale(1.1);
}

.card-content {
  text-align: left;
  padding: 1rem;
}

.card-content h2 {
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--light);
  word-wrap: break-word; 
}

.card-content p {
  color: var(--middle);
  font-size: 1rem;
  margin: 0.5rem 0;
}

@media (min-width: 48rem) {
 
  .card-content h2 {
    font-size: 2rem;
  }
}
</style>