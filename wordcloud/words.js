var not_words = "with went than then this from it's you'd i'll i've that your been".split(" ");
var words = "The Devil went down to Georgia. He was lookin' for a soul to steal. \
He was in a bind 'cause he was way behind. He was willing to make a deal\
When he came across this young man sawin' on a fiddle and playin' it hot.\
And the Devil jumped upon a hickory stump and said Boy, let me tell you what.\
\
I bet you didn't know it, but I'm a fiddle player, too.\
And if you'd care to take a dare I'll make a bet with you.\
Now you play a pretty good fiddle, boy, but give the Devil his due.\
I'll bet a fiddle of gold against your soul 'cause I think I'm better than you.\
\
The boy said, My name's Johnny, and it might be a sin,\
But I'll take your bet; and you're gonna regret 'cause I'm the best there's ever been.\
\
Johnny, rosin up your bow and play your fiddle hard.\
'Cause Hell's broke loose in Georgia and the Devil deals the cards.\
And if you win you get this shiny fiddle made of gold,\
But if you lose the devil gets your soul.\
\
The Devil opened up his case and he said, I'll start this show.\
And fire flew from his fingertips as he rosined up his bow.\
And he pulled the bow across the strings and it made an evil hiss.\
And a band of demons joined in and it sounded something like this.\
\
When the Devil finished, Johnny said, Well, you're pretty good ol' son,\
But sit down in that chair right there and let me show you how it's done.\
\
Fire on the Mountain. Run, boys, run!\
The Devil's in the house of the rising sun;\
Chicken's in the bread pan picking out dough.\
Granny, does your dog bite? No, child, no.\
\
The Devil bowed his head because he knew that he'd been beat.\
And he laid that golden fiddle on the ground at Johnny's feet.\
Johnny said, Devil, just come on back if you ever wanna try again,\
'Cause I've told you once--you son of a bitch--I'm the best there's ever been.\
And he played:\
\
Fire on the Mountain. Run, boys, run!\
The Devil's in the house of the rising sun;\
Chicken's in the bread pan picking out dough.\
Granny, does your dog bite? No, child, no.".toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ").filter(function(word){return word.length > 3 && not_words.indexOf(word) < 0;})
var frequencys = [];
var len = words.length;
for(var i=0; i<len; i++){
  var word = words[i];
  if (frequencys[word] == null){
    frequencys[word] =   1;
  }else{
    frequencys[word] = frequencys[word] + 1;
  }
}
keys = Object.keys(frequencys);
frequency_list = [];
len = keys.length;
for(var i=0; i<len; i++){
  if(frequencys[keys[i]] > 1){
    frequency_list.push({'text': keys[i], 'size': frequencys[keys[i]]});
  }
}
