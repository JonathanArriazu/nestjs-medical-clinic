import { Controller, Get, StreamableFile, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Controller('pdf')
export class DocumentController {
  @Get('download')
  getFile(): any {
    const filePath = 'C:\\Users\\famil\\OneDrive\\Escritorio\\prueba.pdf';
    const file = createReadStream(filePath);

    return new StreamableFile(file);
  }
}