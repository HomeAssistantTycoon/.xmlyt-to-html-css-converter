export function renderLayout({ layout, materials, textures, font }) {
    const width = layout.size.width;
    const height = layout.size.height;

    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>BRLYT Preview</title>
<style>
    body {
        background: #000;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    #screen {
        width: ${width}px;
        height: ${height}px;
        background: white;
        position: relative;
        overflow: hidden;
    }
    .texture {
        position: absolute;
        image-rendering: pixelated;
    }
</style>
</head>
<body>
<div id="screen">
    <!-- This is where full pane/pic support will go later -->
    <p style="color:black; font-family:sans-serif;">
        XMlyt Layout Loaded – materials: ${Object.keys(materials).join(", ")}
    </p>
</div>
</body>
</html>`;
}
