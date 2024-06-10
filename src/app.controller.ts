import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  @Get()
  getHomePage() {
    return 'index.html'; // Serve homepage
  }

  @Get('profile')
  getProfilePage() {
    return 'profile.html'; // Serve profile page
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
      }
    })
  }))
  uploadFile(@UploadedFile() file) {
    // Save file path in user's profile
    return { filePath: `/uploads/${file.filename}` };
  }
}
