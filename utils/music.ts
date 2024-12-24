// create music interface
export interface Music {
    title: string;
    artist: string;
    releaseDate: string;
    genre: string;
  }
  
  // create music class
  export class MusicPlayer {
    private musicList: Music[] = [];
    private currentMusic: Music | null = null;
  
    constructor(musicList: Music[]) {
      this.musicList = musicList;
    }
  
    playMusic(music: Music) {
      this.currentMusic = music;
      return this.currentMusic;
    }
  
    getCurrentmusic () {
        return this.currentMusic;
    }
    
    stopMusic() {
      this.currentMusic = null;
      return this.currentMusic;
    }
  
    nextMusic() {
      if (this.currentMusic === null) {
        throw new Error("음악을 재생하고 있지 않습니다.");
      }
  
      const currentIndex = this.musicList.indexOf(this.currentMusic);
  
      if (currentIndex === this.musicList.length - 1) {
        this.currentMusic = this.musicList[0];
      } else {
        this.currentMusic = this.musicList[currentIndex + 1];
      }
      return this.currentMusic;
    }
  
    prevMusic() {
      if (this.currentMusic === null) {
        throw new Error("음악을 재생하고 있지 않습니다.");
      }
      const currentIndex = this.musicList.indexOf(this.currentMusic);
  
      if (currentIndex === 0) {
        this.currentMusic = this.musicList[this.musicList.length - 1];
      } else {
        this.currentMusic = this.musicList[currentIndex - 1];
      }
      return this.currentMusic;
    }
  
    addMusic(music: Music) {
      this.musicList.push(music);
      return this.musicList;
    }
  
    getMusicList() {
      return this.musicList;
    }
  
    getMusicByArtist(artist: string) {
      return this.musicList.find((music) => music.artist === artist);
    }
  
    // remove music from music list
    // 요구사항
    // 1. 삭제할 음악이 음악리스트에 없으면 에러를 발생시킨다.
    // 2. 음악리스트가 비어있을 때 삭제를 하면 에러를 던진다. 
    // 3.삭제할 음악이 음악 리스트에 있으면 해당 음악을 삭제하고 삭제된 음악을 리턴한다.
    removeMusic(music: Music) {
      if (this.musicList.length ===  0) {
        throw new Error("음악 리스트가 비어 있습니다.");
      }

      const found = this.musicList.find((m) => m === music);
      if( found === undefined){
        throw new Error("삭제할 음악이 음악리스트에 없습니다.");
      }
  
      const deleted = this.musicList.splice(this.musicList.indexOf(music), 1)[0];
      return deleted;
    }
  }