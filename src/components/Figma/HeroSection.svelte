<div class="hero-section">
    <span class="wilkommen-ich-bin">Wilkommen!  Ich bin</span>
    <div class="logo">
        <img class="logo-big" src="/HeroDesktop.svg" alt="Fetter Alexander Hoge Text">
        <img class="logo-small" src="/HeroMobile.svg" alt="Fetter Alexander Hoge Text">
    </div>
    <a href="#kontakt" class="kontaktieren-button">
        <span class="kontaktieren">Kontaktieren</span>
    </a>
</div>

<style>
.wilkommen-ich-bin {
    color: black;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 24px;
}

.kontaktieren {
    font-size: 18px;
    font-weight: 500;
}

.kontaktieren-button {
    width: 150px;
    height: 40px;
    background: #2D2D2D;
    border-radius: 28.50px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.hero-section {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 128px;
}

.logo {
    padding-bottom: 64px;
}

  .logo-small {
    display: none;
  }

@media (max-width: 767px) {

    .hero-section {
        padding-bottom: 24px;
    }

  .logo-small {
    display: flex;
  }
  .logo-big{
    display: none;
  }

  .logo {
    padding-bottom: 12px;
  }

  .wilkommen-ich-bin {
    font-size: 14px;
    padding-bottom: 12px;
  }

  .kontaktieren {
    font-size: 12px;
  }

  .kontaktieren-button {
    width: 110px;
    height: 30px;
  }

}

</style>