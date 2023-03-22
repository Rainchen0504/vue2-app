import Vue from "vue";
import App from "./App.vue";

// 创建子应用实例
let instance = null;
function render() {
  instance = new Vue({
    render: (h) => h(App),
  }).$mount("#app"); //这里挂在到自己的html中
}

// 动态添加到publicPath中
// if (window.__POWERED_BY_QIANKUN__) {
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }

// 默认独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 基类应用加载子应用，子应用必须暴露三个接口：bootstrap,mount,unmount

// 必须，只会在微应用初始化时调用一次
export async function bootstrap(props) {
  console.log("vue2子应用app bootstraped", props);
}

// 必须，每次进入调用mount方法
export async function mount(props) {
  console.log("vue2子应用mount", props);
  render(props);
}

// 必须，每次切出/卸载都会调用的方法，卸载应用实例
export async function unmount(props) {
  console.log("vue2子应用unmount", props);
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}

Vue.config.productionTip = false;
