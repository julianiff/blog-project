import { ReactiveController, ReactiveControllerHost } from 'lit';
import { DirectiveResult } from 'lit/directive.js';
export declare class BuildViewsController implements ReactiveController {
    host: ReactiveControllerHost;
    renderViews: DirectiveResult;
    constructor(host: ReactiveControllerHost);
    private _updateRender;
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=build-views-controller.d.ts.map