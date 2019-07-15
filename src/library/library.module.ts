import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ToolbarButtonComponent, ToolbarComponent, ToolbarSeparatorComponent} from './toolbar.component';

export const UI_COMPONENTS: Type<any>[] = [
  ToolbarButtonComponent,
  ToolbarComponent,
  ToolbarSeparatorComponent
];

/**
 * The Angular module that contains all exported `atlas` components and directives.
 */
@NgModule({
  declarations: UI_COMPONENTS,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: UI_COMPONENTS
})
export class UIComponentsModule {}

