import { MusicPlayer, Music } from "./music"

describe("music player 클래스 테스트", ()=> {
    //중복성을 없앨려고 위로 공유자원으로 올렸지만 테스트는 한번에 한나씩만 해야되고 종속성이 없어야됨 
    let musicPlayer = new MusicPlayer([]);
    const music: Music = {
        artist: "뉴진스",
        genre: "팝",
        releaseDate: "2023-01-01",
        title: "hype boy",
    };
    //그래서 밑과 같은 코드를 써주는 것것
    //BeforeEach, AfterEach, BeforeAll, AfterAll
    beforeEach(() =>{
        //공유자원, 중복코드, 인스턴스스 등 초기화
    musicPlayer = new MusicPlayer([]);
    });

    it ("음악을 추가하면 음악 리스트에 추가된다", () =>{
        //Arrange

        const output = [music];

        //Act 음악을 추가해봄봄
        const actual = musicPlayer.addMusic(music);
        //toBe가 아니라 toEqual를 사용해야됨
        // toBe는 객체의 주소값을 비교하기 때문
        //toBe는 원시값 비교
        //toEqual 객체, 배열 비교
        //toBe, toEqual, toThrow => matcher;

        //다같은 테스트 코드 사람 성향이나 특이사항마다 다르게 하는것것
        expect(actual).toEqual(output);
        expect(actual).toHaveLength(1);
        expect(actual).not.toEqual([]);
        expect(actual).not.toHaveLength(0);
        expect(actual).toContain(music);
    });

    it("음악을 넣지않고 getMusicList를 하면 빈 음악 리스트를 반환한다.", () =>{
        //Arrange
    const output = [music];
    musicPlayer.addMusic(music);

    //act
    const actual = musicPlayer.getMusicList();

    //arrert 
    //[newMusic, newMusic]
    expect(actual).toEqual(output);  
})
    it("addMusic을 호출하지 않고 getMusicList를 호출하면 빈 배열을 반환한다.", () =>{
        const actual = musicPlayer.getMusicList();
        expect(actual).toEqual([]);
    })

    it("음악을 추가하고 아티스트로 검색할 수 있다.", ()=>{
        musicPlayer.addMusic(music);
        
        const actual = musicPlayer.getMusicByArtist(music.artist);

        expect(actual).toEqual(music);
    })
    it("음악을 추가하지 않고 아티스트로 검사를 할 수 없다.", () => {
        const actual = musicPlayer.getMusicByArtist(music.artist);

        expect(actual).toBeUndefined();

    })
    it(" playMusic을 호출하면 현재 음악이 바뀐다." , () => {
        musicPlayer.playMusic(music);
        const actual = musicPlayer.playMusic(music);
        expect(actual).toEqual(music);

    });
    it ("음악을 재생하지 않고 현재 음악을 호출하면 null 이 반환된다.", () => {
        const actual = musicPlayer.getCurrentmusic();
        expect(actual).toBeNull();
    });
    it("음악을 재생하면 음악 리스트에 추가가 된다.", () => {
        const actual = musicPlayer.playMusic(music);
        expect(actual).toEqual(music)
    });
   // it("음악이 재생중이 아닐때 nextMusic을 호출하면 에러가 발생한다.", () => {
        // try{
        //     const actual = musicPlayer.nextMusic();
        //     done("에러가 발생하지 않았습니다. ")
        // }catch (error) {
        //     expect(error).toBeInstanceOf(Error);
        //     expect(error.message).toBe("음악을 재생하고 잇지 않습니다. ");
        // done();
        // }
  //  });
  it("음악을 재생하면 현재 음악을 리턴한다.", () => {
    // arrange

    const actual = musicPlayer.playMusic(music);

    expect(actual).toEqual(music);
  });

  it("음악을 재생하다가 멈추면 null이 리턴됩니다.", () => {
    // arrange
    musicPlayer.playMusic(music);

    // act
    const actual = musicPlayer.stopMusic();

    // assert
    expect(actual).toBeNull();
  });

  it("음악이 재생중이 않을때 nextMusic을 호출하면 에러가 발생한다", () => {
    // arrange

    expect(() => musicPlayer.nextMusic()).toThrow();
  });
  it("nextMusic을 호출하면 다음 음악이 재생된다", () => {
    // arrange
    const firstMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "첫번째 음악",
    };

    const secondMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "두번째 음악",
    };

    const thirdMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "세번째 음악",
    };
    // musicList 음악추가 ( 초기화 ) [firstMusic,secondMusic,thirdMusic]
    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);
    // 첫번째 음악 재생  currentMusic = firstMusic
    musicPlayer.playMusic(firstMusic);

    // act
    const actual = musicPlayer.nextMusic();

    // assert
    expect(actual).toEqual(secondMusic);
  });

    it("마지막 음악을 재생중일때 nextMusic을 호출하면 첫번째 음악이 재생된다", () => {
        const firstMusic: Music = {
            artist: "뉴진스",
            genre: "팝",
            releaseDate: "2023-01-01",
            title: "첫번째 음악",   
        };
        const secondMusic: Music = {
            artist: "뉴진스",
            genre: "팝",
            releaseDate: "2023-01-01",
            title: "2번째 음악",   
        };
        const thirdMusic: Music = {
            artist: "뉴진스",
            genre: "팝",
            releaseDate: "2023-01-01",
            title: "3번째 음악",   
        };
        
        musicPlayer.addMusic(firstMusic);
        musicPlayer.addMusic(secondMusic);
        musicPlayer.addMusic(thirdMusic);

        musicPlayer.playMusic(thirdMusic);

        // 여기까ㅣ 어레인지
        //act
        const actual = musicPlayer.nextMusic();

        //assert
        expect(actual).toEqual(firstMusic);
    });


    it("음악이 재생중이 아닐때 prevMusic을 호출하면 에러가 발생한다", () => {
        expect(() => musicPlayer.prevMusic()).toThrow();
      });
      
    it("prevMusic을 호출하면 이전 음악이 재생된다", () => {
        // arrange
        const firstMusic: Music = {
          artist: "뉴진스",
          genre: "팝",
          releaseDate: "2023-01-01",
          title: "첫번째 음악",
        };
      
        const secondMusic: Music = {
          artist: "뉴진스",
          genre: "팝",
          releaseDate: "2023-01-01",
          title: "두번째 음악",
        };
      
        const thirdMusic: Music = {
          artist: "뉴진스",
          genre: "팝",
          releaseDate: "2023-01-01",
          title: "세번째 음악",
        };
      
        musicPlayer.addMusic(firstMusic);
        musicPlayer.addMusic(secondMusic);
        musicPlayer.addMusic(thirdMusic);
        // 두번째 음악 재생
        musicPlayer.playMusic(secondMusic);
      
        // act
        const actual = musicPlayer.prevMusic();
      
        // assert c첫번쨰 나옴
        expect(actual).toEqual(firstMusic);
      });
      
      it("첫번째 음악을 재생중일때 prevMusic을 호출하면 마지막 음악이 재생된다", () => {
        const firstMusic: Music = {
          artist: "뉴진스",
          genre: "팝",
          releaseDate: "2023-01-01",
          title: "첫번째 음악",   
        };
        const secondMusic: Music = {
          artist: "뉴진스",
          genre: "팝",
          releaseDate: "2023-01-01",
          title: "두번째 음악",   
        };
        const thirdMusic: Music = {
          artist: "뉴진스",
          genre: "팝",
          releaseDate: "2023-01-01",
          title: "세번째 음악",   
        };
        
        musicPlayer.addMusic(firstMusic);
        musicPlayer.addMusic(secondMusic);
        musicPlayer.addMusic(thirdMusic);
      
        musicPlayer.playMusic(firstMusic);
      
        // act
        const actual = musicPlayer.prevMusic();
      
        // assert
        expect(actual).toEqual(thirdMusic);
      });

      it("음악리스트가 비어있을 때 삭제를 하면 에러를 던진다.", () =>{
        const musicToDelete: Music = {
          artist: "뉴진스",
          genre: "팝",
          releaseDate: "2023-01-01",
          title: "삭제할할 음악",   
        };

      })
});