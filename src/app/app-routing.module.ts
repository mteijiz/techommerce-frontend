import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandTableComponent } from './Components/Brand/brand-table/brand-table.component';
import { AddBrandComponent } from './Components/Brand/add-brand/add-brand.component';
import { UpdateBrandComponent } from './Components/Brand/update-brand/update-brand.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'brand',
        pathMatch: 'full'
    },
    {
        path: 'brand',
        component: BrandTableComponent
    },
    {
        path: 'brand/add-brand',
        component: AddBrandComponent
    },
    {
        path: 'brand/update-brand',
        component: UpdateBrandComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }