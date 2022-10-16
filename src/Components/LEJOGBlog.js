import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import '../Styling/blogs.css';
import AnimateWriting from './AnimateWriting';
import LEJOGRoute from '../Assets/LEJOGRoute.png'

function LEJOGBlog () {

  const writingSequence = ['Lands End to John O\'Groats', 1000]


  return (
    <div className='main-container'>
      <div className='title'>
        <AnimateWriting writingSequence={writingSequence}/>
      </div>
      <div className='route'>
        <img className='route-image' src={LEJOGRoute} alt="LEJOG Route"/>
      </div>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 1 Lands End to Bodmin
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>I made my way to the Lands End sign post at 8.30am, later than I thought I would but I was really weary after the emotional roller-coaster of the day before. The obligatory photos were taken and just as I was about to set off, another rider having his picture taken had his front wheel go bang. Tyre gone, what a bad start! It looked like he had support there so I hope he got it sorted!
            </p>
            <p>There's a nice little start/finish line at Lands End (I hope there's a finish line at John O'groats) and off I went into the glorious blue sky ahead of me. Just me and the bike and the road. I was avoiding the A30 as much as possible so I didn't see anyone else who'd been at the start for the rest of the day which just goes to show how everyone does a different route. Everyone's experiences are their own.</p>
            <p>Because I avoided the A30 my route was so much hillier than it could've been. A large proportion of my roads were single track and ridiculously steep and lumpy. My focus was on keeping hydrated since this is where I usually fall down on and I think I did really well! I stopped for lunch at 11.45 at Troon taking advantage of the Co-Op and sat in the sun for a leisurely 45 minutes letting the food go down. Im always aware of the need to consume calories but when cycling my body finds it hard to digest food. Ridiculous I know. Probably to do with blood focusing on my leg muscles or something. Either way, bottles refilled and bladder full I set off again. Road side wees are a necessary evil, right? When you've got to go, you've got to go. Hate it. I'm sure ladies will understand the perils of finding the right place so you miss a patch of nettles.</p>
            <p>I was struggling by Truro and took a break at the top of a hill on the outskirts. Training rides have taught me to know when my body just says no. I can push through after a small rest and I got a second wind soon after. The steepness of the hills got less and seemed to hit perfect percentage for the last big climb of the day which went on for a few miles. I got to my B&B about an hour after I'd hoped to but considering the hill steepness I struggle with (and I'm not ashamed to say I walked up two because with a pannier it was too much). I figured I can forgive myself two walked hills out of the number of hills I'll meet between now and the end. This forgiveness is all part of my new “being kind to myself” way of thinking.</p>
            <p>My B&B for the night is really quaint. It's a family home with two rooms up for booking and my hostess brought me two pieces of cake when I arrived. She said they get a lot of cyclists doing LEJOG (I'm pretty sure I found them on http://www.bedsforcyclists.com) but normally they get here on day 2 or 3. It gave me a boost, even if it's not completely true.</p>
            <p>So today was hard. It was probably made harder by the lack of a proper big meal last night (though I'll be forever grateful to the owner of the hostel last night for those beans) but I succeeded and that's the most important thing. Keep your fingers crossed the longer distance and increased climbing tomorrow doesn't finish me off!</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 2 Bodmin to Tiverton
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Day 2 broke me. Again. And again. And again. The most frustrating thing is you don't even go that high, it's just steep hills up and down. Up and down. I think there was maybe half a mile of flat in the whole day.
            </p>
            <p>It was a tough day mentally too. I had some much needed messages from Twitter which I tried to keep going round in my head. The worst point was when Tiverton just didn't seem to be getting any closer. I thought I was on my last hill but there was still 13 hilly miles to go.</p>
            <p>Cornwall and Devon are tough. That is all.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 3 Tiverton to Chepstow
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Everyone told me once I got out of Devon it would be flatter with more rolling hills. This is true! I started out really struggling with breakfast, having also struggled with dinner the night before. But I ate the best porridge of my life and set off half an hour later than planned to meet a pal from Twitter by 12.30/1 in the Mendip Hills.</p>
            <p>My legs did feel pretty good at the start and I kept up a good pace. I followed the NCN Route 3 a lot of the way which I was actually really impressed with apart from one or two badly rocky bits. The canal path bumpiness took its toll on my legs and they were fatigued by 25 miles in.</p>
            <p>With the leg fatigue came the lower mood. I just kept eating little and often because it was a flat day til the Mendips so when my body was happy to take it I fed it.</p>
            <p>I was late to the meet point by about 1.30 hours I think. Head wind and fatigue were things I hadn't taken into account when suggesting a time! Sorry @Redveee! He didn't seem to mind, though I felt awful and off we went towards the bridge to cross into Wales.</p>
              <p>It turned into a 99 mile day for me which was tough! After the bridge I was crawling along. I had struggled to eat anything substantial since breakfast aside from energy bars and gels which wasn't enough. Once I got into Chepstow I quickly checked in, showered, hand washed kit and sat in an Italian restaurant for an hour and a half forcing myself to eat a starter and a main. I did it! I should feel much better tomorrow though I've decided to change my route into Shrewsbury to do more A roads (I know not ideal) but it's about 2000ft less climbing which gives me knees a chance. I need to find some Biofreeze tomorrow…</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 4 Chepstow to Shrewsbury
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>My plan to change the route today paid off as I survived the day with less climbing and I loved it all. That's not to say there wasn't any climbing- getting out of Chepstow was a great warm up and ended with a fab view back down the valley. My legs were feeling great even after the 99 miles the day before.</p>
            <p>The pay off for the reduced climbing was the busy A49 which in places is very dicey with massive lorries squeezing along narrow roads racing up to Leominster and further. Their number did reduce after Leominster but I really don't think the roads are suitable for vehicles that big at all. That said they all overtook brilliantly. Like… proper next lane overtakes.</p>
            <p>I stopped in Hereford for lunch and to buy myself some new cycling mits since my old ones were stretched and really manky. There's something wonderful about new cycling gloves. I'd love to go back to Hereford properly one day because it's a beautiful town. I'd recommend you go if you're ever in the area!</p>
            <p>My uncle and aunt were meeting me in Shrewsbury that evening and by chance happened to pass me just after Ludlow. They stopped in a layby and sneakily took photos as I approached. Now, I've never thought my cave-of-pain-but-enjoying-it face was ever photogenic but I sincerely appreciate having the photographic evidence of the reality of the ride.</p>
            <p>Further on I met another one of the world's little gems in another layby. I had pulled in to change my water bottles around, just pulled off again past one of those food and drink stands and a man calls to be waving a bottle of water. I stopped and accepted the water (lemon and lime flavour for extra sugar) and filled part of my now empty bidon up. I thanked him and he offered another to take with me. When asking how much I owed him, he said not a penny. He'd offered because he saw I was getting low. Great, kind man. We had a brief chat and I was on my way again glad of the extra water because even though it was cloudy it was still warm and had been since Lands End.</p>
            <p>Today consisted of the busiest roads but was the best day so far. My legs were sore but they were so strong without issue going up hills (of which there were a few nasty ones). By the end of the day my knees were starting to cause me a fair bit of pain so I was quite glad to stop and apply some Biofreeze to soothe them.</p>
            <p>Great dinner, great company and a great sleep after a great day.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 5 Shrewsbury to Widnes
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>After yesterday's knee pain I took today slower than originally hoped. The rolling hills were easy though the pain got worse in my left knee and better in my right so management of that was needed. High cadence in an easy gear helped though didn't always amount to high speeds I could've reached since it was a fairly flat day.</p>
            <p>At one point my planning didn't pay off and the canal path I thought would be a lovely detour from the roads turned to a grassy verge once I went back briefly into Wales. I didn't mind the walk since this eased the pain but did make peddling hard again. Nevertheless I plowed on, easing off when it got too painful and pushing on when it felt good. The Biofreeze will be used a lot this evening.</p>
            <p>The scenery was fairly uneventful today though I was glad of the shared bike path along the bypass around Chester. Those roads are huge and class as A roads!</p>
            <p>On the run in to Runcorn the national cycle route I was hoping to follow to the bridge into Widnes got totally cut off by epic roadworks without a signed diversion to join up to the route on the other side. This turned into at least an additional hour of being lost in Runcorn trying to find my way to the very poorly sign posted pedestrian/cycle route across the bridge. It's a shame it added so much time as I'd hoped to spend more time in Widnes since my family 2+ generations ago hail from this town and this was my first time here. There's not really much to see but its always nice to get a feel for a place.</p>
            <p>So the lesson from today is to take care of your knees! I dislocated my right knee a few years ago but cycling has generally strengthened it again. I don't know why it's my left causing me such bother now but I need to be careful.</p>
            <p>Lie in tomorrow and an easy run into Cleveleys to visit a friend. I'm *so* looking forward to this day! So many childhood memories of Lytham St Anne's and Blackpool and I get to see it all again.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 6 Widnes to Cleveleys
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Today was due to be a blast from the past with a return to a childhood holiday place - Blackpool. It's not ordinarily on a LEJOG route but a friend from London had moved there and I hadn't seen her in 10 months so it became the perfect opportunity to visit and break the trip in two with a day off.</p>
            <p>The route there was relatively flat (compared to all other days) and I started out quick though trying to follow further cycle path diversions which had scuppered my route the previous day into Runcorn and Widnes.</p>
            <p>The entire trip so far has taken advantage of canal paths to varying degrees of success. Sometimes they're only walkable and sometimes they've been fab but I'm so relieved I changed my tyres from Gatorskins to a set of Marathon Plus tyres before I set off. They're really tough and have held up on practically off-roading paths, including some of the canal paths. If you're planning on doing this trip I'd recommend changing to these standard of “puncture resistant” tyres- they'll serve you well.</p>
            <p>The first third of the day went very quickly, the middle third a lot slower because of said navigational canal path issues and the last third from Preston onwards was fab.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 7 Cleveleys to Keswick
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>The rest day really helped with the knee pain I've been experiencing since Hereford and my legs felt tired but in great form once back on the bike.</p>
            <p>When staying with my friend we actually left Cleveleys and went east to a caravan park to get some quiet to have a real catch up so when I left in the morning my route was about 5 miles shorter than planned but that's not a total disaster. It was a quick and fairly flat start and I cheekily tucked in for a half a mile behind a group from Cleveleys cycle club until the road started to undulate and I fell back. Even though my knee felt better I wasn't going to push my luck.</p>
            <p>I soon got to Lancaster (stunning- another one to return to), pumped up my tyres in a local bike shop and carried on through.</p>
            <p>I had another route fail with a non-cyclable canal path so I detoured through hillier countryside to Kendal. These route changes aren't a problem in fact it makes it more exciting. It's useful to do some problem solving to break up the solitude in your head.</p>
            <p>Lunch in Kendal marked just past half way through the trip on mileage so I had some cake too but like the seemingly common pattern of the last week I couldn't finish it! What have I become?! I couldn't finish a piece of chocolate fudge cake. Disaster.</p>
            <p>The last 40 miles were going to be tough going into the Lakes, through Windemere and up to Keswick. The cycle path comes and goes along here and the road can be busy but so long as you take the lane and signal for people to pass when it's safe then you'll be ok. The views are stunning and I can't wait to look back at the footage.</p>
            <p>My Garmin crashed around Rydal/Grasmere and lost all data from Kendal up to there which is a shame but I didn't let it bother me as much as I have in the past since I couldn't do anything about it. I knew how far the day was so I could keep a tally.</p>
            <p>Not far after Grasmere you get your first taste of the long dragging hills to come further north in Scotland. I avoided Shap by going into the Lakes but this is still a good challenge for the legs and the mind. Thankfully I've done some good training on the Scottish hills so I got a good pace on and kept my head down, not looking up to tempt or torture yourself with how far there is to go. Just get those legs at a good cadence and keep going. It's so worth the view at the top.</p>
            <p>Bikes are directed west of Thirlmere and I'd recommend taking this advice. I came across 3 cars and it's pretty much flat so a great way to pick up some speed again if you can resist taking photos of the fantastic view! From there its not far into Keswick. What a beautiful little gem of a place.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 8 Keswick to Moffat
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>It was a tough long climb out of Keswick to start the dayand without breakfast that's no mean feat! My hostel was just a room (though it did have laundry facilities thankfully) so I had planned to have brunch in Carlisle, though that was 27 miles away.</p>
            <p>My body was used to cycling on no food as I used to eat when I got to work when I commuted in London. I plodded along, nursing my knee which flared up again today taking in the scenery. The rain clouds hovered and I could see further up the valley a mist which brought me rain for the first time on a cycling day on this trip. 7 days without rain and mostly wall to wall sunshine was never going to last! The joy of being on a single track road up in the Lake District is seeing great wildlife. Today I saw a red squirrel! A very rare feat for a southerner like me and the first wild one I've seen in my entire life. He (or she) ran out in front of me, I slammed on the brakes and tried to take a photo. He was just as inquisitive about me as I was about him so he poked his head up over a rock to look at me and then scurried away.</p>
            <p>Full of happiness I carried on through the (annoying) gates about every few hundred metres along the road. It made for slow progress as in the rain and with the heavy bike I needed to dismount each time.</p>
            <p>The road started to descend into Carlisle and I spotted a Sainsburys just in town with a cafe. Perfect brunch. The rain had also made me really cold so I put on the light fleece I had with me to wear in the evenings. As this would then be unwearable later on, I purchased a brilliant wooly knit. It's so warm, I'm glad of the swap.</p>
            <p>Onwards to Gretna and the border of Scotland - a much better welcome than Wales gave. I followed either the NCN7 or NCN74 all the way to Moffat which is essentially a 30 mile climb running parallel with the motorway. My knee and undercarriage was killing me by the time I got to Moffat so a shower, good dinner and early night was on the cards before the climb up to Glasgow tomorrow.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 9 Moffat to Glasgow
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Because of my move to Glasgow after planning this trip, instead of being one of my longest days it became the shortest. Once I got back onto roads I knew I sped up, skipped lunch and got back home at 14.30.</p>
            <p>It's quite a boring ride up the B7078 so the only notable thing which happened was bumping into the two men who took my photo at Lands End. They hadn't had a day break and were being supported by the wife of one of them and so sped up ahead of me after our parting but it was surprisingly good to see them. They recognised me and hailed me down to a stop. We're due to finish on the same day so it'll be funny if we meet again at the end, though they're so much quicker than me I doubt it.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 10 Glasgow to Fort William
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>The longest day is finally upon us! I had company today and since there are only two trains back from Fort William a day we *had* to be in Fort William by 5pm. I made the decision to leave home at 6am and meet him along the NCN7 where it was best for him and on we continued for the 108 mile journey.</p>
            <p>This is my favourite route I've ever cycled (having done the exact route as training). The road through Glencoe is just unbelievable- watch out for the footage once I'm home.</p>
            <p>The route is pretty much flat until Tarbet half way up Loch Lomond so the first 40 miles went quickly. On such a huge day its so important to remember to eat and drink regularly as you don't want it to get to the point where you're starving or with dry lips because then it takes time to digest and recover.</p>
            <p>From doing the route before I knew where we should be by when to keep good time for the train (plus 45 minutes leaving at 6am rather than 6.45). We were an hour ahead of ourselves getting to Balloch (at the bottom of Loch Lomond) and an hour ahead at lunch at Tyndrum. Time was massively lost in the second half of the day from Tyndrum to Fort William but not enough to be a worry. My knee is requiring painkillers now and my friend kept getting cramp so the stops became more regular. The A82 can be very busy but most road users were really respectful and overtook really well (except the odd idiot). Well done everyone!</p>
            <p>The last 15 miles were the longest of my life especially once your Garmin hits 100+ miles and stops showing decimal point progression. But we got there and powered through and ended up at McDonalds before I went to check in at my hostel.</p>
            <p>Fantastic day but going to be really nursing my knee all the way to the end now. 231 miles and 3 days to go…</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 11 Fort William to Inverness
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>What a bloody good but hard day. It's amazing how a day can switch from being very bad to incredible. Overnight my knee had hit a new low. I couldn't lift my leg onto the bed without lifting it with my hands… but I had the best 10 hour sleep. I was staying in a backpackers hostel in a dorm of 6. I'd chosen it for the price (£17.50) and when I got there I was slightly worried about how well I'd sleep but I had fallen asleep early at 9 and barely woke again til 7am even when others came into the room. Sleep definitely aids general recovery!</p>
            <p>I stopped at the Commando Memorial just past Spean Bridge to pay my respects, take a few photos and appreciate that it has the most stunning view of Ben Nevis. The Wikipedia article on this memorial is an informative read specifically on why it's place where it is.</p>
            <p>The knee pain brought me to tears at 20 miles when I had sat on the ground in a layby and I tried to stand. So once I got to Fort Augustus 10 teary miles later I bought some strong Ibuprofen and some cheesy chips in an attempt to bring me back up.</p>
            <p>I'd recommend 400mg of Ibuprofen to everyone about to tackle General Wade's Military Road because my knee pain disappeared and I got up it without getting off and walking. I went from not being able to put any weight on that peddle at all to climbing up almost 1200ft. It's the hardest, longest, steepest (in places) climb I've ever done and the euphoria I felt when I got to the top was unlike anything I'd felt on the bike before. I celebrated to loudly with a fist pump that a man in a car parked at the top celebrated with me. It honestly felt left everything I had done on this trip up until this point was to prepare for that climb. Happy hard times. The rain had started to fall half way up so I put on a fleece under my jacket to descend quickly down the other side. According to the data that climb took me an hour and 10 minutes (for about 5 miles) so I needed to make up the time.</p>
            <p>From then on I took the road which followed the Loch (there's the B road option which takes you away from it but it all joins up before Inverness).</p>
            <p>The road following the Loch takes you past the Falls of Foyer which was a lot of steps down a hill. I debated it for a few seconds and decided there was no way I could go past this and miss it since I'm supposed to be seeing the country so down I went. It's very beautiful and I recommend the stop if you pass (it's free).</p>
            <p>It was still raining so I pushed on towards Inverness. There weren't anymore major climbs but plenty of undulations to take me back down into the small chainring. At one point I noticed the time felt wrong and upon closer inspection I realised the Garmin had frozen 20 minutes earlier. I panicked, restarted it and kept my fingers crossed (and anger at bay) that no data would have been lost again like in the Lakes. Looking at Strava I dont think anything was lost but as a precaution I'm no longer using the map function for the rest of the trip once I'm out of Inverness tomorrow.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 12 Inverness to Altnaharra
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>I set off in good time today since I knew the milage would be 80ish and I still struggled to get to the hotel just after 6pm. The tank is so definitely empty! I saw a few cyclists out on the road today all of whom looked like they were on their way to JOG. As I passed through Lairg with 20 miles to go I saw a van emblazoned with “Lands End to John O'Groats trips” on the side and I was jealous of (a) them finishing for the day and (b) having support. The jealousy has gone now since I can be so proud of myself for being able to do this self supported.</p>
            <p>Those last 20 miles to Altnaharra are some of the most desolate and remote I've ever been to in my life. A head wind kicked in just as the land opened up and the incline increases just enough to be an effort. This bordered on the same level of mental torture as day 2 in Devon as the miles crawled by with no identifiable landmarks and a headwind bringing you down to 9mph. Finally I went over the top of the hill and started a speedy descent topping out at 30mph in my desperation to get to the hotel.</p>
            <p>I'm so remote and in a valley that there's no phone signal so now I've updated everyone on my existence and presence at the hotel its a very quiet evening of detachment from the real world before the last (hilly) day tomorrow and then the return to reality. Back to work on Monday…</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Day 13 Altnaharra to John O'Groats
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>There was supposed to have been a second person in the LEJOG cabin where I was staying but they hadn't turned up by morning which is always a bit of a worry. I asked the hotel owner if they'd heard from them (not that I knew the person who was supposed to be there, but it's part of the camaraderie of cycling) and they hadn't. I hope that they're OK and just decided to stop at Lairg or something.</p>
            <p>Anyway, I was quite excited to get going that morning and took a tip from the hotel owner to take the right hand turn at the cross roads just after leaving Altnaharra to bypass Tongue and one of the climbs of the day. It turned into a really quiet road filled with roaming sheep although I did feel like I was getting eaten alive going past those lochs. There was nothing you could do to avoid those midges!</p>
            <p>Once past Bettyhill there were a few long climbs which seemed wholly unnecessary for the final day but once past those you were flying along. I bumped into the red support van I saw the day before quite a few times and when I stopped for lunch at a tiny pub there was a congregation of the cyclists with that trip. Turns out it was their official pit stop for lunch and they had a set menu of soup and sandwiches. Thankfully since I was by myself I was allowed food off the normal menu and had a brilliant lunch of chips and sausages while the pub labrador looked up at me with begging eyes and a sniffing nose. This must've been precisely what my engine needed (plus the can of full fat coke) to power me to the end. My fear at the day being hilly was a misinterpretation of the profile since any undulations from this point on really weren't bad at all. Once I got to Thurso I let my parents know I was about 20 miles away and I would be a maximum of two hours (not knowing entirely what the terrain would be like). Apparently I did it in about 1 hour 15 minutes, thankfully they had anticipated my increase in speed.</p>
            <p>I got to John O'Groats just after 3pm, took some photos, got a hug off one stranger and a handshake off another. The two guys I'd met at Lands End and bumped into just outside of Glasgow turned up about half an hour later which was a lovely circular way to wrap up a trip.</p>

          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      </div>
  );
}

export default LEJOGBlog