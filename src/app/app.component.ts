import * as AngularCore from '@angular/core';
import { Compiler, Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

declare var SystemJS;

interface ExternalComponentModule {
  ExternalComponent: Type<unknown>;
  ExternalModule: Type<unknown>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('viewRef', { read: ViewContainerRef }) viewRef: ViewContainerRef;

  constructor(private compiler: Compiler) { }

  ngOnInit() {
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
  }


  async loadComponentWithoutDI() {
    await this.loadComponent('external-component-without-di');
  }

  async loadComponentWithDI() {
    await this.loadComponent('external-component-with-di');
  }

  private async loadComponent(name: string) {
    const importedModule = await SystemJS.import(`assets/${name}.js`) as ExternalComponentModule;
    const compiledModule = this.compiler.compileModuleAndAllComponentsSync(importedModule.ExternalModule);
    const componentFactory = compiledModule.componentFactories[0];
    this.viewRef.createComponent(componentFactory);
  }
}
