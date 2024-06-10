import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Response } from 'express';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    create(createBlogDto: CreateBlogDto): Promise<import("./schemas/blog.schema").Blog>;
    findAll(): Promise<import("./schemas/blog.schema").Blog[]>;
    getBlogPage(res: Response): void;
}
