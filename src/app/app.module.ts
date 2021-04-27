import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ConfigurarJogoComponent } from './components/configurar-jogo/configurar-jogo.component';
import { JogoComponent } from './components/jogo/jogo.component';
import { FormsModule } from '@angular/forms';
import { MinuteSecondsPipe } from './pipes/MinuteSeconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MinuteSecondsPipe,
    ConfigurarJogoComponent,
    JogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
