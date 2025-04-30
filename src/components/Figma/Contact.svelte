<div class="kontakt-all">
    <div class="kontakt-links">
        <div class="kontakt"><span class="kontakt_span">Kontakt</span></div>
        <div class="links">
            <div class="email-frame">
                <div class="left-right">
                    <a href="mailto:example@example.com" class="link-text email_span">Email</a>
                    <div class="arrow"></div>
                </div>
            </div>
            <div class="insta">
                <div class="insta-frame">
                    <div class="left-right">
                        <a href="https://instagram.com" target="_blank" class="link-text instagram_span">Instagram</a>
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>
            <div class="behance_01">
                <div class="behance-frame">
                    <div class="left-right">
                        <a href="https://behance.net" target="_blank" class="link-text behance_span">Behance</a>
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>
            <div class="linkedin">
                <div class="linkedin-frame">
                    <div class="left-right">
                        <a href="https://linkedin.com" target="_blank" class="link-text linkedin_span">LinkedIn</a>
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="impressum-und-co">
        <div class="impressum"><a href="#" class="impressum_span">Impressum</a></div>
        <div class="datenschutzerklrung"><a href="#" class="datenschutzerklrung_span">Datenschutzerklärung</a></div>
    </div>
</div>


<style>
.kontakt_span {
    color: white;
    font-size: 32px;
   font-family: var(--font-body);
    font-weight: 600;
    line-height: 32px;
    word-wrap: break-word;
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
    word-wrap: break-word;
}

.arrow {
    width: 16px;
    height: 16px;
    outline: 2px white solid;
    outline-offset: -1px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.left-right:hover .arrow {
    opacity: 1;
}

.link-text {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
}

.link-text:hover {
    text-decoration: underline;
}.arrow {
    width: 16px;
    height: 16px;
    outline: 2px white solid;
    outline-offset: -1px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.left-right:hover .arrow {
    opacity: 1;
}

.link-text {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
}

.link-text:hover {
    text-decoration: underline;
}

.instagram_span {
    color: white;
    font-size: 20px;
   font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
}


.behance_span {
    color: white;
    font-size: 20px;
   font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
}


.linkedin_span {
    color: white;
    font-size: 20px;
   font-family: var(--font-body);
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
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


.email-frame {
    align-self: stretch;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
}

.insta-frame {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
}

.behance-frame {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
}

.linkedin-frame {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
}

.insta {
    align-self: stretch;
    height: 26px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
}

.behance_01 {
    align-self: stretch;
    height: 26px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
}

.linkedin {
    width: 1323px;
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
}
</style>