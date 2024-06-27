// import { Controller, Get, Post, Body, UseGuards, Res } from '@nestjs/common';
// import { BlogService } from './blog.service';
// import { CreateBlogDto } from './dto/create-blog.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { Response } from 'express';
// import { join } from 'path';

// @Controller('blogs')
// export class BlogController {
//   constructor(private readonly blogService: BlogService) {}

//   @UseGuards(JwtAuthGuard)
//   @Post()
//   create(@Body() createBlogDto: CreateBlogDto) {
//     return this.blogService.create(createBlogDto);
//   }

//   @Get()
//   findAll() {
//     return this.blogService.findAll();
//   }

//   @Get()
//   getBlogPage(@Res() res: Response) {
//     res.sendFile(join(__dirname, '..', '..', 'public', 'blog.html'));
//   }
  
// }

import { Controller, Post, Body, Get, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './schemas/blog.schema';
import { join } from 'path';
import { Response } from 'express';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createBlog(@Body() createBlogDto: CreateBlogDto, @UploadedFile() file: Express.Multer.File): Promise<Blog> {
    return this.blogService.create(createBlogDto, file);
  }

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }
     @Get("blog")
   getBlogPage(@Res() res: Response) {
     res.sendFile(join(__dirname, '..', '..', 'public', 'blog.html'));
   }
}
