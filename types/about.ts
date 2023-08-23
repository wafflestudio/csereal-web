export interface Overview {
  description: string;
  imageURL: string;
  attachment: {
    name: string;
    url: string;
    bytes: number;
  };
}
