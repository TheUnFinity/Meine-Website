export const products = [
    {
        icon: '/EasyLUTLogo.avif',
        title: 'EasyLUT',
        titleLong: 'Simplify 3D LUT Importing with EasyLUT',
        text: 'Drag & Drop 3D LUT Importer for Unreal Engine.',
        price: "4.99$",
        link: '/EasyLUT',
        buttonText: 'Try It Now',
        buyLink: "https://www.fab.com/listings/609b9dc7-d28e-4924-bdae-517b0be5a66c",
        downloadLink: "https://www.fab.com/listings/609b9dc7-d28e-4924-bdae-517b0be5a66c",
        image: '/EasyLUTScreenshot.avif',
        includes: [
            "Support",
            "Regular Updates",
            "Feature Requests"
        ],
        carouselMedia: [
            { type: 'image', src: '/EasyLUTScreenshot2.avif' },
            { type: 'image', src: '/EasyLUTScreenshot3.avif' },
            { type: 'image', src: '/EasyLUTScreenshot4.avif' }
        ],
        overview: [
            {
                title: "Easy Drag & Drop",
                description: "Import .cube, .lut, and .3dl files directly into Unreal Engine with zero setup.",
                image: "/EasyLUTScreenshot2.avif"
            },
            {
                title: "High-Quality Imports",
                description: "LUTs are imported as high-resolution, high bit-depth volume textures—much better than traditional CLUT .png files.",
                image: "/EasyLUTScreenshot4.avif"
            },
            {
                title: "Batch Import Support",
                description: "Drag and drop a whole folder of LUTs at once—no need to go back and forth with Photoshop.",
                image: "/EasyLUTScreenshot3.avif"
            }
        ],
        description: `
- **Drag & Drop Support**: Quickly import .cube, .lut, and .3dl LUT files into Unreal Engine with a simple drag-and-drop workflow, no external software needed.

- **Realtime & Offline Rendering Support**: Compatible with both real time and offline rendering workflows. Unlike traditional CLUT .png files, EasyLUT imported LUTs are fully compatible with the OpenColorIO (OCIO) color pipeline.

- **High Quality**: Import LUTs as volume textures at their native resolution and the highest bit depth. This allows for much higher quality than traditional low resolution CLUT .png files.

- **Wide Compatibility**: Works with LUTs created in industry-standard software like Adobe Photoshop, DaVinci Resolve, and more.

- **Material-Based Workflow**: Leverages Unreal's powerful material system to sample LUTs, ensuring performance efficiency and maximum customization potential.

- **Post-Process Volume Integration**: Seamlessly apply LUTs through Unreal Engine's post-process volume system, giving you full control over the look of your scenes.

- **Real-Time Preview**: Instantly see the effects of your LUTs in real time, allowing for precise adjustments and rapid iteration.
        `,
        requirements: [
            { title: "Unreal Engine 5.5+" },
        ],
        changelog: [],
    },      
    {
        icon: '/UniversalUmapLogo.avif',
        title: 'UniversalUmap',
        titleLong: 'Effortless UMAP Transfers with UniversalUmap',
        text: 'Export Unreal Engine levels to Blender & Unreal — with just one click.',
        price: "8.89$",
        link: '/UniversalUmap',
        buttonText: 'Try It Now',
        buyLink: "https://www.patreon.com/UniversalUmap",
        downloadLink: "https://marcelk.dev/universalumap/api/UniversalUmap.exe",
        image: '/UniversalUmapScreenshotViewer.avif',
        includes: [
            "Regular Updates",
            "Support",
            "Discord Access",
            "Feature Requests"
        ],
        carouselMedia: [
            { type: 'image', src: '/UniversalUmapScreenshotViewer.avif' },
            { type: 'image', src: '/UniversalUmapScreenshotBlender.avif' },
            { type: 'image', src: '/UniversalUmapScreenshotSettingsPage1.avif' },
            { type: 'image', src: '/UniversalUmapScreenshotSettingsPage2.avif' },
            { type: 'image', src: '/UniversalUmapScreenshotPlugins.avif' }

        ],
        overview: [
            {
                title: "One-Click Import to Blender & Unreal Editor",
                description: "Import your maps effortlessly with a single click, streamlining the transition from your project to Blender and Unreal Editor.",
                image: "/UniversalUmapScreenshotBlender.avif"
            },
            {
                title: "Support for All Major Asset Types",
                description: "Import static and skeletal meshes, landscapes, lights, and more — UniversalUmap supports a full range of Unreal assets for accurate map exports.",
                image: "/UniversalUmapScreenshotSettingsPage2.avif"
            },
            {
                title: "Lightning-Fast Exports with Custom 3D Format",
                description: "Enjoy ultra-fast export speeds with asynchronous mesh and texture processing, and benefit from a custom 3D model format designed for peak performance.",
                image: "/UniversalUmapScreenshotViewer.avif"
            }
        ],
        description: `
- **One-Click Import** for effortless map imports to Blender and Unreal Editor.
- **3D Preview** with PBR materials and instancing, allowing you to quickly view map contents before exporting.
- **Supported Asset Types:**
  - **Static Meshes**
  - **Skeletal Meshes**
  - **Lights**
  - **Landscapes** (export as static meshes or height maps with weight maps)
  - **Generic Unreal Actors** (e.g., volumes, cameras, arrows)
- **Advanced Map Processing**: Supports sublevels, world partition, blueprint actors, templates, construction scripts, child actors, and more.
- **Very Fast Export Speeds** due to async mesh and texture export, combined with a **custom 3D model format** for maximum performance.
- **Free Updates**: Always get the latest version, with automatic in-app updates.
- **Automatic Plugin Management**: Install and update plugins with just one click.
- **All Editor Properties**: Set all Unreal editor properties for accurate imports.
- **AutoTexture & Master Material Systems**: Handle complex, game-specific material systems with ease.
- **Multiple Archive Directories Support**: Seamlessly import UEFN maps with multiple archive directories.
- **Clean UI**: A streamlined, user-friendly interface for better navigation.
- **Settings Profiles**: Save and switch between custom configurations effortlessly.
- **Tree & Flat Search/View**: Navigate files with ease using tree or flat views, plus multiple search modes.
        `,
        requirements: [
            { title: "Blender 4.0+" },
            { title: "Unreal Engine 5.5+" },
            { title: ".NET 8 Runtime", link: "https://aka.ms/dotnet/8.0/dotnet-runtime-win-x64.exe" },
            { title: "Visual C++ Redistributable", link: "https://aka.ms/vs/17/release/vc_redist.x64.exe" },
        ],
        changelog: [
            {
                title: "UniversalUmap 1.2.4",
                date: "19.03.2025",
                changes:
`
**New Games:**
- Added support for new games, including *Delta Force: Hawk Ops* and *Fortnite UEFN Maps*.

**Plugin Management (Blender & Unreal):**
- Blender and Unreal import plugins have been combined into a single addon.

**Rotations**
- Switched to **Quaternions** for exporting rotations.
    - This fixes broken rotations on some games due to **gimbal lock** or **negative scaling**.

**Blender Plugin:**
- Better conversion from Unreal to Blender light units.
- Improved import speed.
- Hashed everything to avoid name collisions.
- Better instancing.
- Added support for custom data.

**Unreal Plugin:**
- Increased import speed.
- Better Material import.
- Fixed AutoTexture bugs.
- Fixed import popup messages.
- Fixed skeletal mesh materials not applying properly.
- Fixed Unreal thread not stopping after Editor was closed.

- **Updated UEFormat model importer:**
    - Improved import speed and memory usage.
    - Improved LOD handling.
    - Added morph target support.
    - Added socket support.
    - Added virtual bone support.

**3D Viewer:**
- Viewer FPS is now locked to the monitor's refresh rate.
- Conditional rendering: The 3D Viewer only updates when the Scene changes.
- Fixed camera flipping issue.

**Export:**
- Improved exception handling: Errors when reading will now display a warning popup message.
- Mesh data exports only needed information.
- Material remapping in export.
    - Simplified importer logic & increased import speed.

**Search:**
- New **Regex search** toggle that will treat search input as a Regular Expression.
    - This adds **search blacklist** support.

**Settings:**
- Fixed loading of Versioning settings.

**Archives/Directories:**
- Added support for multiple archive directories.
    - This enables **UEFN map import** support.
`
        },
        {
            title: "UniversalUmap 1.2.3",
            date: "11.01.2025",
            changes: 
`
**- New Games:**
- Support for new games like Marvel Rivals and many more.  

**- Components:**
- More improvements in finding relevant components in the actors.  

**- Plugin Management:**  
- New tab for automatic plugin install and updates for Blender and Unreal. No more annoying manual plugin installation and updating! :smile:  

**- Blender Plugin:**  
- Fixed an issue with vector parameter values.  

**- Unreal Plugin:**
- Updated for Unreal 5.5.1.  
  - Generic Actor/Component Support.  
  - Switched to BC7 texture compression.  

**- UI:**
- Fixed lag/flicker when switching setting profiles.  
- Fixed rare File/Folder Selector crash.  
- Folder view expands on click.  
- 3D viewer stays loaded when switching tabs.  

**- Settings:**  
- Added a Versioning tab with settings for Custom Versions, Provider Options, and Map Struct Types.  
  Some games need these settings to correctly read their assets.  
- Added support for games with more than one AES Key.  
  Simply add a new entry with the Archive GUID and the associated key.  

**- 3D Viewer:**
- Added HDRI lighting & full PBR Illumination Model for accurate material previews.  
- Added an infinite grid similar to that of Blender or Unreal.  
  This will make it easier to navigate around the scene.  
- Drastically improved viewer performance and visuals:  
  - 10x FPS boost.  
  - Reduced aliasing with texture MIPs and FXAA.  
- Keybind F snaps the camera to the position of the last loaded actor.  
  You will have no problem navigating to maps that are far from the origin now.
`
        },

    ],
    },
    {
        icon: '/ValorantPortingLogo.avif',
        title: 'ValorantPorting',
        titleLong: 'Streamline Valorant Exports with ValorantPorting',
        text: 'A free tool for automating Valorant asset exporting to Blender.',
        link: 'https://github.com/Ka1serM/ValorantPorting',
        buttonText: 'Try It Now',
        image: '/ValorantPortingscreenshot.avif'
    },
    {
        icon: '/UEFormatLogo.avif',
        title: 'UEFormat',
        titleLong: 'Seamless 3D Model Interchange with UEFormat',
        text: 'Open source 3D model/animation format, supported by CUE4Parse.',
        link: 'https://github.com/h4lfheart/UEFormat',
        buttonText: 'Try It Now',
        image: '/UEFormatScreenshot.avif'
    }
];

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
    name: "Marcel",
    bio: `
<p>Hello, I'm Marcel, a computer science and media student at HSD Düsseldorf with a strong passion for 3D art and computer graphics.
I’ve been using 3D software since I was a little kid, starting with Cinema4D, and over time I’ve transitioned to using tools like Blender and Unreal Engine.
As a 3D generalist, I use whatever tools fit the task best — whether it’s Marvelous Designer for cloth simulations, DaVinci Resolve for color grading, or After Effects for compositing.
</p> <p>My interest in programming originally grew out of a need to create custom tools for my 3D projects. That led me to explore software development more seriously and learn how to connect art with code.
</p> 
<p>Right now, I'm building on that foundation through university courses and personal projects.
I’m particularly interested in rendering — both real-time and offline — and have been experimenting with ray tracing techniques.
One of my main projects, UniversalUmap, is a desktop app for exporting 3D models, complete with an integrated 3D preview.
It’s taught me a lot about the rendering pipeline and the technical side of graphics development.</p>
<p>I’m always looking to learn more and keep growing, both as an artist and as a developer.</p>

    `,    
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
        items: products
    },
    { 
        name: 'Recent Projects',
        link: '/#recent-projects',
        items: projects
     },
    { name: 'About Me', link: '/#about-me' }
];