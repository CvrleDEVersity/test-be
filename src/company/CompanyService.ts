import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CompanyRepo } from "./CompanyReposutory";
@Service({ global: true })
export class CompanyService {
  constructor(
    @InjectRepository(CompanyRepo) private readonly compRepo: CompanyRepo
  ) {}

  async findById(id: string) {
    return this.compRepo.findCompById(id);
  }

  async findAll() {
    return this.compRepo.findComp();
  }

  async save(comp: any) {
    return this.compRepo.saveComp(comp);
  }
}
