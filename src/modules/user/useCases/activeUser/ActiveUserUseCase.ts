import { inject, injectable } from 'tsyringe';

import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class ActiveUserUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute(id: string): Promise<string> {
    await this.userRepository.updateUser({ id, status: 'active' });

    return 'User active';
  }
}
