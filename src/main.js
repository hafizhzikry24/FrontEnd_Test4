
import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { provideApollo } from './apollo';

const app = createApp({
  setup() {
    provideApollo();
  },
  render: () => h(App),
});

app.use(router);
app.use(createPinia());
app.mount('#app');
