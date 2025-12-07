import fs from "fs";
import path from "path";
import { parseMaterials } from "./materials.js";
import { renderLayout } from "./layout_renderer.js";
import { xmlToJson } from "./utils.js";

const INPUT_FILE = path.join("input", "layout.xmylt");
const OUTPUT_FILE = path.join("output", "preview.html");

function main() {
    if (!fs.existsSync(INPUT_FILE)) {
        console.error("ERROR: input/layout.xmylt not found");
        process.exit(1);
    }

    // Load and parse XML
    const xmlData = fs.readFileSync(INPUT_FILE, "utf-8");
    const json = xmlToJson(xmlData);

    const layoutNode = json.XMlyt.root.find(x => x.type === "lyt1");
    const textureNode = json.XMlyt.root.find(x => x.type === "txl1");
    const fontNode = json.XMlyt.root.find(x => x.type === "fnl1");
    const materialNode = json.XMlyt.root.find(x => x.type === "mat1");

    // Parse everything
    const materials = parseMaterials(materialNode);
    const textures = textureNode.entries;
    const font = fontNode.entries[0];

    // Convert to HTML
    const html = renderLayout({
        layout: layoutNode,
        materials,
        textures,
        font
    });

    // Write output
    fs.writeFileSync(OUTPUT_FILE, html);
    console.log("✔ HTML written to output/preview.html");
}

main();
