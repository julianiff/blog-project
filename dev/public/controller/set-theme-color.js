export class ThemeColorController {
    constructor(host) {
        host.addController(this);
    }
    hostConnected() {
        var _a;
        const sessionTheme = window.sessionStorage.getItem('theme');
        if (sessionTheme) {
            (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.setAttribute('theme', sessionTheme);
        }
    }
}
//# sourceMappingURL=set-theme-color.js.map