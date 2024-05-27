import { Controller, Get, StreamableFile, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Controller('pdf')
export class DocumentController {
  @Get('download')
  getFile(): StreamableFile {
    const filePath = join(process.cwd(), 'src/uploads/prueba.pdf');
    const file = createReadStream(filePath);

    return new StreamableFile(file);
  }
}