import xml2js from "xml2js";

export function xmlToJson(xml) {
    let json;
    xml2js.parseString(xml, { explicitArray: false }, (err, result) => {
        if (err) throw err;
        json = result;
    });

    return json;
}
