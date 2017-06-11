"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSZip = require("jszip");
function readArchive(fileContent) {
    return new JSZip().loadAsync(fileContent);
}
exports.readArchive = readArchive;
