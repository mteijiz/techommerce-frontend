import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandTableComponent } from './Components/Brand/brand-table/brand-table.component';
import { AddBrandComponent } from './Components/Brand/add-brand/add-brand.component';
import { UpdateBrandComponent } from './Components/Brand/update-brand/update-brand.component';
import { CategoryTableComponent } from './Components/Category/category-table/category-table.component';
import { AddCategoryComponent } from './Components/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './Components/Category/update-category/update-category.component';
import { SubcategoryTableComponent } from './Components/Subcategory/subcategory-table/subcategory-table.component';
import { AddSubcategoryComponent } from './Components/Subcategory/add-subcategory/add-subcategory.component';
import { UpdateSubcategoryComponent } from './Components/Subcategory/update-subcategory/update-subcategory.component';
import { ProductTableComponent } from './Components/Product/product-table/product-table.component';
import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { UpdateProductComponent } from './Components/Product/update-product/update-product.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';

const routes: Routes = [
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
    },
    {
        path: 'category',
        component: CategoryTableComponent
    },
    {
        path: 'category/add-category',
        component: AddCategoryComponent
    },
    {
        path: 'category/update-category',
        component: UpdateCategoryComponent
    },
    {
        path: 'subcategory',
        component: SubcategoryTableComponent
    },
    {
        path: 'subcategory/add-subcategory',
        component: AddSubcategoryComponent
    },
    {
        path: 'subcategory/update-subcategory',
        component: UpdateSubcategoryComponent
    },
    {
        path: 'product',
        component: ProductTableComponent
    },
    {
        path: 'product/add-product',
        component: AddProductComponent
    },
    {
        path: 'product/update-product',
        component: UpdateProductComponent
    },
    {
        path: 'shop',
        component: ProductListComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }