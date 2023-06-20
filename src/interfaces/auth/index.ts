export interface SNSLoginRes {
  code: string;
  data: {
    oauthId: string;
    oauthProvider: string;
  };
  message: string;
  status: number;
}
