//your code here
cy.get('audio').should(($audio) => {
  const urls = [
    'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
    'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
  ];
  const audioUrls = $audio.toArray().map((audio) => audio.currentSrc);
  expect(audioUrls).to.deep.equal(urls);
});