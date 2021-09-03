import { Inject, Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { PostsRepo } from "./PostsRepository";
@Service({ global: true })
export class PostsService {
  constructor(
    @InjectRepository(PostsRepo) private readonly postsRepo: PostsRepo
  ) {}

  async findById(id: string) {
    return this.postsRepo.findPostById(id);
  }

  async findAll() {
    return this.postsRepo.findPosts();
  }

  async save(post: any) {
    return this.postsRepo.savePosts(post);
  }
}
