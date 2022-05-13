import { Controller, Get } from '@nestjs/common';
import { RouterService } from './router.service';

@Controller('router')
export class RouterController {
  constructor(private readonly routerService: RouterService) {}

  @Get()
  getHello(): string {
    return this.routerService.getHello();
  }
}
