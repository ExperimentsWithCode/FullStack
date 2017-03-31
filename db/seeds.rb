# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }],)
#   Character.create(name: 'Luke', movie: movies.first)

session_token = User.generate_unique_secure_token
User.destroy_all
guest = User.create({username: "guest-user", email: "the_guest@my_house.com", password: "1Y4xNQBhe1KS8vOJpHdB9A", session_token: session_token})

100.times do
  name = Faker::Name.name
  username = Faker::Internet.user_name(name)
  email = Faker::Internet.email(name)
  password = "supersecret"
  session_token = User.generate_unique_secure_token
  user = User.create!({username: username, email: email, password: password,  session_token: session_token})
end





questions = {
  'What basic life skill are you constantly amazed people lack?' =>
  ['How to have a civil conversation with people who disagree with them.',
  'Showing the slightest amount of appreciation when being helped (granted the help is wanted/needed).',
  'Basic Personal Finance Skills.
  I was out with my brother who said "I just need to pop in here real quick to pay off my TV for the week", and it got me interested so I asked him about it.
  He\'d bought the TV on credit... top of the line internet TV worth £700 or so, but was paying it back at the rate of £20 a week for about 2 years. No down payment when he signed up.
  I questioned him about it. Had no clue what he was going to end up paying (about £2000 across the 2 years for a £700 TV), but was happy because he went away with a Top-Of-The-Range TV that very day for £20. I was honestly speechless.',
  'Volume control, you don\'t have to be the loudest one talking in a room',
  'The skill of checking something out. Not anything in particular, just taking more than two seconds to actually try to even vaguely understand something.
  I went over to some people\'s house once to fix the drain pipe on their sink because it was leaking. It had been leaking for weeks and they kept a bucket under it which they emptied out periodically.
  I looked at it, saw it was leaking from the coupling ring, poked it, saw it was loose, and then I tightened the coupling ring with my hands until the leak stopped.
  I get that some things can be dangerous to screw around with if you don\'t know what you\'re doing, but your drain pipe / shower head / faucet / loose hinge / etc is not one of those things. Sometimes just having a little curiosity and poking something a couple times is all you need to fix something yourself.',
  'understanding how credit works. I was amazed the first time I heard about someone who didn\'t know they had to pay the money back but I\'ve now heard about it several times. Or people not knowing there interest to pay.',
  'Awareness of others, and realizing your actions impact them. Like when you drive slowly in the wrong lane, or because you\'re texting instead of moving when the light changes, or when you walk through a doorway that others are also using and immediately stop dead center instead of moving to the side to do whatever you need.
  In public, I\'m always taking into consideration how utilizing my own space will affect people. I try to get out of the way and be courteous, but a lot of people seem like they only think of themselves or are completely oblivious.'
  ],
  'What\'s a short, clean joke that gets a laugh every time?' =>
  ['Guy walks into a bar and orders a fruit punch.
  Bartender says "Pal, if you want a punch you\'ll have to stand in line" Guy looks around, but there is no punch line.',
  'It\'s hard to explain puns to kleptomaniacs because they always take things literally.',
  'Communism jokes aren\'t funny unless everyone gets them',
  'What did the pirate say when he turned 80 years old? Aye matey',
  'What time does Sean Connery go to Wimbledon? Tennish',
  'I couldn\'t figure out why the baseball kept getting larger. Then it hit me.',
  'My friend says to me: "what rhymes with orange" I said: "no it doesn\'t"',
  'What\'s the difference between a hippo and a zippo? One is really heavy, and the other is a little lighter.'],
  'Lawyers, whats the most ridiculous argument you\ve heard in court?' => [
    'Laywer who is not practicing in court, but when I was in college doing my bachelor\'s degree, criminal law was part of the curriculum and this included spending a couple of days observing criminal trials. The things you witness. Anyway; at the start of one of these trials a guy with the greasiest mullet enters the room. Thin, tall, disproportionately sized limbs, tattoos all over; I swear the way he sat before the judge, the only thing that was missing was a beer in his hand and a chicken under his arm. Now, this guy chose not to have a lawyer represent him, as he\'s a regular and spends short periods of time in jail or doing community service pretty much every month, anyway. Real problem case; drugs, alcoholism etc., but still he comes across as a really sympathetic dude and has a really entertaining way of telling a story while keeping a straight face and not realizing how funny he is. TL:DR Guy tries to win sympathies of judge with passionate account of how he broke into a dog shelter and steal his dog back from animal services; steals the wrong dog.',
    'As a corporate lawyer, the most ridiculous argument I come across almost monthly is as follows: fortune 500 company signs a garbage contract and is going to lose a lot of money due to the plain language of that contract; fortune 500 company argues unconscionability -- specifically that said company was not sophisticated enough to read the contract and no reasonable person would ever agree to the term or terms in dispute.
    In sum, multi-billion dollar firms claiming they\'re incapable of reading contracts.',
    'I was a juror, but this was a hell of a defense.
    Defendant ran through a red light and crossed against traffic in front of an officer. She was over twice the limit.
    It wasn\'t her fault. She had a cut on her arm that her dog licked. The yeast from the dogs saliva entered her blood stream and converted her blood sugar into alcohol.',
    'I have a brief encounter (personal injury prospect):
    Old lady slipped & fell on an icy driveway which was not salted or maintained, so she wanted to sue for damages.
    After hearing the story, turns out the lady fell on her own driveway which she did not salt / maintain. She was wanting to sue herself.'
  ],
  'What is your to go question to kill awkward silence?' => [
    'Soooo...think we\'ll go metric?
    (DISCLAIMER: this really only works in the US, Myanmar, and Liberia)',
    'I think it was an old shower though but "Do you ever wonder if crabs think fish are flying?"',
    '"Are you familiar with Murphy\'s Law?"
    "Yeah" or "No"
    "It states that whatever can go wrong, will go wrong. Are you familiar with Cole\'s Law?"
    "No...?"
    "It\'s thinly chopped cabbage."
    Never fails.',
    '"How familiar are you with the gear wars?"',
    '"What is your to go question to kill awkward silence?"',
    'If zombies attacked right now what\'s our plan?'
  ],
  'Coders: What\'s an example of really shitty coding you know of in a product or service that the general public uses?' => [
    'Reddit search. You\'re better off asking Jeeves',
    'Adobe Bridge for Macintosh used to have a complete copy of the Opera Browser hidden inside. You didn\'t have to dig for it either it was in the package contents.',
    'Pearson had an online ebook that cost $90, except students could use it free by changing the url from =false to =true.
    College textbook companies are a massive joke',
    'Tumblr is one of the most unoptimized, bug-infested, memory leak-prone applications ever.',
    'Oracle software, use it daily. Patches for patches between software.'
  ],
  'Teachers: what\'s the funniest answer you\'ve gotten from a student that technically wasn\'t wrong?' => [
    'ESL teacher. I had my students do an activity where they had to give directions based off of a map and situations I had chosen. The final question was more complex, and one of my students wrote, "Way too difficult, take a cab."',
    'In 7th grade on a test the question said "Why do some people see some technology as positive, and others see the same technology as a problem?" and a kid simply put, "Because some people are Amish',
    'My first grade class was learning the word powerful. Kids came up with examples of powerful things and people, like elephants and superman. Then one boy said, "babies are powerful because they can cry and get whatever they want."',
    'I\'ve taught English in Korea and Japan, and while maybe not that funny one student who wanted to say something like "afterwards" or "in the end" wrote "the after was here". I stopped for a moment and just stared off into space after reading that.'
  ],
  'What\'s the best luck you have ever had in your life?' => [
    'Not getting crushed or drowned in a farm accident. I was 16 and working in the packing house on a blueberry farm. I went out to the fields with a guy to pick up the berries. The truck didn\'t have a cab just a windshield. I was sitting on a fuel tank where the passenger seat would normally be. There was a large ditch full of water on the right side of the road. The driver went off the road into the ditch. I went into the water and the truck rolled over and came down on top of me. Somehow, I wasn\'t pinned or crushed and was able to find my way out.
I used up a lifetimes worth of luck in that one incident.',
    'Got hit by a speeding car when crossing a road, cracked the windscreen, did a flip and landed on the pavement nearby. Paramedics were worried I\'d broken my neck. Several hours and Xrays later I walked out with nothing but minor bruising on my back. Different angle and I could have easily died.',
    'I was a large outdoor concert and some dude walked up said, "no way it\'s you, man." He then hands me my driver\'s license that I didn\'t know I lost somehow.',
    'I won a $20,000 car with a $10 raffle ticket.',
    'Bought an ice cream, and won a free one, and I redeemed the free one, which contained another free one',
    'I got a holographic Charizard in the first pack of Pokémon cards I ever bought. To 11 year old me I might as well have won the lottery.'
  ],
  'What instantly turns your rage meter up to 99.9%?' => [
    'Whether it\'s my personal or professional life, nothing pissed me off more than someone volunteering me or my services for something without asking me first.',
    'When I\'m on a website on my phone and after a page has seemingly finished loading and I go to click on a link, the entire page suddenly shifts down and I accidentally get forced into clicking an ad.
Bonus: those ads on mobile that send you to the App Store immediately and never let you stay on the site.',
    'Being accused of something I 100% didn\'t do',
    'Biting my inner cheek while chewing food.'
  ],
  'What\'s not serious in real life but a huge red flag in movies?' => [
    'Looking in the mirror while brushing your teeth',
    'Having a photo of your family on your person.',
    'Being momentarily separated from your group while camping or whatever',
    'Boiling some water in a teapot on the stove. In a movie, you know that means something is about to go down when it whistles.',
    'Getting into a fight with your spouse/close relative and leaving the house without resolving it. In real life, you\'ll apologize once you get home, and it\'ll be forgotten by the end of the day. In movies, one of you will die/get kidnapped before you can make up.',
    'Seeing something out of the corner of your eye and then realising it was just your brain playing tricks on you',
    'A british accent in an American movie. Could be they\'re a spy. Could be they\'re a wizard. But if they are british, they\'ll show up in the plot eventually.'
  ],
  'What items do you think everyone, regardless of gender, should carry with them at all times?' => [
    'Extra clothes in the car. Break down in cold weather? Spill a drink on yourself? Shit yourself? On a date and they get cold? You are covered all around.',
    'Enough pockets to fit all of the items mentioned',
    'Water. I realise that\'s impractical at times, but you never realise how much you need water until you feel thirsty.',
    'I always have a deck of cards in my backpack, most people know how to play something',
    'A Pen in your pocket. It\'s not until you carry a pen on you at all times when you realize how much you really need a pen and thankful that you do have one.'
  ],
  'What\'s something that\'s technically true but extremely misleading?' => [
    'When companies say "This terrible product has ______ in it which is also used in WEED KILLER!!!! USE OURS INSTEAD!!!"
Maybe so but a chemical can be in one product thats fine and be in another that\'s "dangerous." Example, there\'s water in poisons and pesticides but you still fucking drink it.',
    'I know more about gravity than Isaac Newton',
    'If you sprinkle salt on a bird, it won\'t be able to fly away.
This is a common tale told in the south, that is fairly accurate. If you can get close enough to a bird to be able to do this, it most likely can\'t fly in the first place.',
    'Cancer rates are steadily increasing. This is true, and taken on its own it sounds like people are getting less healthy overall because more people are being afflicted by this terrible disease. Counter intuitively, the rising cancer rates are a sign of better health and higher life expectancy. We\'ve eliminated so many other diseases that more people than ever before are actually living long enough to develop cancer.'
  ],
  'What\'s the single best piece of advice you\'ve ever heard?' => [
    'Warren Buffett had some awesome bits of wisdom yesterday on CNBC
One of them was "You can always tell someone to go to hell tomorrow." Basically, wait to cool down a bit before reacting to someone.',
    'No one who is great at something was always great at it',
    '"Don\'t prepare the road for your kids, prepare your kids for the road" Got this gem after joking about the cat "going to live on a farm." And they are 100% correct. Kids need to see how the world really works especially since you are there to comfort them and help them through it. If you shield them until they are out on their own, they are going to have an extremely hard time.',
    'Be the person you needed in life. Gave me something to think about',
    'Anything that annoys you when you\'re dating, you\'re going to get from both barrels when you\'re married.'
  ],
  'What is the "cutest" mistake you’ve ever seen someone make?' => [
    'Took my 2 year old to pick up milk recently at the pharmacy near my house (closest place to get milk). While waiting in line he ended up in front of the lady in front of me, leaning against her legs and sitting on her feet. She looked down and said "Hi, I\'m not your mommy." He looked really panicked for a second, then saw me. Then he asked to carry the milk. I told him I didn\'t think he could, but he could try and set it in the floor. He lifted it maybe an inch off the ground, put in back down and sadly said, "I too small."',
    'A few months ago my 6 year old little girl was eating dinner. She let out a burp and said "fart on me." I waited a minute and asked what she said. She explained "I said fart on me. It\'s what you say when being polite." Me and my wife smiled and told her it\'s actually "pardon me."',
    'I told my 4 year old cousin to let her dad know that his phone rang. She ran up to him and just started singing the ringtone back to him. So precious',
    'I once saw my sister in law throw the banana in the trash instead of the peel. She\'s not a morning person.',
    'I visited my mother. She told me her internet is not working and wanted me to fix it. I looked at the wifi router and found she plugged the ethernet cable from the wifi router to the same router, creating a loop and not being connected to anything else.',
    'One time my mom and I were visiting my then 80 year old grandmother, and my mom had recently bought herself a Nintendo DS. So she gets it out to show Nana and says "Oh hey Mom, I wanted to show you this neat thing I got." Nana looked at it and said innocently "Oh is that a Twitter?"'
  ],
  'What does popular media portray as everyday, yet is far from a reality for the majority of people?' => [
    'When the police interview people they\'re always in the middle of something like painting a fence or cleaning up after their kids. If detectives talk to ya, you\'re gonna sit your ass down with anxiety and walk through it with them.',
    'Most fictional shows are set in upper-middle class houses (whether it\'s a real house or a set) because it\'s easier to film with that amount of space. I\'m middle class, and I\'m struggling to think of a show where the houses look like my parents\' neighborhood.',
    'Women sleeping with a full face of makeup while wearing a bra under a tight shirt',
    'Ordering a shot at the bar while having a bad day. When the bartender pours the shot you say, "Leave the bottle." The bartender gives a "this guy sure is having a bad day" look and leaves the bottle. Pull this stunt in real life and they tell you to beat it.',
    'Everyone has an unlimited supply of clothes and never wears the same thing twice.'
  ],
  'If your dog/cat could fully comprehend what you\'re saying to them for 60 seconds, what would you tell them?' => [
    'I love you and I\'m very proud that you\'re 19 years old, but please don\'t lick your butthole on the coffee table in front of my friends.',
    'I will never, ever be upset at you if you puke on the hardwood floor.',
    'I love you. STOP BARKING IT IS JUST THE NEIGHBOR. Thanks for being good to the kids. I love you.',
    '3am is not the time to go crazy and if you don\'t stop it there will be no more Tuna Fridays EVER AGAIN',
    'The broom and vacuum dont move by themselves, they are perfectly safe to walk by. Also cars will kill you so can you please develop a fear of them like you do the vacuum and broom handle?',
    'I will never leave you behind. When I go to work, I will come back. When I go to the store, I will come back. If the world ended and I wasn\'t with you, I will always come back for you. I love you doggo.'
  ],
  'What is a bad parenting tip that sounds like a good parenting tip?' => [
    'Keep your kids super clean and away from potential allergens.',
    'People love parenting tips. Don\'t be shy about offering them up at any time and for any reason.',
    'Make up a scary lie as a consequence to get your child to do as you say.
e.g. "If you don\'t get to sleep, you will die!"
child proceeds to have trouble sleeping because they\'re scared of dying for not sleeping',
    'If you ignore them they will leave you alone. Whoever made up this advice originally is stupid. This hardly works on adults let alone children who still don\'t understand the \'too far\' line when joking/teasing.'
  ],
  'What is the best line from any rap song you\'ve ever heard?' => [
    '"The square root of 69 is 8 somethin\'". It\'s both mathematically accurate and ... you know... ate somethin',
    '"I never sleep, \'cause sleep is the cousin of death"',
    'Dead in the middle of Little Italy, little did we know that we riddled some middlemen who didn\'t do diddly',
    '"He got that ambition baby, look at his eyes! This week he mopping floors, next week it\'s the fries!" is poetic genius.'
  ],
  'What is the most unbelievable instance of "computer illiteracy" you\'ve ever witnessed?' => [
    'My mom tried to download Uber and accidentally registered herself as a driver',
    'I work with a guy, who for two months and countless visits from our IT guy, claimed that his computer was still going slow. So the IT guy set a dead computer tower, which isn\'t even plugged into anything, next to the one that he was using and now my coworker says it goes twice as fast.',
    '
[–],Captain-Janeway 4579 points 4 days ago
A co-worker of mine, an older gentleman, knew how to use Excel, but nothing else. When he needed to type up a document, instead of opening up a word processor, he would open up Excel and just type his document into one cell that he enlarged to the size of an 8.5x11 piece of paper.',
    'It was me, a long time ago. Before webcams were common. I ended up at this webpage where it said something like there was a new technology where the screen would take your picture and then show it to you. So I went and brushed my hair, changed my shirt and came back to get my picture. I smiled and pressed the button. It made like a flash and then said to wait up to 5 minutes for the result. I waited patiently as I saw the picture SLOWLY loading...only to finally reveal a picture of an orangutan. My first case of being trolled by the internet.',
    'The first email my dad sent me when I went away to college, and the first email he ever wrote, didn\'t have any spaces in it. It was just one long word dotted with occasional punctuation. He didn\'t know what the space bar was and thought the computer would just add the spaces automatically. It was hilariously adorable and every time I think about it I get a little sad I didn\'t print out and frame that email.'
  ],
  'What didn\'t you realize about yourself until someone told you ?' => [
    'Whenever I walk around alone, even if I\'m in a perfectly good mood, I look like I\'m going to somewhere I know I am going to die. I apparently have a constant look of pure dread whenever I walk around alone.',
    'Hadn\'t realized my right earlobe is detached and my left one is attached',
    'Not me, but I noticed my friend would make this kind of tutting noise when he saw an attractive girl. He was completely unaware, and it took me a while to work out why he was doing it.',
    'I have a lazy eye. Never noticed until my wife pointed it out in my early 30s.',
    'My sister didn\'t know we (my family) are ethnically Chinese until one of her classmate pointed it out to her. She came home really confused that day.',
    'That I liked to interrupt people and interject essentially what I thought they were going to say as to seem more understanding or to seem like I wasn\'t wrong. It was something I picked up from my dad and never realized how rude I was being until my (now ex) gf brought it up, because it was kinda just how my family communicated. Now silence is one of my biggest skills to use in conversation and I make sure I let people express their full opinion before trying to explain myself.',
    'That I look pissed off all the time and people think I\'m an a-hole because of it. That\'s just what my resting face looks like :/',
    'Apparently, and this is what my best friend says is her favorite part about me, I get a big goofy smile on my face whenever I make someone laugh. Especially if it\'s a big group, she says I just look around at everyone with the biggest smile in the world with a big "I did good" look on my face.',
    'That my voice sounds way too loud than it normally should when I speak.'
  ],
  'What\'s a really good quote from a very bad person?' => [
    '"When your workplace starts charging you for the coffee, it\'s time to look for a new job" - My Dad',
    '“If you\'re afraid, don\'t do it. If you\'re doing it, don\'t be afraid!” - Genghis Khan”',
    'Do not compare yourself to others. If you do so, you are insulting yourself. - Adolf Hitler',
    '"You know, a long time ago being crazy meant something. Nowadays everybody\'s crazy" - Charles Manson'
  ],
  'What is the most irrational thing you have ever seen someone do?' => [
    'Call the cops to report domestic abuse because his wife wouldn\'t let him have the car keys while he was drunk',
    'I had a coworker who was struggling to pay the bills because her fiance didn\'t work. They bought their 2 year old $100 shoes',
    'Well, on Sunday I had a guy come into my store (I work for a cell carrier) complaining that he locked himself out of his phone. So we had to factory reset the phone. Unfortunately, factory reset protection was on, so he had to sign into his Gmail account to use the phone, which he doesn\'t know the password to. We got the password changed, but there\'s a 24 hour waiting period to sign into your Gmail after changing the password in this situation. Cue the screaming at me, and walked to the exit, turned around and threw the phone at me and it hit the wall behind me. Thankfully no one was hurt and nothing, not even the phone was damaged. My boss called the cops and he\'s now banned from our store.',
    'I work in a fast food/coffe shop. I accidently made a large coffee instead of medium. She was charged for medium. She demanded loudly that I remake her medium. I am still baffled by this.'
  ],
  'If the NASA announcement today was simply: "Stop what you\'re doing, it\'s useless. They\'re coming." What would you do first?' => [
    'Well I wasn\'t even doing anything anyway so whatever',
    'I\'d wait for the mega thread and spend my final hours/days shitposting on Reddit.',
    'The thing that\'s tricky about working in a hospital is that there\'s no such thing as "everybody stop what you\'re doing" - well... unless the instrument count is off on a surgery',
    'Go home and play video games. If a cosmic horror is gunning it for earth, might as well enjoy myself.'
  ],
  'What\'s a true fact that sounds like complete bullshit?' => [
    'Killer whales (orcas) are natural predators of moose. Moose swim between the islands in Alaska, where the orcas prey on them.',
    'When you get a kidney transplant, they usually just leave your original kidneys in your body and put the 3rd kidney in your pelvis.',
    'A peak of Mount Everest was calculated to be exactly 29,000 ft high, but was publicly declared to be 29,002 ft in order to avoid the impression that an exact height of 29,000 feet was nothing more than a rounded estimate.',
    'There are more trees on Earth than there are stars in the Milky Way.',
    'The Atlantic entrance to the Panama Canal is farther west than the one on the Pacific side.',
    'Humans have an innate instinct to dance to a beat. They tested it by playing different music for babies and they all started groovin\' to the beat',
    'If the Andromeda Galaxy were visible to the naked eye, it would be 6 times larger than the moon in the sky.'
  ],
  # 'How did you screw with computers at school?' => [
  #   'https:// instead of http:// bypassed the school firewall. I felt like such a badass hacker.',
  #   'Took the windows startup sound. Edited in 8 minutes of dead air. Edited in 15 seconds of animal noises. Made that the new startup sound.',
  #   'Used an altered version of a JavaScript web browser hack that turns all pictures shown into pictures of French toast.',
  #   'Not me, but I remember at my old school someone managed to disable the 'h' key on lots of the computers. If you were typing and tried to press \'h\' you would get an error message saying like "Sorry but the h key on this computer is currently disabled, please try again later".',
  #   'Ctrl + Alt + direction arrow to flip the screens different directions. I stopped when I was told that could permanently mess up the computers. I started again in college.',
  #   'Unplug mouse from back of computers 1 and 2. Switch the plugs, but leave the mice where they were. Mouse in front of computer 1 is now plugged into computer 2 and vice versa.'
  # ],
  'What\'s a sign that you shouldn\'t trust someone?' => [
    'When you call them out on something minor and they double down on the lie.',
    'When they try to be funny around some friends by revealing some of the awkward moments you told them about and they are not supposed to tell anyone',
    'When they start selling the perks of their personality to you, and defending themselves in scenarios they relate to you.'
  ],
  'What do people think is good only because of nostalgia?' => [
    'As a mechanic, \'50\'s cars. They look good, but mechanically, suuuuuucked. No performance to speak of, much less keeping up with freeway traffic. Adjusting points is an absolute bear, constantly checking oil, and hoping that smell doesn\'t mean you have to open up that goddamn carb again.',
    '"Nostalgia is truly one of the great human weaknesses. Second only to the neck." -Dwight Schrute',
    'World War 2. People still glorify it in books, movies, and video games. They see it as an era of patriotism and national heroes. People need to remember how horrible it was in the later years. How we were constantly losing ground and being beaten back to Berlin. We need to accept that the Third Reich failed and move on with our lives.',
    'High school. Everyone talks about the greatest years of their lives. All i remember is having to doing mind numbing uninspiring work and feeling left out from parties :( #stillsalty',
    'Christopher Reeve\'s portrayal of Superman. He killed Zod with a smile on his face.'
  ],
  'What are some of the best things to buy secondhand?' => [
    'Instruments. You can get some killer guitars and drum kits that sound better than new versions of the same thing at sometimes a fraction of the cost.',
    'Books. As long as its legible and isn\'t falling apart, that\'s really all that matters...',
    'Professional camera lenses. As long as they\'re in great shape, you can literally save thousands of dollars buying used. I\'ve bought 3 mint condition Canon L series lenses for usually half the price of buying new. They will last a lifetime if properly cared for. There are always so many of them on Kijiji.',
    'Wrenches, sockets and screwdrivers. I troll the pawn shops and get very high quality for next to nothing.',
    'Sporting equipment. My 6-year-old decided he really wanted to play tennis the other day. Who knows how much he\'ll like it. First thought, second hand store. Huge success.',
    'College Textbooks. You can usually get the current edition if you check your class syllabus early. Publishers come out with new editions every two years or so and encourage professors to teach off the new edition, but most of the time even one or two editions back are just as usable as the new ones.'
  ],
  'What is the scariest thing that has woken you up in the middle of the night?' => [
    'My computer awoke from sleep mode. Its loud and has a ton of red led fans. I thought the devil was summoned.',
    'One time my cat ran into my guitar (acoustic, so it was really loud) at 3 am or something. Scared the heck out of me.',
    'A dream that i was a serial killer and that the police were closing in on me. I woke up with my heart pounding and in disbelief that i could have done something so horrible. Then i realised, it took me a solid 15 seconds of shear panic, it was a dream. Most relieved ive ever felt in my life.'
  ],
  'Who, as a group, are the most pretentious people you\'ve ever met?' => [
    'People who work in Creative advertising agencies in London. So detached from normal life, life outside of the city and life in general. I had to work on a big project with a pretentious group of such people and show them around some remote locations. They failed to cope with normal life on every occasion, but never failed to tweet about it.',
    'People who think they are "Wine tasters". I have been to a couple of parties and just wanted to shoot myself. (But they usually have great food so I just shut up and fake smile). Also people who sell high end items. I went shopping with my Cousin who\'s a millionaire. He was looking at a $350 shirt and he was telling me that it was really too expensive. (For the poor quality, I agreed) The salesman told him "If you don\'t have the money, you shouldn\'t be shopping here." Damn Man you lost a big sale.',
    'The "I was born in the wrong generation" group. They think that their taste in music is superior to everyone else\'s and that only they know what "real music" is',
    'Facebook mom\'s with no medical education spreading anti vaccine propaganda and trying to educate people on what to eat and all the fake supplements they take to prevent cancer.'
  ],
  'What\'s a purchase that was 100% worth it to you?' => [
    'IR thermometer. It has inaccuracies for certain materials, but just pointing and clicking is so convenient.',
    'A portable phone charger battery, I cant even tell you how much that was worth my 15 dollars.',
    'High quality toilets for my house. I had builder\'s grade generic toilets installed in my house. Once I replaced the first one as part of a bathroom remodel with a larger newer more expensive model, I was dumbstruck at what I had been missing. These things almost never clog, use less water, and I\'m completely addicted to the slow-close lid. I went out and bought a new one for my guest bathroom within a month. Best house upgrade eve',
    'A silicone spatula/spreader for the kitchen. That thing is awesome. It is heat proof, scrapes the bottom of pans without hurting them, fits into fairly narrow jar openings, cleans easily, and other than a knife is the single most used item in my kitchen. I bought two more about a year later, one for my mom, and a second for me.'
  ],
  'What should you NEVER ever do in the USA?' => [
    'You know those prank videos where it\'s like a creepy clown or something with a sledge hammer or a machete chasing people around a parking garage? Yeah, that\'s a real good way to get shot.',
    'Don\'t fly a drone in Washington, DC. The whole D.C. Area is a no fly zone. It\'s a federal offense. Just don\'t do it.',
    'This is Alaska-specific. Please don\'t come to Alaska to hike the wilderness and "find yourself" if you don\'t know anything about hiking. You\'re just gonna die and go missing. It happens all the time. YOU ARE NOT BEAR GRYLLS',
    'Underestimate it\'s size. No, you\'re not gonna see the whole place in your 2 week vacation and just going from LA To San Francisco is >600km, and that\'s just in one state.'
  ],
  'In an age where most job postings receive hundreds of applications, how do you stand out?' => [
    'I\'ll be honest- knowing people. Networking is the most important way to get ahead these days.',
    'Hiring manager here, I can\'t express how much better an application is when people take their time to do some research. For example if you send an email, make sure it has a brief introduction of who you are and why are you fit to the position. For this don\'t use the same copy paste intro letter where you "cleverly" change the company name and suddenly its personalized. Take your time to fully read what they are looking for and give direct connections from the responsibilities to your previous work, but make it to the point, as this shouldn\'t take more than a paragraph.
    Resumes are also huge as it\'s basically the only way to judge if you don\'t know the person, make sure they are consistent looking and, if possible, tailored to that position. Keep them as close as possible to 1 or 2 pages. And always send them as pdf with the name your_name_resume.pdf.
    Doing research on what the position really is, and what exactly they are looking for could be very tedious, however if you spend the time it could very well pay off.
    As for the interview, all it comes down is your attitude, if you are relaxed and answer with confidence, I\'m sure you\'ll land the job.',
    'I specially designed my resume in Adobe Illustrator. It\'s organized in such a way that it looks strikingly different from every other resume in the pile, while still making all of the important information stand out. When looking for a job, you just gotta take Aaron Burr\'s advice: Talk less, smile more. Same goes on the resume.',
    'Make sure you have 5 years of professional experience straight out of college like that listing for the entry level job specified.'
  ],
  'Which small social gestures are underrated?' => [
    'Asking someone to repeat themselves when they get cut off by someone else in the conversation.',
    'Every time there\'s a new person at work, I recall what it was like being the new guy and go out my way to make them feel comfortable and let them know that I\'ll answer any questions judgement free.',
    'Getting my oil changed yesterday and sitting in the waiting room and girl 30 years younger than me is getting a soda from the machine next to me... She looks over and asks me if I\'d like a soda as well... I was a little surprised but politely said no and thank you... I thought it was an exceptionally kind gesture...',
    'Thanking employees who help you. As one who works in retail I\'m telling you this makes my week. Trust me, you\'ll get far better service as a result and I\'ll move mountains to ensure it happens.'
  ],
  'King Arthur had to pull a sword out of a stone to become king of England. How do you become King of America?' => [
    'Kicking over the St. Louis Arch. When I was five, I really thought I could do it. So I held myself back, because I didn\'t want to make anyone sad that it fell.',
    'By stealing the Declaration of Independence. I feel like that\'s pretty obvious'
  ],
  'If an object yelled it\'s name when you used it, which object would be the most annoying?' => [
    'EAR PLUGS!! Can you imagine. Completely defeats their purpose.',
    'Right shoe Left shoe Right shoe Left shoe Right shoe Left shoe Right shoe Left shoe Right shoe Left shoe Right shoe Left shoe Right shoe Left shoe Right shoe Left shoe',
    'YESTERDAY\'S UNDERWEAR YESTERDAY\'S UNDERWEAR YESTERDAY\'S UNDERWEAR',
    'Popcorn. Picture this: You\'re in a movie theater and every single kernel screams POPCORN right before you eat it. And everyone has a large bucket.',
    'I use a pen frequently. Can I name it, or does it just scream, "PEN!"?'
  ],
  'What is a vacation spot that does not live up to the hype?' => [
    'As a native of Daytona Beach, I always look for it in these threads. It always shows up, as it should. We just got done with Speed Week. Now it\'s Spring Break and Bike Week is getting into swing. It\'s all the worst kinds of tourists at once.',
    'Glad to see Scranton, PA hasnt made the thread anywhere. The booze cruise tickets on Lake Wallenpaupack are non-refundable.',
    'The Jersey Shore. Under the boardwalk used to be such a magical place to experience love, now it\'s just homeless dudes',
    'General takeaway: Everywhere is terrible. Stay home and drink in your basement, or your backyard if you need some sun.'
  ],
  'What is the craziest "It\'s a small world" moment you\'ve ever experienced?' => [
    'My sister, my brother and I ran into each other randomly at a gas station no where near where any of us lived. Then my mom called my cell phone. It was a spontaneous family reunion',
    'First time I went to Japan an older woman asked me for directions in Tokyo, because "I looked like I could speak english". I heard a faint german accent in her voice and just said, in german, "we can just speak german if you like". We got talking and not only do we both come from germany, not only do we live in the same city, we live on the same street. We still sometimes wave at each other when we meet at the cornershop.',
    'My best friend randomly found my driver\'s license (my wallet was stolen a year beforehand) in her dorm roommate\'s things. I\'ve never met her roommate and they went to a college 5 hours away. Turns out her roommate stole my wallet and but held onto my driver\'s license. A year later she was randomly matched with my best friend as a roommate. My best friend suspected her roommate was stealing from her, went through her stuff and instead found my driver\'s license.',
    'I met a guy on Overwatch and we started playing Xbox together. We both lived in California so we decided to meet up and he lived down the street.',
    'I\'m English and I went to Chicago for a week. I went into a Starbucks in a non-touristy area and sat at the table. From the table next to me an american guy says "hey Hannah, I believe I follow you on twitter". Turns out we were both on a group video chat a few years ago with a musician that we both liked.'
  ],
  'What\'s the worst movie you have ever watched?' => [
    'The Starving Games. It\'s a parody of The Hunger Games, and it\'s absolutely horrible. The night we watched it, my mom said she was in the mood for a movie like Sharknado, meaning she wanted a movie that was kinda bad, but in a funny way. So we went into The Starving Games expecting a bad movie, and it still turned out to be a disappointment',
    'Dragon Ball live action film. I\'m wholly convinced not a single person in charge of that movie had read a single page of the source material. The messed up literally everything.',
    'Ghost Rider: Spirit of Vengeance. Literally everything about it was absolutely garbage.',
    'Gigli...god only knows why I didn\'t say no to Ben Afflek and J Lo...ugh.',
    'Lucy. Absolute waste of two hours. The whole plot is based on the common misconception that we only use 10 percent of our brains. The ending is about the dumbest thing I have ever seen.'
  ],
  'People who were alive and supported Nixon during watergate, what was your reaction and feelings towards Nixon afterwards?' => [
    'I was in high school. It was the first time I remember political doublespeak and people denying events that were completely proven. It was an eye opener. I tried to keep an open mind but the weeks following the Saturday Night Massacre were the point where no one could plausibly deny the problem any more. They just sounded silly when they tried. Every day after that was more twisting of the knife stuck in America. I didn\'t hate Nixon as much as I hated the total human garbage around him (Haldeman, Earlichman, Liddy,…) Those guys struck me a pure evil. It was a rude introduction to how dirty politics really are. It destroyed trust. We, in some ways, are still paying the price of Watergate.',
    'According to my grandfather, my great uncle reacted by stealing the entire neighborhood\'s American flags and incinerating them. Even though half the neighborhood formed a vigilante to find the flag-stealing bandit, my great uncle was never caught.',
    'I recently asked my dad about how his parents reacted. Until it became obvious that Nixon lied, my grandparents griped all the time about how the media was jumping all over a good man for no reason. After, they didn\'t talk about it at all and pretended it never happened.',
    'I remember Watergate. I was about 10. The hearings were a poor replacement for cartoons that summer.',
    'It was not the act of burglarizing the DNC that got Nixon. It was the fact that he got caught lying about it to cover it up. And he was way too obvious that he was,very poorly, covering it up.',
    'My grandfather (almost 90) told me that is why he hasn\'t voted since...',
    'Statistically, a little less than 40% of the people that voted for him still supported him after Watergate.(his approval rating was about 20% when he resigned). A lot of people here also seem to be giving him credit for ending the Vietnam war, which is a little ridiculous considering it was proven this year that Nixon purposefully sabotaged LBJ\'s peace talks just to get elected.'
  ],}
