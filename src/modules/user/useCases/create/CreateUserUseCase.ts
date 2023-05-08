import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { User } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';
import { encrypt } from '@shared/utils/encrypt';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRespository: IUserRepository,
  ) {}

  async execute({
    addressId,
    email,
    lastName,
    name,
    password,
    status,
    type,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExist = await this.userRespository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError('User already exists', 409);
    }

    const encryptedPassword = encrypt(password);

    const user = await this.userRespository.createUser({
      addressId,
      email,
      lastName,
      name,
      password: encryptedPassword,
      status,
      type,
    });

    return user;
  }
}
