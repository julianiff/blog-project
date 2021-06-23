import { LitElement } from 'lit';
export declare class OffsetController {
    private host;
    offsetTop?: number;
    _onScroll: () => void;
    constructor(host: LitElement);
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=offset-controller.d.ts.map