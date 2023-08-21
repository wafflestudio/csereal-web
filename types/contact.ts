export interface ContactResponse {
  mainImage: string;
  address: string;
  location: string;
  staffUrl: string;
  fax: string;
  time: string;
  emailList: {
    name: string;
    email: string;
  }[];
}
