import {   Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PocService } from '../service/poc.service';

@Controller('poc')
export class PocController {
    constructor(
        private readonly PocService : PocService
    ){}

    @Get()
    getAll() {
        return this.PocService.message()
    }
    @Post()
    @UseInterceptors(FileInterceptor("file",{storage:diskStorage({
        destination:"./uploads",
    })}))
    compressImage(@UploadedFile() file:Express.Multer.File) {
        console.log("======================")
        console.log(file)
        console.log("=======================")
        return this.PocService.compress(file)
    }
}
