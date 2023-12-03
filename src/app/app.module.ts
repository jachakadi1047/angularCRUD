import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { JumpstartPlaygroundComponent } from './components/jumpstart-playground/jumpstart-playground.component';
import { JumpstartComponentsModule } from '@wk/components-angular13';
import { CardTabComponent } from './components/card-tab/card-tab.component';
import { DemoBannerComponent } from './components/demo-banner/demo-banner.component';
import { DemoSearchComponent } from './components/demo-search/demo-search.component';
import { DemoBrowseTreeComponent } from './components/demo-browse-tree/demo-browse-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    TaskListComponent,
    JumpstartPlaygroundComponent,
    CardTabComponent,
    DemoBannerComponent,
    DemoSearchComponent,
    DemoBrowseTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
    JumpstartComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
