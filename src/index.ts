import * as JSZip from 'jszip';

export type ArchiveEntrySerialization = Serialization;

export interface ArchiveEntry extends JSZipObject {
    [key: string]: any;
}

export interface Archive extends JSZip {
    files: {[key: string]: ArchiveEntry};
    [key: string]: any;
}

export function readArchive (fileContent: Uint8Array): Promise<Archive> {
    return new JSZip().loadAsync(fileContent);
}