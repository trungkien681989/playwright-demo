import fs from 'fs';

export async function writeJsonFIle(jSonObject: object, outputFile: string) {
    const jSonString = JSON.stringify(jSonObject);
    console.log(jSonString);
    fs.writeFile(outputFile, jSonString, err => {
        if (err) {
            console.log(err);
        }
    });
}
