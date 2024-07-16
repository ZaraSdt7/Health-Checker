import {
  CanActivate,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
@Injectable()
export class HealthGuard implements CanActivate {
  public static ishealth: boolean = true; //متغیری ست میکنیم که true or false  برگردونه
  //بصورت استاتیک ست میکنیم که تغییری ایجد نشه تو ساختار برنامه
  async canActivate(): Promise<boolean> {
    if (!HealthGuard.ishealth) {
      throw new ServiceUnavailableException('Server is unavailable');
    }
    return HealthGuard.ishealth;
  }

  static setHealthStatus(status: boolean) {
    HealthGuard.ishealth = status;
  }
}
