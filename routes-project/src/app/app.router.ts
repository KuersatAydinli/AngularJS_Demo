/**
 * Created by Aydinli on 04.03.2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {Routes, RouterModule} from "@angular/router";

export const router: Routes = [
    {path: '',redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: <any>AboutComponent},
    {path: 'services', component: <any>ServicesComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


