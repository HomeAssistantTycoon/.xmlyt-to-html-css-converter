export function parseMaterials(matNode) {
    const materials = {};

    for (const m of matNode.entries) {
        const name = m.name;
        const mat = {
            texture: null,
            forecolor: null,
            backcolor: null,
        };

        if (m.textures && m.textures.length > 0) {
            mat.texture = m.textures[0].name.replace(".tpl", ".png");
        }

        if (m.colors) {
            mat.forecolor = m.colors.forecolor || null;
            mat.backcolor = m.colors.backcolor || null;
        }

        materials[name] = mat;
    }

    return materials;
}
