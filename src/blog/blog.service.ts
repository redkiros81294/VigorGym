// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { CreateBlogDto } from './dto/create-blog.dto';
// import { Blog } from './schemas/blog.schema';

// @Injectable()
// export class BlogService {
//   constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

//   async create(createBlogDto: CreateBlogDto): Promise<Blog> {
//     const newBlog = new this.blogModel(createBlogDto);
//     return newBlog.save();
//   }

//   async findAll(): Promise<Blog[]> {
//     return this.blogModel.find().exec();
//   }
// }


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { writeFile } from 'fs/promises';
import { join } from 'path';

// Import the Multer types
import { Multer } from 'multer'; // This import ensures the types are available

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async create(createBlogDto: CreateBlogDto, file: Express.Multer.File): Promise<Blog> {
    // Define the directory where files will be saved
    const uploadDir = 'uploads';
    
    // Create a unique file name
    const fileName = `${Date.now()}-${file.originalname}`;
    
    // Construct the file path
    const filePath = join(__dirname, '..', '..', uploadDir, fileName);
    
    // Save the file
    await writeFile(filePath, file.buffer);
    
    // Create a new blog with the imageUrl field
    const newBlog = new this.blogModel({
      ...createBlogDto,
      imageUrl: `${uploadDir}/${fileName}`, // Save the file path
    });
    
    return newBlog.save();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }
}
