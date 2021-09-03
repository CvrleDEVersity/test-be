import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { Company } from "../models/Company.entity";

@EntityRepository(Company)
@Service({ global: true })
export class CompanyRepo extends Repository<Company> {
  async findComp(): Promise<any> {
    return getRepository(Company).find();
  }

  async findCompById(id: string): Promise<any> {
    return getRepository(Company).findOne(id);
  }
  async saveComp(comp: any): Promise<any> {
    return getRepository(Company).save(comp);
  }
}
