import { Inject, Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Address } from "../models/Address.entity";
import { AddressRepo } from "./AddressRepository";
@Service({ global: true })
export class AddressService {
  constructor(
    @InjectRepository(AddressRepo) private readonly addrRepo: AddressRepo
  ) {}

  async findById(id: string) {
    return this.addrRepo.findAddrById(id);
  }

  async findAll() {
    return this.addrRepo.findAddr();
  }

  async save(address: any) {
    return this.addrRepo.saveAddr(address);
  }
}
