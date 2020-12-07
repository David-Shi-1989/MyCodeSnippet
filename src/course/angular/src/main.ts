import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // 应用的主模块
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode(); // 如果是生产环境,则启动enableProdMode来关闭开发者模式
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

