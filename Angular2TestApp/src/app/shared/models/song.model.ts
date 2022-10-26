export interface SongDatabase {
    songs: SongModel[];
}

export interface SongModel {
    id:number,
    title:string,
    artist:string,
    year:number
}