import { Controller, Get } from '@nestjs/common';
import { GraphicsService } from './graphics.service';

@Controller()
export class GraphicsController {

    constructor (private graphicsServices: GraphicsService){}

    @Get('graphics')
    getAllGraphics(){
        return this.graphicsServices.getGraphics();
    }
}
