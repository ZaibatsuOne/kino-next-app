export interface IMoviePoster {
  url: string;
}
export interface IMovieTrailers {
  trailers?: IMoviePoster[];
}
export interface IMovieDocs {
  id: number;
  name: string;
  poster: IMoviePoster;
}

export interface IMoviePreview {
  docs: IMovieDocs[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
