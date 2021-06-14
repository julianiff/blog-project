import { ReactiveControllerHost } from 'lit';
export declare class MouseController {
    private host;
    pos: {
        x: number;
        y: number;
    };
    _onMouseMove: ({ clientX, clientY }: MouseEvent) => void;
    constructor(host: ReactiveControllerHost);
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=mouse-controller.d.ts.map