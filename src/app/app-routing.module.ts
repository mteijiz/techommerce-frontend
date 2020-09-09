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
import { AdminAuthGuardService } from './Service/AuthGuard/admin-auth-guard.service';
import { UserAuthGuardService } from './Service/AuthGuard/user-auth-guard.service';
import { CartComponent } from './Components/Cart shopping/cart/cart.component';
import { ProductDetailsComponent } from './Components/Product/product-details/product-details.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { ShoppingHistoryComponent } from './Components/Cart shopping/shopping-history/shopping-history.component';
import { CreditCardComponent } from './Components/Cart shopping/credit-card/credit-card.component';
import { ShoppingHistoryDetailsComponent } from './Components/Cart shopping/shopping-history-details/shopping-history-details.component';
import { ImageCardListComponent } from './Components/Product/image-card-list/image-card-list.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'brand',
        component: BrandTableComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'brand/add-brand',
        component: AddBrandComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'brand/update-brand',
        component: UpdateBrandComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'category',
        component: CategoryTableComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'category/add-category',
        component: AddCategoryComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'category/update-category',
        component: UpdateCategoryComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'subcategory',
        component: SubcategoryTableComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'subcategory/add-subcategory',
        component: AddSubcategoryComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'subcategory/update-subcategory',
        component: UpdateSubcategoryComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'product',
        component: ProductTableComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'product/add-product',
        component: AddProductComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'product/update-product',
        component: UpdateProductComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'product/update-image',
        component: ImageCardListComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'shop/all-categories',
        component: ProductListComponent
    },
    {
        path: 'shop/:id',
        component: ProductListComponent
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [UserAuthGuardService || AdminAuthGuardService]
    },
    {
        path: 'shop/:id/product-details',
        component: ProductDetailsComponent
    },
    {
        path: 'cart/buy',
        component: CreditCardComponent,
        canActivate: [UserAuthGuardService || AdminAuthGuardService]
    },
    {
        path: 'shopping-history',
        component: ShoppingHistoryComponent,
        canActivate: [UserAuthGuardService || AdminAuthGuardService]
    },
    {
        path: 'shopping-history/order-details',
        component: ShoppingHistoryDetailsComponent,
        canActivate: [UserAuthGuardService || AdminAuthGuardService]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }