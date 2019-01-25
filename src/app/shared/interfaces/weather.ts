export interface Weather {
  pubname: string;
  town: string;
  county: string;
  image: string;
  description: string;
  lat?: number;
  lon?: number;
}
