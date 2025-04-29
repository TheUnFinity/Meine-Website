<script>
    import { marked } from 'marked';
  
    export let source;
  
    let htmlContent = '';
  
    $: {
      htmlContent = marked(source);
    }
  </script>
  
  <div>
    {@html htmlContent}
  </div>
  
<style>


</style>