## main.ts

1. `src\main.ts`

   和VueJs一样，Angular的启动文件也是一个`main.ts`文件，路径位于`src\main.ts`
   
   ```javascript
   import { enableProdMode } from '@angular/core';
   import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
   
   import { AppModule } from './app/app.module'; // 应用的主模块
   import { environment } from './environments/environment';
   
   if (environment.production) {
     enableProdMode(); // 如果是生产环境,则启动enableProdMode来关闭开发者模式
   }
   
   platformBrowserDynamic().bootstrapModule(AppModule)
     .catch(err => console.error(err));
   
   ```

2. `src\app\app.module.ts`

   我们再看主模块`app`

   ```typescript
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   
   import { AppComponent } from './app.component';
   
   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   
   ```

3. `app.component.ts`

   ```typescript
   import { Component } from '@angular/core';
   
   @Component({
     selector: 'app-root', // 指定根元素,见src\index.html
     templateUrl: './app.component.html', // 组件的html代码
     styleUrls: ['./app.component.css'] // 组件的css代码
   })
   export class AppComponent {
     title = 'helloWorld';
   }
   
   ```

