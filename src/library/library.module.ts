import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ExpandableIfComponent} from './expandable-if.component';

export const UI_COMPONENTS: Type<any>[] = [
  ExpandableIfComponent
];

/**
 * The Angular module that contains all exported `atlas` components and directives.
 */
@NgModule({
  declarations: UI_COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: UI_COMPONENTS
})
export class UIComponentsModule {}

