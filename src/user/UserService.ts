import { Service } from "typedi";
import { AddressDTO } from "../dto/Address.dto";
import { CompanyDTO } from "../dto/Company.dto";
import { PostDTO } from "../dto/Posts.dto";
import { UserDTO } from "../dto/User.dto";
import { Posts } from "../models/Posts.entity";
import { AddressRepo } from "../address/AddressRepository";
import { CompanyRepo } from "../company/CompanyReposutory";
import { PostsRepo } from "../posts/PostsRepository";
import { UserRepository } from "./UserRepository";
import { AddressService } from "../address/AddressService";
import { CompanyService } from "../company/CompanyService";
import { PostsService } from "../posts/PostsService";
import { InjectRepository } from "typeorm-typedi-extensions";

@Service({ global: true })
export default class UserService {
  constructor(
    private addrService: AddressService,
    @InjectRepository(UserRepository)
    private userRepo: UserRepository,
    private companyService: CompanyService,
    private postsService: PostsService
  ) {}

  public async findAll() {
    return this.userRepo.findUsers();
  }
  public async findById(id: number) {
    return this.userRepo.findUser(id);
  }

  public async saveUsers(users: UserDTO<PostDTO, CompanyDTO, AddressDTO>[]) {
    users.forEach(async (user: UserDTO<PostDTO, CompanyDTO, AddressDTO>) => {
      await this.addrService.save(user.address);
      await this.companyService.save(user.company);
      const currentUser = await this.userRepo.saveUsers(user);
      user.post?.forEach(async (current: any) => {
        if (currentUser) {
          let post = new Posts();
          post.user = currentUser;
          post.title = current.title;
          post.body = current.body;
          await this.postsService.save(post);
        }
      });
    });
  }
}
