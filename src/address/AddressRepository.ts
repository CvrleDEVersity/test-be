import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { Address } from "../models/Address.entity";

@EntityRepository(Address)
@Service({ global: true })
export class AddressRepo extends Repository<Address> {
  async findAddr(): Promise<any> {
    return getRepository(Address).find();
  }
  async saveAddr(addr: any): Promise<any> {
    return getRepository(Address).save(addr);
  }

  async findAddrById(id: string): Promise<any> {
    return getRepository(Address).findOne(id);
  }
}
