import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LastestNewsComponent } from './lastest-news/lastest-news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [

{path : "" , component:HomeComponent},
{path : "explore" , component:ExploreComponent},
{path : "news", component:LastestNewsComponent},
{path : "work", component:WorksComponent},
{path : "contact" , component:ContactComponent},
{path : "**"  , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
