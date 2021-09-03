import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { Posts } from "../models/Posts.entity";

@Service({ global: true })
@EntityRepository(Posts)
export class PostsRepo extends Repository<Posts> {
  async findPosts(): Promise<any> {
    return getRepository(Posts).find();
  }

  async findPostById(id: string): Promise<any> {
    return getRepository(Posts).findOne(id);
  }
  async savePosts(posts: any): Promise<any> {
    return getRepository(Posts).save(posts);
  }
}
