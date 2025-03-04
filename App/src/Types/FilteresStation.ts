export interface FilteredStation {
  isPlaying: boolean;
  name: string;
  favicon: string | null;
  url: string;
  stationuuid: string;
  codec: string;
  country: string | null;
  countrycode: string;
  tags: string | null;
  state: string | null;
}
