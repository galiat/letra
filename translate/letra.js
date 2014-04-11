var letra = lyricsToArray("Vuela un columpio sobre mi cabeza,\
vuela por el cementerio de mi voluntad.\
Sigo buscando la niña que llora en tus fiestas,\
suenan campanas en flor por mi funeral.\
\
Mírame con la estrella polar a mis pies,\
vuelvo a casa perdida otra vez,\
porque no sé dejar de adorarte.\
\
Vuela un columpio vacío rozando la arena,\
deja las huellas del ángel caído al pasar,\
huellas que siempre me llevan a ti quitapenas,\
como la dosis de vida fugaz que me diste a probar.\
\
Mírame con la estrella polar a mis pies,\
vuelvo a casa perdida otra vez,\
porque no sé dejar de adorarte.\
\
Pienso en tí cada vez que me alejo de mí,\
cada vez que prefiero morir,\
desde el día que tú me diiste,\
tu carita es una rosa sin abrir.\
\
Mírame con la estrella polar a mis pies,\
vuelvo a casa perdida otra vez,\
porque no sé dejar de adorarte.\
\
Piensa en mí cada vez que me miras así,\
y se me cosen los labios a ti,\
y la luna me pinta los ojos.\
\
Mírame cada vez que te vas pienso en tí,\
cada vez que prefiero morir,\
cada vez que me besas así,\
cada vez que te vas mírame");
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function lyricsToArray(lyrics){
  return lyrics.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ").filter( onlyUnique );
}