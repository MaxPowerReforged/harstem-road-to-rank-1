import { ClientApi } from "@nuxtjs/cloudinary";

declare module "vue/types/vue" {
  interface Vue {
    $cloudinary: ClientApi;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $cloudinary: ClientApi;
  }

  interface Context {
    $cloudinary: ClientApi;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $cloudinary: ClientApi;
  }
}
