import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';

import { RouterModule, Routes } from '@angular/router';

// Defining routes
const routes:Routes=[
  {path: 'repository', component: RepositoryComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
