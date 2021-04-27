import { NuxtAxiosInstance } from "@nuxtjs/axios";

export class YoutubeService {
  axios: NuxtAxiosInstance;
  roadRankOnePlaylistId: string = "PLbVNzAA7sXzDbrxTpRDs-cF05yJgW0NRC";
  resultsPerPage: number = 50;
  apiKey: string = "AIzaSyB4yQuwLMDsMwHBGsI5BqFiI8xQ2s-M41U";
  harstemChannelId: string = "UCCRdB9rqzP2m7bPYb5drH_Q";
  harstemCastsChannelId: string = "UCmwOm-YjCmcddE9xe9sEpUg";

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios;
  }

  async getLastYoutubeVideoFromPlaylist(
    playlistId: string = this.roadRankOnePlaylistId
  ) {
    const result = await this.initialCall(playlistId);
    if (result.nextPageToken === undefined)
      return this.getLatestItemFromResult(result.items);
    else {
      const result2 = await this.followingCalls(
        result.nextPageToken,
        playlistId
      );
      return this.getLatestItemFromResult(result2.items);
    }
  }

  async initialCall(playlistId: string = this.roadRankOnePlaylistId) {
    const response = await this.axios.$get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "id, snippet",
          maxResults: this.resultsPerPage,
          playlistId: playlistId,
          key: this.apiKey
        }
      }
    );
    const result = {
      nextPageToken: response.nextPageToken,
      totalResults: response.pageInfo.totalResults,
      items: response.items
    };
    return result;
  }

  async followingCalls(
    nextPageToken: string,
    playlistId: string = this.roadRankOnePlaylistId
  ) {
    const response = await this.axios.$get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "id, snippet",
          maxResults: this.resultsPerPage,
          playlistId: playlistId,
          key: this.apiKey,
          pageToken: nextPageToken
        }
      }
    );
    const result = {
      nextPageToken: response.nextPageToken,
      totalResults: response.pageInfo.totalResults,
      items: response.items
    };
    return result;
  }

  getLatestItemFromResult(items: any[]) {
    return items[items.length - 1].snippet.resourceId.videoId;
  }
}
