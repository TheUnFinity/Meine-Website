<script>
  export let title;
  export let id;
</script>

<section class="section" id={id}>
  <h2>{title}</h2>
    <slot></slot>
</section>

<style>
  .section {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  h2 {
    text-align: left;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }
</style>