<script>
    import ReadMore from './ReadMore.svelte';
    import Button from './Button.svelte';
  
    export let name;
    export let bio;
    export let profileImage;
    export let contactEmail;
    export let socialLinks;

  </script>
  
  <div class="about-me">
    <div class="profile-picture">
        <img src={profileImage} alt={name} />
    </div>
    <div class="description">
        <ReadMore height={300} text="Read">
            {@html bio}
        </ReadMore>
        <div class="social-links">
            <div>
                <Button href={"mailto:" + contactEmail}>
                    <img class="icon mail" src="/Mail.svg" alt="Mail" />
                    <span> Contact me</span>
                </Button>
            </div>
            <div class="social-buttons">
                {#each socialLinks as link}
                    <a class="social-button" aria-label={link.alt} href={link.href}>
                        <img class="icon" src={link.icon} alt={link.alt} />
                    </a>
                {/each}
            </div>
        </div>    
    </div>
  </div>
  
  <style>
    .about-me {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--light-background);
        border-radius: 0.5rem;
        padding: 1rem;
    }
  
    .social-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        padding-top: 2.5rem;
    }
  
    .profile-picture {
        width: 100%;
        height: 100%;
        aspect-ratio: 1;
        border-radius: 0.5rem;
        overflow: hidden;
    }
  
    .profile-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  
    .description {
        flex: 1;
        font-size: 1.25rem;
        color: var(--light);
        display: flex;
        flex-direction: column;
        line-height: rem;
    }
  
    .icon {
      width: 100%;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
    }
  
    .mail {
      width: 1rem;
    }
  
    .social-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: left;
    }
  
    .social-button {
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--foreground);
        width: 2.75rem;
        height: 2.75rem;
        aspect-ratio: 16/9;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        margin: 0;
        border-radius: var(--radius);

        transition: background-color 0.3s, color 0.3s, filter 0.3s ease-in-out;
    }
  
    .social-button:hover {
        filter: brightness(80%);
    }
  
    @media (min-width: 48rem) {
        .about-me {
            flex-direction: row;
        }
  
        .profile-picture {
            max-width: 20rem;
            aspect-ratio: 3 / 4;
        }
    }
  
    @media (min-width: 90rem) {
        .about-me {
            padding: 4rem;
        }
  
        .profile-picture {
            max-width: 20rem;
            aspect-ratio: 3 / 4;
        }
    }
  </style>
  