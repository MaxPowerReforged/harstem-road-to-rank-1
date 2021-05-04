import { Plugin } from "@nuxt/types";
import { YoutubeService } from "@/types/youtubeServiceClass";

declare module "vue/types/vue" {
  interface Vue {
    $youtubeService: YoutubeService;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $youtubeService: YoutubeService;
  }

  interface Context {
    $youtubeService: YoutubeService;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $youtubeService: YoutubeService;
  }
}

const youtubePlugin: Plugin = (context, inject) => {
  inject("youtubeService", new YoutubeService(context.$axios));
};

export default youtubePlugin;
