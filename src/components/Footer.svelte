<footer class="footer">
  <div class="container">
    <div class="footer-text">
      <span class="affiliation-text">Not affiliated with Epic Games</span>
      <br />
      &copy; 2025, Marcel Kazemi. All rights reserved. All trademarks, logos, and brand names featured on this website are the property of their respective owners. Their use is for informational and illustrative purposes only and does not imply any affiliation, endorsement, or sponsorship.
    </div>
    <div class="footer-links">
      <a href="/Impressum">Impressum</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--light-background);
    display: flex;
	  padding: 2rem 0;
    width: 100%;
  }

  .footer-text {
    color: var(--middle);
    text-align: justify;
    user-select: none;
    font-size: 0.75rem;
  }

  .container {
    background-color: var(--light-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    gap: 2rem;
  }

  .footer-links {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    gap: 1rem;
  }

  @media (min-width: 48rem) {
    .container {
      flex-direction: column;
      align-items: flex-start;
      text-align: justify;
    }
    
    .footer-links {
      align-self: flex-start;
    }
  }
</style>