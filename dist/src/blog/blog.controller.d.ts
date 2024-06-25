/// <reference types="@types/multer" />
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './schemas/blog.schema';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    createBlog(createBlogDto: CreateBlogDto, file: Express.Multer.File): Promise<Blog>;
    findAll(): Promise<Blog[]>;
}
