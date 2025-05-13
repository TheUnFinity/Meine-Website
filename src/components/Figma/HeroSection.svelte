<div class="hero-margin">
    <div class="hero-section">
        <div class="mit-willkomen">
            <div class="wilkommen-ich-bin">
                <span class="wilkommenichbin_span">Wilkommen!  Ich bin</span>
            </div>
            <div class="alexander-hoge">
                <img class="logo-big" src="./HeroDesktop.svg" alt="Fetter Alexander Hoge Text">
                <img class="logo-small" src="./HeroMobile.svg" alt="Fetter Alexander Hoge Text">
            </div>
        </div>
        <a href="#kontakt" class="frame-3">
            <div class="contact"><span class="contact_span">Kontaktieren</span></div>
        </a>
    </div>
</div>

<style>
.wilkommenichbin_span {
    color: black;
    font-size: 14px;
    font-weight: 500;
}

.wilkommen-ich-bin {
    align-self: stretch;
    text-align: center;
}

.contact_span {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
}

.contact {
    text-align: center;
}

.frame-3 {
    width: 110px;
    height: 30px;
    background: #2D2D2D;
    border-radius: 28.50px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.alexander-hoge {
    position: relative;
}

.mit-willkomen {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    display: flex;
    padding: 24px;
}

.hero-section {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.hero-margin {
    width: 100%;
    height: 100%;
    padding-bottom: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
}

.logo-big {
    display: none;
}

@media (min-width: 768px) {
  .logo-big {
    display: flex;
  }
  .logo-small {
    display: none;
  }

  .hero-margin {
    padding-bottom: 128px;
  }

  .mit-willkomen {
    padding: 48px;
  }

  .wilkommenichbin_span {
    font-size: 24px;
  }

  .contact_span {
    font-size: 18px;
  }

.frame-3 {
    width: 150px;
    height: 40px;
}

}

</style>