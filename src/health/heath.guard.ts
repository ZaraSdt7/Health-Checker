import {
  CanActivate,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
@Injectable()
export class HealthGuard implements CanActivate {
  public static ishealth: boolean = true;
  private static systemStatus: { [key: string]: boolean } = {};
  async canActivate(): Promise<boolean> {
    if (!HealthGuard.ishealth) {
      throw new ServiceUnavailableException('Server is unavailable');
    }
    return HealthGuard.ishealth;
  }

  static setHealthStatus(status: boolean) {
    HealthGuard.ishealth = status;
  }
  static setsystemStatus(status: { [key: string]: boolean }) {
    HealthGuard.systemStatus = status;
  }
  static getsystemStatus(): { [key: string]: boolean } {
    return HealthGuard.systemStatus;
  }
}

//متغیری ست میکنیم که true or false  برگردونه
//بصورت استاتیک ست میکنیم که تغییری ایجد نشه تو ساختار برنامه
//وارد گارد میشیم و اگر متغیر ما true بود میگیم
