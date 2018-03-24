import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AppComponent],
                    imports: [BrowserModule],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
