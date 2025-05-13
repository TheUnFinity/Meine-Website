<section id="kontakt">
    <div class="kontakt-all">
        <div class="kontakt-links">
            <div class="kontakt"><span class="kontakt_span">Kontakt</span></div>
            <div class="links">
                <a class="frame" href="mailto:alexander@hoge-design.com" target="_blank">
                    <div class="left-right">
                        <div class="link-text">Email</div>
                        <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                    </div>
                    <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                </a>
                <a class="frame" a href="https://www.instagram.com/alexander.hoge/" target="_blank">
                    <div class="left-right">
                        <div class="link-text">Instagram</div>
                        <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                    </div>
                    <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                </a>
                <a class="frame" href="https://www.linkedin.com/in/alexander-hoge/" target="_blank">
                    <div class="left-right">
                        <div class="link-text">Behance</div>
                        <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                    </div>
                    <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                </a>
                <a class="frame" href="https://www.linkedin.com/in/alexander-hoge-247609364/" target="_blank">
                    <div class="left-right">
                        <div class="link-text">LinkedIn</div>
                        <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                    </div>
                    <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                </a>
            </div>
        </div>
        <div class="impressum-und-co">
            <div class="impressum"><a href="#" class="impressum_span">Impressum</a></div>
            <div class="datenschutzerklrung"><a href="#" class="datenschutzerklrung_span">Datenschutzerklärung</a></div>
        </div>
    </div>
</section>

<style>
.kontakt_span {
    color: white;
    font-size: 32px;
   font-family: var(--font-body);
    font-weight: 600;
    line-height: 32px;

}

.kontakt {
    text-align: center;
    padding-bottom: 24px;
}

.arrow {
    width: 16px;
    height: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.stroke {
    outline: 1px solid #7E7E7E;
    transition: outline 0s linear;
}

.frame:hover .arrow {
    opacity: 1;
}

.frame:hover .stroke {
    outline: 2px solid #7E7E7E;
}

.link-text {
    text-decoration: none;
    transition: color 0.3s ease;

    color: white;
    font-size: 20px;
    font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;
}

.link-text {
    text-decoration: none;
    transition: color 0.3s ease;
}

.impressum_span {
    font-size: 10px;
   font-family: var(--font-body);
    font-weight: 400;
    text-decoration: underline;
    line-height: 16px;
}

.datenschutzerklrung_span {
    font-size: 10px;
   font-family: var(--font-body);
    font-weight: 400;
    text-decoration: underline;
    line-height: 16px;
}


.impressum-und-co {
    justify-content: center;
    align-items: center;
    gap: 24px;
    display: inline-flex;
}

.left-right {
    align-self: stretch;
    justify-content: space-between;
    align-items: flex-start;
    display: inline-flex;
}


.frame {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
}

.links {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
    padding-bottom: 48px;
}
 
.kontakt-links {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.kontakt-all {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 48px;
    background: linear-gradient(105deg, rgb(75, 75, 75) 0%, rgb(8, 8, 8) 75%);
}

  @media (max-width: 768px) {
    .kontakt_span {
        font-size: 24px;
        line-height: 24px;
    }

    .link-text {
        font-size: 16px;
        line-height: 16px;
    }
}

</style>