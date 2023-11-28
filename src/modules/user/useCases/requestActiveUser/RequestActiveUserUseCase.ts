import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { sendEmail } from '../../../../shared/utils/sendEmail';
import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class RequestActiveUserUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email);

    if (user.status === 'active') {
      throw new AppError(`User alrealy active`, 404);
    }

    await sendEmail({
      email,
      link: `${process.env.HOST}/user/activate/${user.id}`,
      name: user.name,
    });
  }
}
