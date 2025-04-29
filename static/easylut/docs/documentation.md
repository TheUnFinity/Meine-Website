# EasyLUT Plugin Documentation

## Introduction
### What is EasyLUT?
EasyLUT is a plugin for Unreal Engine that simplifies the process of importing and applying LUT (Color Lookup Table) files. It supports popular LUT file types, automatically converting them into Unreal-compatible textures and materials for use in post-process effects.

### Key Features:
- Drag-and-drop import of LUT files.
- Automatic creation of LUT textures and material instances.
- Seamless integration with Unreal Engine's Post Process Volume.

## Supported File Formats
- `.cube`
- `.lut`
- `.3dl`

---

## Installation
1. **Install the Plugin**
   - install it via the Unreal Engine Plugin Manager.
   - Alternatively, copy the plugin folder into your Unreal project’s `Plugins` directory.
2. **Enable the Plugin**
   - Go to **Edit > Plugins** in Unreal Engine.
   - Search for "EasyLUT" and enable it.
   - Restart the editor if prompted.

---

## How to Use EasyLUT
### 1. Importing LUT Files
1. Drag and drop a `.cube`, `.lut`, or `.3dl` file directly into the Unreal Engine Content Browser.
2. Upon import, the plugin will:
   - Create a **volume texture** from the LUT file.
   - Generate a **material instance** based on the included post-process material.

### 2. Applying the LUT
1. Add a **Post Process Volume** to your scene (if one doesn’t exist already).
2. Open the Post Process Volume’s details panel and:
   - Set the **Volume Type** to **Infinite** (if you want the LUT to apply globally).
3. Assign the generated LUT material instance to the **Blendables** section of the Post Process Volume.

---

## Customization
### Material Parameters:  
- Use the "BlendStrength" parameter in the material instance to control the intensity of the color effect. You can control this parameter from the Sequencer by using the included Material Parameter Collection (MPC).

---

## Troubleshooting
### LUT File Not Importing:
- Ensure the file is in one of the supported formats (`.cube`, `.lut`, `.3dl`).
- Check that the plugin is enabled in the **Plugins** menu.

### Post Process Material Not Working:
- Verify that the Post Process Volume has the correct material instance assigned in the **Blendables** section.

---

## Support
- [Email](marcelkazemi21@gmail.com)
- [Discord](https://discordapp.com/users/221271485183033344)
