
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress-component/progress-component.component';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule],
  exports: [ProgressComponent] // Export the ProgressComponent for use in other modules
})
export class ProgressModule { }
