import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudyComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})

export class AppModule { }
