var db = require('./db.js');

var names = ["Pablo Picasso", "Vincent Van Gogh", "Jean-Michel Basquiat"]

var photo = [
  "http://i.telegraph.co.uk/multimedia/archive/01773/pablo-picasso_1773978b.jpg",
  "http://www.artcyclopedia.org/art/van-gogh-self.jpg",
  "http://urbanepop.files.wordpress.com/2012/08/jean_michel_basquiat-hr1.jpg"
]

var nationality = ["Spain", "Netherlands", "USA"]

var birthyear = [1881, 1853, 1960]

var description = [
  "Pablo Ruiz y Picasso, also known as Pablo Picasso, was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France.",
  "Vincent Willem van Gogh was a Post-Impressionist painter of Dutch origin whose work—notable for its rough beauty, emotional honesty, and bold color—had a far-reaching influence on 20th-century art.",
  "Jean-Michel Basquiat was an American artist. Basquiat first achieved notoriety as part of SAMO, an informal graffiti group who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan, New York City during the late 1970s where the hip hop, post-punk and street art movements had coalesced."
]

var paintings = [
  ["Guernica", "Les Demoiselles d'Avignon"],
  ["The Starry Night", "Cafe Terrace at Night"],
  ["Irony of Negro Policeman", "Hollywood Africans"]
]

var painting_photo = [
  [
    "http://2.bp.blogspot.com/-dlllLhl8c7s/UnrFUvtgMxI/AAAAAAAARXQ/Cv8QKBgfVD4/s1600/guernica.jpg",
    "http://www.moma.org/explore/conservation/demoiselles/images/demoiselles_NewFINAL.jpg"
  ],
  [
    "http://atomictoasters.com/wp-content/gallery/professors-shutdown-images/starry-night.jpg",
    "http://upload.wikimedia.org/wikipedia/commons/0/09/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg"
  ],
  [
    "http://uploads7.wikiart.org/images/jean-michel-basquiat/ironew-york-of-the-negro-policeman.jpg!Blog.jpg",
    "http://uploads0.wikiart.org/images/jean-michel-basquiat/hollywood-africans.jpg"
  ]
]

var year_made = [
  [1937, 1907],
  [1889, 1888],
  [1981, 1983]
]

var picasso = {
  name: names[0],
  img_url: photo[0],
  nationality: nationality[0],
  birth_year: birthyear[0],
  description: description[0]
};

var vangogh = {
  name: names[1],
  img_url: photo[1],
  nationality: nationality[1],
  birth_year: birthyear[1],
  description: description[1]
};

var basquiat = {
  name: names[2],
  img_url: photo[2],
  nationality: nationality[2],
  birth_year: birthyear[2],
  description: description[2]
};

var picPainting1 = {
  title: paintings[0][0],
  img_url: painting_photo[0][0],
  year_made: year_made[0][0],
  artist_id: null;
};

var picPainting2 = {
  title: paintings[0][1],
  img_url: painting_photo[0][1],
  year_made: year_made[0][1],
  artist_id: null;
};

var vanPainting1 = {
  title: paintings[1][0],
  img_url: painting_photo[1][0],
  year_made: year_made[1][0],
  artist_id: null;
};

var vanPainting2 = {
  title: paintings[1][1],
  img_url: painting_photo[1][1],
  year_made: year_made[1][1],
  artist_id: null;
};

var basPainting1 = {
  title: paintings[2][0],
  img_url: painting_photo[2][0],
  year_made: year_made[2][0],
  artist_id: null;
};

var basPainting2 = {
  title: paintings[2][1],
  img_url: painting_photo[2][1],
  year_made: year_made[2][1],
  artist_id: null;
};


db.create('artists', picasso, function (artist){
  picPainting1.artist_id = artist.id;
  db.create('paintings', picPainting1, function (painting1){
    picPainting2.artist_id = artist.id;
    db.create('paintings', picPainting2, function (painting2){
      console.log('Picasso worked fine');
    })
  })
})


db.create('artists', vangogh, function (artist){
  vanPainting1.artist_id = artist.id;
  db.create('paintings', vanPainting1, function (painting1){
    vanPainting2.artist_id = artist.id;
    db.create('paintings', vanPainting2, function (painting2){
      console.log('van Gogh worked fine');
    })
  })
})

db.create('artists', basquiat, function (artist){
  basPainting1.artist_id = artist.id;
  db.create('paintings', basPainting1, function (painting1){
    basPainting2.artist_id = artist.id;
    db.create('paintings', basPainting2, function (painting2){
      console.log('basquiat worked fine');
    })
  })
})
