#   '' => [
#     '',
#     '',
#     '',
#     ''
#   ],
#   '' => [
#     '',
#     '',
#     '',
#     ''
#   ]

Question.destroy_all
Answer.destroy_all
questions.keys.each do |q|
  title = q
  body = q
  author_id = User.all.sample.id
  created_at = Faker::Date.between(1.year.ago, Date.today)
  updated_at = created_at
  if q.length >= 40
    currentQ = Question.create!({title: title, body: body, author_id: author_id, created_at: created_at, updated_at: updated_at })
    questions[q].each do |a|
      if a.length >= 40
        body = a
        author_id = User.all.sample.id
        question_id = currentQ.id
        created_at = Faker::Date.between(currentQ.created_at, Date.today)
        updated_at = created_at
        Answer.create!({body: body, author_id: author_id, question_id: question_id , created_at: created_at, updated_at: updated_at })
      else
        puts a
      end
    end
  else
    puts question
  end
end


Vote.destroy_all
190.times do
  answer_id = Answer.all.sample.id
  user_id = User.all.sample.id
  value = rand(10) >= 2 ? 1 : -1
  Vote.create!({votable_id: answer_id, votable_type: 'Answer', user_id: user_id, value: value })
end

80.times do
  question_id = Question.all.sample.id
  user_id = User.all.sample.id
  value = rand(10) >= 2 ? 1 : -1
  Vote.create!({votable_id: question_id, votable_type: 'Question', user_id: user_id, value: value })
end

Answer.all.each do |answer|
  if rand(1000) >= 600
    answer_id = answer.id
    user_id = guest.id
    value = rand(10) >= 2 ? 1 : -1
    Vote.create!({votable_id: answer_id, votable_type: 'Answer', user_id: user_id, value: value })
  end
end



Question.all.each do |question|
  if rand(1000) >= 600
    question_id = question.id
    user_id = guest.id
    value = rand(10) >= 2 ? 1 : -1
    Vote.create!({votable_id: question_id, votable_type: 'Question', user_id: user_id, value: value })
  end
end
