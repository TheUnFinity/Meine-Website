<section id="about-me">
  <div class="about-me-all">
    <div class="image-div">
    <img class="bild-von-mir" src="/BildVonMir.avif" alt="Alex" />
    </div>
    <div class="content">
        <span class="aboutme-header">Über mich</span>
        <span class="aboutme-text">
          Ich heiße Alex und studiere derzeit im fünften Semester Design an der Münster School of Design. Im Laufe meines Studiums hatte ich die Möglichkeit, verschiedene kreative Bereiche zu erkunden und Einblicke in ganz unterschiedliche Aufgabenfelder zu gewinnen. Die Projekte, die ich in diesem Portfolio präsentiere, spiegeln die Themen wider, für die ich mich aktuell besonders begeistere. Gleichzeitig bin ich offen dafür, neue Themenfelder zu entdecken, mehr über alltägliche Herausforderungen zu lernen und mich allgemein als Designer weiterzuentwickeln.
        </span>
      <div class="skills">
        <span class="skills-span">Skills</span>
        <div class="skills-list">
          <div class="icon">
            <img class="icon-img" src="/Figma.svg" alt="Figma" />
            <span class="icon-span">Figma</span>
          </div>
          <div class="icon">
            <img class="icon-img" src="/Blender.svg" alt="Blender" />
            <span class="icon-span">Blender</span>
          </div>
          <div class="icon">
            <img class="icon-img" src="/Photoshop.svg" alt="Photoshop" />
            <span class="icon-span">Photoshop</span>
          </div>
          <div class="icon">
            <img class="icon-img" src="/Illustrator.svg" alt="Illustrator" />
            <span class="icon-span">Illustrator</span>
          </div>
          <div class="icon">
            <img class="icon-img" src="/AfterEffects.svg" alt="After Effects" />
            <span class="icon-span">After Effects</span>
          </div>
          <div class="icon">
            <img class="icon-img" src="/InDesign.svg" alt="InDesign" />
            <span class="icon-span">InDesign</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>

  .about-me-all {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(105deg, rgb(75, 75, 75) 0%, rgb(8, 8, 8) 100%);
    margin-bottom: 128px;
    width: 100%;
  }

  .image-div {
    overflow: hidden;
    width: 50%;
    height: 900px;
  }

  .bild-von-mir {
    overflow: hidden;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }


  .content {
    width: calc(556px - 5%);
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .aboutme-header {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    padding-bottom: 24px;
    color: white;
    text-align: center;
  }

  .aboutme-text {
    line-height: 36px;
    text-align: justify;
    color: white;
  }

  .skills {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex;
    align-items: flex;
    margin-top: 48px;
  }

  .skills-span {
    color: white;
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
    padding-bottom: 24px;
  }
.skills-list {
    width: 100%;
    display: grid;
    justify-items: center;
    justify-content: center;
    align-items: start;
    grid-template-columns: repeat(6, 1fr);
}


  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon-img {
    width: 52px;
    object-fit: fill;
    padding-bottom: 4px;
  }

  .icon-span {
    color: white;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: center;
  }

    @media (min-width: 1441px) {
        .content {
            margin: calc(5%);
        }
    }


  @media (max-width: 768px) {

    .image-div {
    width: 100%;
      height: auto;
    }

.bild-von-mir {
 transform: scale(1.8) translateY(25px);
 }


    .content {
        width: 100%;
        padding: 0 24px;
    }

  .skills-list {
    justify-content: center;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
  }

    .about-me-all {
      flex-direction: column;
      gap: 32px;
      padding-bottom: 64px;
      margin-bottom: 48px;
    }

    .aboutme-text {
    font-size: 14px;
    line-height: 24px;
  }


    .skills-span {
      font-size: 24px;
      line-height: 24px;
    }

    .aboutme-header {
      font-size: 24px;
      line-height: 24px;
    }
  }
</style>
