import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FoobarComponent} from './foobar/foobar.component';
import {FizzService} from './services/fizz.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FoobarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FizzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
