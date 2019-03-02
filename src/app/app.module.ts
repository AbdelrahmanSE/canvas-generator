import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { EditorComponent } from './editor/editor.component';
import { RectComponent } from './editor/rect/rect.component';
import { LineComponent } from './editor/line/line.component';
import { ArcComponent } from './editor/arc/arc.component';
import { CurveComponent } from './editor/curve/curve.component';
import { TextComponent } from './editor/text/text.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    EditorComponent,
    RectComponent,
    LineComponent,
    ArcComponent,
    CurveComponent,
    TextComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
