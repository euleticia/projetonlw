import { getCustomRepository, Repository } from "typeorm"
import { Users } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService {
  private usersRepository: Repository<Users>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string){
    //verificar se o usuario existe

    const usuarioExistente = await this.usersRepository.findOne({
      email
    })
       
    //se existir, retornar o usuario
    if (usuarioExistente) {
      return usuarioExistente;
    }

    //se nao exixtir, salvar no banco de dados
    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

  }

}

export { UsersService }