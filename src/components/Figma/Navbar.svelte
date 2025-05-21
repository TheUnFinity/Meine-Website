<nav class="navbar">
<a class="logo" href="/">
    <img src="/AlexLogo.svg" alt="Alex Logo" />
</a>
<div class="nav-links">
    <a class="nav-link" href="/#recent-work">Meine Projekte</a>
    <a class="nav-link" href="/#about-me">Über mich</a>
    <a class="nav-link" href="/#kontakt">Kontakt</a>
</div>
</nav>

<style>
.navbar {
    padding: 48px 48px 64px 48px;
    display: flex;
    align-items: center;
}

.logo {
  width: 64px;
  height: auto;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 64px;
}

.nav-link {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 300;
  line-height: 18px;
  color: black;
  text-align: center;
}

@media (max-width: 768px) {

  .navbar {
    padding: 24px 24px 48px 24px;
  }

  .nav-links {
    font-size: 14px;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    font-size: 14px;
  }

  .logo {
    width: 48px;
  }
}

@media (max-width: 375px) {
  .logo {
    display: none;
  }

    .navbar {
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
}

</style>
