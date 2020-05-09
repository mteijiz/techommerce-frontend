import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandTableComponent } from './Components/Brand/brand-table/brand-table.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/brandTable',
        pathMatch: 'full'
    },
    {
        path: 'brandTable',
        component: BrandTableComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }