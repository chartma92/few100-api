import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/game')
  getGame() {
    const num = this.appService.getRandomNumberForGame();
    return ({ secret: num });
  }
}
