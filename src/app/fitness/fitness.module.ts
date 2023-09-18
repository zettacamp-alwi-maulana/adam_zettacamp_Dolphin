import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessComponent } from './fitness-component/fitness-component.component'; // Import the FitnessComponent

@NgModule({
  declarations: [FitnessComponent], // Declare the FitnessComponent
  imports: [CommonModule],
  exports: [FitnessComponent] // Export the FitnessComponent for use in other modules
})
export class FitnessModule {}
