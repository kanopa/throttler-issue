import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUnlimited(): string {
    return 'Unlimited!';
  }

  getLimited(): string {
    return 'Limited!';
  }
}
