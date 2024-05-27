import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('pdf')
export class DocumentController {

  @Get('download')
  async downloadFile(@Res() res: Response) {
    try {
      const filePath = 'C:\Users\famil\OneDrive\Escritorio\VORTEX FULLSTACK DEV/200MB-TESTFILE.ORG.pdf';
      const fileStats = fs.statSync(filePath);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Length', fileStats.size);

      // Iniciar la transmisión del archivo
      const readStream = fs.createReadStream(filePath);
      readStream.pipe(res);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
      res.status(500).send('Error al descargar el archivo');
    }
  }
}
