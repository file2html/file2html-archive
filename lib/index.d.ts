/// <reference types="jszip" />
import * as JSZip from 'jszip';
export declare type ArchiveEntrySerialization = Serialization;
export interface ArchiveEntry extends JSZipObject {
    [key: string]: any;
}
export interface Archive extends JSZip {
    files: {
        [key: string]: ArchiveEntry;
    };
    [key: string]: any;
}
export declare function readArchive(fileContent: Uint8Array): Promise<Archive>;
