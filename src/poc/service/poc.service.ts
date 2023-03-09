import { Injectable } from '@nestjs/common';
import * as compressImages from "compress-images"
import {  StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';


@Injectable()
export class PocService {
  
    message() {
        return "hello this is poc"
    }

    getFile(): StreamableFile {
        const file =  createReadStream(join(process?.cwd(), 'package.json'));
        return new StreamableFile(file);
      }
    

    async compress(image:any) {
        console.log(image,"image")
        compressImages(
            "uploads/random.png",
            "build/img/",
            { compress_force: false, statistic: true, autoupdate: true },
            false,
            { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
            { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
            { svg: { engine: "svgo", command: "--multipass" } },
            {
              gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
            },
            async function (err, completed) {
              if (completed === true) {
                // Doing something.

                // const response = await fetch(`${settings.formManagerBaseURI}/form/uploadFile`, {
                //     method: 'POST',
                //     body: fd
                // }).then(s => {
                //     return s.json();
                // }).catch(e => {
                //     console.log(e);
                // });
                const fd  = new FormData();
                var file = await this.getFile()
                console.log(file,"file")
              }
            }
        );
    return `hi dear `
    }
}   