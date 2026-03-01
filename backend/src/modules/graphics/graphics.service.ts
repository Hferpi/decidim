import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphicsService {

    private graphics = [
        {
        id: 1,
        color: 'blue',
        type: 'barrs'
        },
        {
        id: 2,
        color: 'red',
        type: 'round'
        },

    ]

    getGraphics(){
        return this.graphics
    }
}
