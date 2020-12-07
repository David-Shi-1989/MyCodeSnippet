## 新建页面

继上一节，新建出login组件后，我们想让它在一个新的页面上展示。该如何做呢？

根据之前VueJs框架的经验，猜测需要做以下两件事：

1. 在主页面上定义出一个路由视图`<router-view></router-view>`。
2. 定义出一个路由表，将url为`'/login'`指向我们的login组件。

这样当访问`'/login'`时，在`<router-view></router-view>`会加载login组件。

那么，在`Angular`中应该怎么做呢？

1. 在`src\app\app.component.html`中添加路由视图，标签名为`router-outlet`，同时为了方便切换，增加了链接：

   ```html
   <!--The content below is only a placeholder and can be replaced.-->
   <div style="text-align:center">
     <h1>
       Welcome to {{ title }}!
     </h1>
   </div>
   <ul>
     <li>
       <h2><a routerLink="/">首页</a></h2>
     </li>
     <li>
       <h2><a routerLink="/login">Login</a></h2>
     </li>
   </ul>
   <router-outlet></router-outlet>
   ```

2. 新建文件`src\app\app-router.module.ts`，此文件中定义路由表：

   ```typescript
   import { NgModule } from '@angular/core'
   import { LoginComponent } from './login/login.component'
   import { Routes, RouterModule } from '@angular/router'
   
   const routes: Routes = [
     { path: 'login', component: LoginComponent}
   ]
   
   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRouterModule {}
   ```

   路由文件定义出来了，然后在`src\app\app.module.ts`中引入：

   ```typescript
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   
   import { AppComponent } from './app.component';
   import { LoginComponent } from './login/login.component';
   
   import { AppRouterModule } from './app-router.module'
   
   @NgModule({
     declarations: [
       AppComponent,
       LoginComponent
     ],
     imports: [
       BrowserModule,
       AppRouterModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

到这里，我们已经会在Angular项目中增加简单的路由了，效果如下图：

<img src="../img/angular-nr.png" style="border:1px solid #eee;margin-left:0">