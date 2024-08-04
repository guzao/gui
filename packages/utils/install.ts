import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

/**
 * 全量注册
*/
export function mackInsatller(component: Plugin[]) {
  const install = (app: App) => each(component, c => app.use(c))
  return install
}


/**
 * 按需注册
*/
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};

