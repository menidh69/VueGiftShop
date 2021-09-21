import { createApp } from 'vue';
import WaveUI from 'wave-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'wave-ui/dist/wave-ui.css';

const app = createApp(App)
  .use(store)
  .use(router);

// eslint-disable-next-line no-new
new WaveUI(app, {
  primary: '#343434',
});

app.mount('#app');
