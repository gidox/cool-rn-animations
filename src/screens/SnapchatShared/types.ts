export interface Story {
  id: string;
  source: number;
  user: string;
  avatar: number;
  video?: number;
}

export type SnapchatRoutes = {
  SnapchatShared: undefined;
  Home: undefined;
  SnapchatStory: { story: Story };
};