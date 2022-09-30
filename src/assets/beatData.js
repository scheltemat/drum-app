import { v4 as uuidv4 } from 'uuid';

let beats = [
  {
    id: uuidv4(),
    title: "Basic Eighth Note Drum Beat",
    embedSrc: "633471d7a8aa160013ed45f0",
    difficulty: "Easy",
    description: "This is where everyone begins, the most basic of all drum beats. The way I like to teach a complete beginner how to play this is to tell them to count '1, 2, 3, 4' on a loop without stopping. Every time you say a number (which is every word you say) you will play a right hand on the hi hat. Every time you say '1', you will play a bass drum with your right foot. And every time you say '3', you will play a snare drum with your left hand. It's as simple as that, playing your first drum beat with just a little time... and maybe a little math too."
  },
  {
    id: uuidv4(),
    title: "Paradiddle Beat",
    embedSrc: "6334c0883555e80012ce7182",
    difficulty: "Medium",
    description: "One of the first rudiments you will learn to play is the single paradiddle, as it combines single and double strokes into an alternating hand pattern. This is a very simple musical context of that, you put your right hand on the hi hat, and your left hand on the snare and play the paradiddle rudiment. All we have to do now is to turn it into a drum beat by adding a bass drum. To keep it simple as possible, we will just play a bass drum on every right-hand accent (beats 1 and 3 in this context). Biggest thing to focus on here: Loud accents and soft ghost notes. Once you feel comfortable, experiment with different bass drum note placements."
  },
  {
    id: uuidv4(),
    title: "Inverted Doubles Beat",
    embedSrc: "6334cfdaa8aa160013f28af0",
    difficulty: "Hard",
    description: "Let's kick it up a notch with some modified rudiments. The inverted double stroke is played as follows: RLLRRLLRRLLR etc... In this context we're again placing the right hand on the hi hat and the left hand on the snare, but for the accent on beat 3, you will need to move the right hand down to the snare for that big accent to give you a solid backbeat. Two of the right hands are replaced with a bass drum, so it's kind of like a modified, modified rudiment. If this feels overwhelming, just start slow and play everything with good dynamics. Speed will come in time I promise!"
  },
  {
    id: uuidv4(),
    title: "Inverted Paradiddle Beat",
    embedSrc: "6334d191f8f23c0012ffd3ea",
    difficulty: "Hard",
    description: "This is (in my opinion) the quintessential Drum n Bass drum beat. At heart, it's kind of a modified paradiddle beat, one inverted paradiddle (RLLR) and one regular (LRLL), except it's more like (LKLL) where the right hand is replaced by a bass drum. It may seem stressful at first, but the pattern is only 2 counts long, so it will repeat 2x in a measure of 4/4. Start by learning the first 2 counts with good dynamics (SLOWLY), speed will come with time."
  },
  {
    id: uuidv4(),
    title: "Purdie Shuffle",
    embedSrc: "6334d6e413c88200127a40e8",
    difficulty: "Hard",
    description: "This is a need to know for EVERY drummer. Besides sounding awesome, it's a great double stroke workout for your right hand, and a great time to practice getting your left hand ghost notes as low as possible. The lower and less you hear them, the better! If you struggle, always start slow (wow have I said this before? haha). And if you nail this, move your right hand to the ride cymbal and play quarter note hi hats with your left foot. It'll be a great way to practice 4-way limb independence."
  },
  {
    id: uuidv4(),
    title: "My First Double Bass Beat",
    embedSrc: "6334c8e587f303001264ea91",
    difficulty: "Easy",
    description: "If you have a double pedal, awesome! If you don't, then you can go ahead and skip this one. For those still here, this is the most basic double pedal drum beat there is. You will play the bass drum as RLRL etc. with your feet (assuming you're a right-handed drumset player). That means your right foot will always align with your right hand on the hi hat, so coordination-wise, it's not bad at all. The real challenge? Getting it faster."
  },
  {
    id: uuidv4(),
    title: "Euro Blast Beat",
    embedSrc: "6334d572f1f51f0013f44c25",
    difficulty: "Medium/Hard",
    description: "This one can be done with or without a double pedal, but it is much, much easier with one. And really, there's not much to this one, just single strokes on the hands, split between the hi hat and snare, but the left hand notes are all ghost notes. However, depending on how you want the beat to sound, the ghosts can be played at varying degrees of volume. If that was easy to get down, all that's left to do is align a bass drum with every right hand hi hat note. This one is not too difficult either, so the ultimate challenge here is how fast you can play it - the sky is the limit! For a bonus challenge, try bringing the right hand down to the snare on count 3 for a big accent (it will create a backbeat)."
  },
  {
    id: uuidv4(),
    title: "Bleed by Meshuggah Intro Beat",
    embedSrc: "6334ca0bf8f23c0012ff7293",
    difficulty: "Extreme",
    description: "Single pedal players, leave now. This one is truly a test of coordination and endurance. The pattern? Simple. The execution? Gnarly. Start by learning the 'Herta' pattern (google it), then play that pattern with your feet. That's all this is, repeating 32nd/16th note 'Hertas' with your feet over an 1/8th note cymbal and backbeat pattern. Truthfully, this goes on for longer than just 3 measures, a lot longer, but this will give you the basic idea for the beginning of the song. The pattern repeats every 3 measures which does not line up nicely in 8 or 16 measure phrases, just one of the many reasons this song is cool."
  },
  
]


export default beats;