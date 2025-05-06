<section id="kontakt">
    <div class="kontakt-all">
        <div class="kontakt-links">
            <div class="kontakt"><span class="kontakt_span">Kontakt</span></div>
            <div class="links">
                <div class="outer">
                    <div class="frame">
                        <div class="left-right">
                            <a href="mailto:alexander@hoge-design.com" class="link-text email_span">Email</a>
                            <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                        </div>
                        <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                    </div>
                </div>
                <div class="outer">
                    <div class="frame">
                        <div class="left-right">
                            <a href="https://www.instagram.com/alexander.hoge/" target="_blank" class="link-text instagram_span">Instagram</a>
                            <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                        </div>
                        <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                    </div>
                </div>
                <div class="outer">
                    <div class="frame">
                        <div class="left-right">
                            <a href="https://www.linkedin.com/in/alexander-hoge/" target="_blank" class="link-text behance_span">Behance</a>
                            <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                        </div>
                        <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                    </div>
                </div>
                <div class="outer">
                    <div class="frame">
                        <div class="left-right">
                            <a href="https://www.linkedin.com/in/alexander-hoge-247609364/" target="_blank" class="link-text linkedin_span">LinkedIn</a>
                            <img class="arrow" src="./Arrow.svg" alt="Arrow"/>
                        </div>
                        <img class="stroke" src="./Stroke.svg" alt="Stoke"/>
                    </div>
                </div>
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
    width: 1312px;
    text-align: center;
}

.email_span {
    color: white;
    font-size: 20px;
   font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;

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
    color: white;
    transition: color 0.3s ease;
}

.link-text {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
}

.instagram_span {
    color: white;
    font-size: 20px;
   font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;

}


.behance_span {
    color: white;
    font-size: 20px;
   font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;

}


.linkedin_span {
    color: white;
    font-size: 20px;
   font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;

}

.impressum_span {
    color: white;
    font-size: 10px;
   font-family: var(--font-body);
    font-weight: 400;
    text-decoration: underline;
    line-height: 16px;
}

.impressum {
    width: 55px;
    height: 15px;
}

.datenschutzerklrung_span {
    color: white;
    font-size: 10px;
   font-family: var(--font-body);
    font-weight: 400;
    text-decoration: underline;
    line-height: 16px;
}

.datenschutzerklrung {
    width: 108px;
    height: 15px;
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
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
}

.outer {
    align-self: stretch;
    height: 26px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
}

.links {
    width: 1323px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 17px;
    display: flex;
}

.kontakt-links {
    height: 251px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.kontakt-all {
    width: 100%;
    height: 100%;
    padding-left: 57px;
    padding-right: 57px;
    padding-top: 64px;
    padding-bottom: 64px;
    background: #414141;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 52px;
    display: inline-flex; 
    background: url("/static/Background.avif") center center / cover no-repeat;
}

</style>