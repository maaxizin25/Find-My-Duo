export interface iUserCard {
  email: string;
  id: number;
  name: string;
  password: string;
  socialMedia: string;
  url?: string;
  confirmPassword?: string;
  favoriteGames?: iFavoriteGames[];
  age?: string;
}

export interface iFavoriteGames {
  genre: string;
  img: string;
  name: string;
}
