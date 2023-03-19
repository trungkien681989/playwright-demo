import fs from 'fs';

export async function writeJsonFIle(jsonObject: object, outputFile: string) {
    const jsonString = JSON.stringify(jsonObject);
    console.log(jsonString);
    fs.writeFile(outputFile, jsonString, err => {
        if (err) {
            console.log(err);
        }
    });
}
