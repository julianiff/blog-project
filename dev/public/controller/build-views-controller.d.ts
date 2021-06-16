import { ReactiveController, ReactiveControllerHost } from 'lit';
import { DirectiveResult } from 'lit/directive.js';
import { viewVariants } from './ressources/views';
export declare class BuildViewsController implements ReactiveController {
    host: ReactiveControllerHost;
    renderViews?: DirectiveResult;
    constructor(host: ReactiveControllerHost, viewInput?: viewVariants);
    private _updateRender;
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=build-views-controller.d.ts.map