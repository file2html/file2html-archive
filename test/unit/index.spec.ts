import * as fs from 'fs';
import * as path from 'path';
import {readArchive, Archive} from '../../src/index';

describe('file2html-archive', () => {
    describe('readArchive()', () => {
        it('should open ZIP archive', () => {
            const fileBuffer: Buffer = fs.readFileSync(path.resolve(__dirname, '..', 'test.zip'));
            const fileContent: Uint8Array = new Uint8Array(fileBuffer as ArrayBuffer);

            return readArchive(fileContent).then((archive: Archive) => {
                const fileName: string = 'content.txt';

                expect(Object.keys(archive.files)).toEqual([fileName]);

                return archive.file(fileName).async('string').then((content: string) => {
                    expect(content).toBe('Hello world!');
                });
            });
        });
    });
});