import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHiglightDirective } from 'src/assets/basic-hilgiht.directive';
import { BetterHiglightDirective } from '../assets/better-higlight.directive';
import { UnlessDirective } from '../assets/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHiglightDirective,
    BetterHiglightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
