import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "../models/User.entity";

@EntityRepository(User)
@Service({ global: true })
export class UserRepository extends Repository<User> {
  async findUsers(): Promise<any> {
    const user = await getRepository(User).find({
      relations: ["company", "address", "post"],
    });
    return user;
  }
  async findUser(id: number): Promise<any> {
    const user = await getRepository(User).findOne(id, {
      relations: ["company", "address", "post"],
    });
    return user;
  }
  async findByPhone(phone: string): Promise<any> {
    const user = await getRepository(User).findOne({
      relations: ["company", "address", "post"],
      where: { phone: phone },
    });
    return user;
  }
  async saveUsers(users: any): Promise<any> {
    return await getRepository(User).save(users);
  }
}
