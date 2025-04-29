export const projects = [
    //{
    //    image: '/UniversalUmapScreenshot.avif',
    //    title: 'UU.Rendering',
    //    text: '3D viewer written in .NET C# using DirectX 11. Supports Image Based Lighting, PBR...',
    //    link: 'https://github.com/Ka1serM/UniversalUmap.Rendering'
    //},
    {
        image: '/CpuRaytracerScreenshot.avif',
        title: 'Ray Tracer',
        text: 'Whitted-Style Ray Tracer with Global Illumination, Ambient Occlusion and Soft Shadows, written in Java...',
        link: 'https://github.com/Ka1serM/CpuRaytracer'
    },
    {
        image: '/TurnTheTide.avif',
        title: 'Turn The Tide',
        text: '3D Animation made for Team Liquids VALORANT Champions Tour Announcement...',
        link: 'https://www.behance.net/gallery/222102917/Turn-The-Tide-Liquid-Valorant'
    },
    {
        image: '/ShipZScreenshot.avif',
        title: 'ShipZ',
        text: 'Classic Battleship game implemented as a modern JavaFX desktop app with multiple difficulty levels and local multiplayer...',
        link: 'https://github.com/Ka1serM/ShipZ'
    }
];

export const technologies = [
    { icon: '/CSharp.svg', text: 'C#' },
    { icon: '/Unreal.svg', text: 'Unreal Engine' },
    { icon: '/Blender.svg', text: 'Blender' },
    { icon: '/C++.svg', text: 'C++' },
    { icon: '/Java.svg', text: 'Java' },
    { icon: '/Python.svg', text: 'Python' },
    { icon: '/Docker.svg', text: 'Docker' }
];

export const aboutMe = {
    name: "Alex",
    bio: `Hello, I'm ALEXXX`,    
    profileImage: "/AboutMe.avif",
    contactEmail: "marcelkazemi21@gmail.com",
    socialLinks: [
        {
            href: "https://github.com/Ka1serM",
            icon: "/Github.svg",
            alt: "GitHub"
        },
        {
            href: "https://linkedin.com/in/marcelkazemi",
            icon: "/LinkedIn.svg",
            alt: "LinkedIn"
        },
        {
            href: "https://discordapp.com/users/221271485183033344",
            icon: "/Discord.svg",
            alt: "Discord"
        }
    ]
};

export const navigation = [
    {
        name: 'Products', 
        link: '/#products',
        items: projects
    },
    { 
        name: 'Recent Projects',
        link: '/#recent-projects',
        items: projects
     },
    { name: 'About Me', link: '/#about-me' }
];