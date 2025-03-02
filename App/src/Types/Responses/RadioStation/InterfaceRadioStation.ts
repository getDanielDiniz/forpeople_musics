interface RadioStation {
  checkuuid: string; // UUID
  stationuuid: string; // UUID
  source: string; // DNS Name of the server
  codec: string; // High level name of the used codec
  bitrate: number; // Bitrate in kBit/s
  hls: number; // 1 means HLS stream, otherwise 0
  ok: number; // 1 means the stream is reachable, otherwise 0
  timestamp_iso8601: string; // Date and time of check creation in ISO 8601 format
  timestamp: string; // Date and time of check creation in YYYY-MM-DD HH:mm:ss format
  urlcache: string; // Direct stream URL after resolution
  metainfo_overrides_database: number; // 1 means override local DB with extended info
  public: number | null; // 1 means public, otherwise 0, nullable
  name: string | null; // Stream name, nullable
  description: string | null; // Stream description, nullable
  tags: string | null; // Comma-separated list of tags (genres), nullable
  countrycode: string | null; // Official country code, nullable
  countrysubdivisioncode: string | null; // Official country subdivision code, nullable
  homepage: string | null; // Homepage URL, nullable
  favicon: string | null; // Favicon URL, nullable
  loadbalancer: string | null; // Loadbalancer info, nullable
  server_software: string | null; // Server software name, nullable
  sampling: number | null; // Audio sampling frequency in Hz, nullable
  timing_ms: number; // Time taken for the check in milliseconds
  languagecodes: string | null; // Language codes, nullable
  ssl_error: number; // 1 means SSL error occurred, otherwise 0
  geo_lat: number | null; // Latitude of the stream, nullable
  geo_long: number | null; // Longitude of the stream, nullable
  state: string | null; // Full name of the entity where the station is located inside the country
}


  export default RadioStation