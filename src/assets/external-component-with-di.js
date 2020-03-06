var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
   var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
   if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
   else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
   return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
   if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
   "use strict";
   Object.defineProperty(exports, "__esModule", { value: true });
   var TitleService = /** @class */ (function () {
      function TitleService() {
      }
      TitleService.prototype.getTitle = function () {
         return "TitleServiceTitle";
      };
      TitleService = __decorate([
         core_1.Injectable()
      ], TitleService);
      return TitleService;
   }());
   exports.TitleService = TitleService;
   var ExternalComponent = /** @class */ (function () {
      function ExternalComponent(titleService) {
         this.titleService = titleService;
      }
      ExternalComponent = __decorate([
         core_1.Component({
            template: "\n\t\t<p>Component <strong>with</strong> dependency injection</p>\n\t",
            providers: [
               TitleService,
            ]
         }),
         __metadata("design:paramtypes", [TitleService])
      ], ExternalComponent);
      return ExternalComponent;
   }());
   exports.ExternalComponent = ExternalComponent;
   var ExternalModule = /** @class */ (function () {
      function ExternalModule() {
      }
      ExternalModule = __decorate([
         core_1.NgModule({
            declarations: [ExternalComponent],
            entryComponents: [ExternalComponent],
         })
      ], ExternalModule);
      return ExternalModule;
   }());
   exports.ExternalModule = ExternalModule;
});
