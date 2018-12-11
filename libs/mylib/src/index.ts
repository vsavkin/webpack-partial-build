import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'try-partial-bundling-child',
  template: 'child'
})
export class ChildComponent {}

@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildComponent
      }
    ])
  ]
})
export class MylibModule {}
