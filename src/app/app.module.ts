import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module'; // Import the SharedModule
import { FitnessModule } from './fitness/fitness.module'; // Import the FitnessModule
import { ProgressModule } from './progress/progress.module'; // Import the ProgressModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, SharedModule, FitnessModule, ProgressModule], // Add SharedModule, FitnessModule, and ProgressModule to imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
