import { YoutubeService } from "@/types/youtubeServiceClass";

export default ({ $axios }, inject) => {
  inject("youtubeService", new YoutubeService($axios));
};
