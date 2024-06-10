import { Controller, Get, Post, UseInterceptors, UploadedFile , Res} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
 

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
  @Get('profile')
  getProfilePage() {
    return 'profile.html'; // Serve profile page
  }

  @Get()
  getHomePage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }

  @Get('about')
  getAboutPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'about.html'));
  }

  @Get('contact')
  getContactPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'contact.html'));
  }
  @Get('membership')
  getCMembershipPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'membership.html'));
  }
  @Get('classes')
  getClassesPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'classes.html'))
  }

  @Get('admins')
  getAdminPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'admins.html'))
  }
  @Get('blog')
  getblogPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'blog.html'))
  }
  @Get('bm-form')
  getGmembershipPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'bm-form.html'))
  }

  @Get('authenticate')
  getRegPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'login.html'))
  }
}
