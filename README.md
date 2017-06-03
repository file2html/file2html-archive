# file2html-archive
> JS module for working with archives in file2html

## Usage
```js
import {readArchive} from 'file2html-archive';

/**
* {Uint8Array} fileContent
*/
readArchive(fileContent).then((archive) => {
    // archive - instance of JSZip https://stuk.github.io/jszip/documentation/api_jszip.html
});
```
