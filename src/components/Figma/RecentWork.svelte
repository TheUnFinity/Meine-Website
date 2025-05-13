<section id="recent-work">
  <div class="recent-work-container">
    <div class="recent-work">
      <span class="section-title">Meine Projekte</span>
      <div class="projects-overview">
        <div class="project">
          <a class="project-link" href="https://www.behance.net/gallery/224784231/Field-and-Flake-Packaging-Design-3D">
            <img class="project-image" src="./FieldAndFlake.avif" alt="FieldAndFlakes" />
          </a>
          <div class="project-title">
            <span class="project-title-main">Field and Flake</span>
            <span class="project-title-sub"> | Verpackungsdesign & 3D</span>
          </div>
        </div>

        <div class="project-row">
          <div class="project">
            <a class="project-link" href="https://www.behance.net/gallery/224783343/3D-Wallpapers-3D">
              <img class="project-image" src="./3DWallpaper.avif" alt="Wallpapers" />
            </a>
            <div class="project-title">
              <span class="project-title-main">3D Wallpapers</span>
              <span class="project-title-sub"> | 3D</span>
            </div>
          </div>

          <div class="project">
            <a class="project-link" href="https://www.behance.net/gallery/224783855/Website-for-Marcel-Kazemi-Website">
              <img class="project-image" src="./MarcelWebseite.avif" alt="Marcel K. Webseite" />
            </a>
            <div class="project-title">
              <span class="project-title-main">Webseite für Marcel Kazemi</span>
              <span class="project-title-sub"> | Webseite</span>
            </div>
          </div>
        </div>

        <div class="project-row">
          <div class="project">
            <a class="project-link" href="https://www.behance.net/gallery/224781917/Lockify-Landingpage-3D">
              <img class="project-image" src="./Lockify.avif" alt="Lockify" />
            </a>
            <div class="project-title">
              <span class="project-title-main">Lockify</span>
              <span class="project-title-sub"> | Landingpage & 3D</span>
            </div>
          </div>

          <div class="project">
            <a class="project-link" href="https://www.behance.net/gallery/224780767/Equi-Org-App-Design">
              <img class="project-image" src="./HippoFun.avif" alt="Hippo Fun" />
            </a>
            <div class="project-title">
              <span class="project-title-main">Equi Org</span>
              <span class="project-title-sub"> | App Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .recent-work-container {
    padding-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recent-work {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    text-align: center;
    padding-bottom: 24px;
    color: black;
    font-size: 32px;
    font-weight: 600;
  }

  .projects-overview {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 83rem;
    margin: auto;
    padding: 0 1.5rem;
  }

  .project-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 24px;
  }

  .project-link {
    transition: box-shadow 0.66s ease-out;
    border-radius: 16px;
    overflow: hidden;
  }

  .project-link:hover {
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.33);
  }

  .project-image {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    object-fit: cover;
  }
  
  .project-title {
    align-self: left;
    padding-top: 24px;
    font-family: var(--font-body);
    line-height: 24px;
    font-size:  24px;
    color: black;
  }

  .project-title-main {
    font-weight: 600;
        color: black;
  }

  .project-title-sub {
    font-weight: 400;
        color: black;
  }

  @media (max-width: 768px) {
    .projects-overview,
    .project-row {
      flex-direction: column;
      align-items: center;
      gap: 0px;
    }

    .section-title {
      font-size: 24px;
    }

    .project {
      width: 100%;
      height: auto;
    }

    .project-title {
      padding-top: 16px;
      font-size: 14px;
    }
  }

    @media (max-width: 1024px) {
    .project-title {
      font-size: 18px;
    }
    }
</style>
