import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
 
export const AppRoutes: any = [
    { path: "", component: Page1Component },
    { path: "page2", component: Page2Component }
];
 
export const AppComponents: any = [
    Page1Component,
    Page2Component
];