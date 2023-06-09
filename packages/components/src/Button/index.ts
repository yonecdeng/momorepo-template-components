import Button from './Button.vue';
import { App } from 'vue';

// 导出Button组件
export { Button };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  }
};
