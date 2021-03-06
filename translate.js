var artist = "La Oreja de Van Gogh"
var song = "Jueves"

var songId;
var lyrics;
var language;
var lyricsArray;

function getLyrics(artist, song, lyricsSelector){
  if(true){ //true makes API an api call to get the lyrics. False skips that.
    var key = music_match_key;
    var url;
    var ENAPIKey = '0TPFPI9TGBX5CJU49';

    url = "https://developer.echonest.com/api/v4/song/search?api_key="+ENAPIKey+"&bucket=id:musixmatch-WW&limit=true&bucket=tracks&format=jsonp&artist="+artist+"&title="+song;
    $.ajax({
      url: url,
      jsonp: "callback",
      dataType: "jsonp",
      // work with the response
      success: function( data ) {
        if (data.response.songs[0]){ //Some songs echo easy just doesn't know about :(
          songId = data.response.songs[0].foreign_ids[0].foreign_id.split(':')[2];
          url = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + songId + "&format=jsonp&apikey=" + key;
          $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",

            // work with the response
            success: function( response ) {
              lyrics = response.message.body.lyrics.lyrics_body.replace('******* This Lyrics is NOT for Commercial use *******', '').replace('...', '');
              language = response.message.body.lyrics.lyrics_language;

              lyricsArray = lyricsToArray(lyrics);
              display(lyricsArray,lyricsSelector);

            }
          });
        }
      }
    });
  }else{
    letra = ['hola', 'niña'];
    display(letra,lyricsSelector);
  }
}

function display(lyricsArray, lyricsSelector){
    d3.select(lyricsSelector).selectAll('div').data(lyricsArray).enter().append('div')
    .attr('id', function(d) { return d; })
    .attr('class', 'word-set')
    .html(function(w){translate(w); return "<span class='from-lang'>" + w + "</span><span class='holder'><span class='delim-hider'></span><span class='delim'>,</span></span><span class='to-lang'></span><span class='nix'></span"});

    d3.selectAll('.nix').on('click', function(d, i){this.parentNode.remove()});

}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function lyricsToArray(lyrics){
  return lyrics.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g," ").replace(/(\r\n|\n|\r)/gm," ").split(" ").filter( onlyUnique );
}

function translate(word){
  var url = "https://api.datamarket.azure.com/Bing/MicrosoftTranslator/v1/Translate?Text=%27" + word + "%27&From=%27es%27&To=%27en%27";
  var creds = "Basic " + btoa(ms_translate_key + ":" + ms_translate_key);

  var settings = {
    url: url,
    beforeSend: function (xhr){
          xhr.setRequestHeader('Authorization', creds);
      },
  };

  var result = $.ajax(settings).done(function(data){
    var translated = data.getElementsByTagName('content')[0].firstChild.firstChild.innerHTML;
    $('#' + word + ' .to-lang').html(translated);
  });

}

// var wordset = d3.select('.word-set')[0];
// letra = ['hola', 'niña'];

// d3.select('#vocab').selectAll('div').data(letra).enter().append('div')
// .attr('id', function(d) { return d; })
// .attr('class', 'word-set')
// .html(function(w){translate(w); return "<span class='from-lang'>" + w + "</span><span class='holder'><span class='delim-hider'></span><span class='delim'>,</span></span><span class='to-lang'></span><span class='nix'></span"});

// d3.selectAll('.nix').on('click', function(d, i){this.parentNode.remove()});