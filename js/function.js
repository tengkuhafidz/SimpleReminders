//set random background color
var num = Math.floor((Math.random()*1000000)+1);
document.body.style.backgroundColor = "#"+num;

var quoteSource=[
{
  quote: "The most beloved action to Allah's Apostle was that which is done continuously and regularly even though it were little",
  source:"Hadith, Bukhari",
  category: ""
},
{
  quote: "You cannot attain to righteousness unless you spend (in charity) out of those things which you love",
  source:"Quran, 3:91",
  category: ""
},
{
  quote: "And whatever of blessings and good things you have, it is from Allah",
  source:"Quran, 16:53",
  category: "grateful"
},
{
  quote: "If you are grateful, I will surely increase you [in favor]",
  source:"Quran, 14:7",
  category: "grateful"
},
{
  quote: "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me",
  source:"Quran, 2:187",
  category: ""
},
{
  quote: "Be maintainers of justice and bearers of true witness for Allah, even if it (the truth) goes against your own selves or parents or relatives or someone who is rich or poor",
  source:"Quran, 4:135",
  category: ""
},
{
 quote: "Do no favour seeking gain",
 source:"Quran, 74:6",
  category: ""
},
{
  quote: "The servants of the Beneficent (Allah) are those who walk on the earth in humility",
  source:"Quran, 25:63",
  category: ""
},
{
  quote: "Allah loves those who are patient",
  source:"Quran, 3:145",
  category: ""
},
{
  quote: "Pardon (people) and overlook (their faults). Don't you love that Allah should forgive you",
  source:"Quran, 24:22",
  category: ""
},
{
  quote: "Do good to others, surely Allah loves those who do good to others",
  source:"Quran, 2:195",
  category: ""
},
{
  quote: "When you are greeted with a greeting, greet with one better than it, or return it (in the same terms at least)",
  source:"Quran, 4:86",
  category: ""
},
{
  quote: "Those to whom men said: people have gathered against you, so fear them; but this increased their faith, and they said: Allah is sufficient for us and He is an excellent Guardian",
  source:"Quran, 3:173",
  category: ""
},
{
 quote: "Religion is easy, but any one who exerts himself too much in religious devotions will get overcome by it; so you should just act rightly, and keep to the mean, and be of good cheer, and ask for Allah's help morning, evening, and a part of the night",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "None of you has faith until he loves for his brother what he loves for himself",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "The angel Gabriel continued to enjoin upon me good treatment of the neighbour, so much so that I thought he would make him heir to one's property",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "When you smile to your brother's face, it is charity",
 source:"Hadith, Sunan al-Tirmidhi",
  category: ""
},
{
 quote: "Since the time I accepted Islam, the Prophet (peace be upon him) never once failed to notice me. Whenever he saw me, he would smile at me",
 source:"Hadith, Sahih Bukhari and Sahih Muslim",
  category: ""
},
{
 quote: "Verily Allah does not look at your outward form and wealth, rather he looks at your hearts and deeds",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "Protect yourselves from the fire, even with half a date (in charity)",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "Whoever does not show mercy to people, Allah will not show mercy to him",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "The Muslim is the brother of his fellow Muslim. He does not wrong him, let him down or despise him",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "Whoever believes in Allah and the Last Day, let him uphold ties of kinship",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "Whoever believes in Allah and the Last Day, let him honour his guest",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "No person conceals (the fault of) another in this world but Allah will conceal him (his faults) on the day of resurrection",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "The upper hand (the one that gives) is better than the lower hand (the one that receives)",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "Among the best of you are those who are best in attitude",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "Beware of stinginess, for stinginess destroyed those who came before you",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "The one who tells another about something good will have a reward like that of the one who does it",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "He is not one of us who does not show compassion to our little ones or respect our older ones",
 source:"Hadith, at-Tirmizi",
  category: ""
},
{
 quote: "Be easy-going and do not be harsh; give glad tidings and do not put people off",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "Allah likes that when one of you does anything he should do it properly",
 source:"Hadith, at-Tabarani",
  category: ""
},
{
 quote: "Faith has seventy-odd branches, and modesty (al-haya’) is a branch of faith",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "The likeness of the one who remembers his Lord and the one who does not is that of the living and the dead",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "Whoever says, Subhanallahi wa bihamdihi (Glory and praise be to Allah), a palm tree will be planted for him in Paradise",
 source:"Hadith, at-Tirmizi",
  category: ""
},
{
 quote: "Whoever removes a worldly hardship from a believer, Allah will remove one of the hardships of the Day of Resurrection from him",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "Whoever grants respite to (a debtor) who is in difficulty, Allah will grant him relief in this world and in the Hereafter",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "Allah will help a person so long as he is helping his brother",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "In (kindness to) every being there is reward",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "He does not thank Allah who does not thank the people",
 source:"Hadith, Abi Dawood",
  category: ""
},
{
 quote: "Upholding ties of kinship increases one’s lifespan",
 source:"Hadith, at-Tabarani",
  category: ""
},
{
 quote: "Doing acts of kindness will protect one from calamity and a bad end",
 source:"Hadith, at-Tabarani",
  category: ""
},
{
 quote: "Every act of kindness is charity",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "All the sons of Adam err, and the best of those who err are those who repent",
 source:"Hadith, at-Tirmizi",
  category: "motivation"
},
{
 quote: "Allah has forbidden to you disobedience towards mothers",
 source:"Hadith, Bukhari",
  category: ""
},
{
quote: "The best of you are those who when seen are a means of Allah being brought to mind.",
 source:"Hadith, at-Tirmizi",
  category: ""
},
{
 quote: "Allah is Kind and He loves kindness. Kindness is not to be found in anything but that it adds to its beauty",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "There is a polish for everything that takes away rust; and the polish for the heart is the remembrance of Allah.",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "The most excellent Jihad is that for the conquest of self.",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "Who are the learned? Those who practice what they know.",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "A true Muslim is thankful to Allah in prosperity, and resigned to His will in adversity.",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "No man is a true believer unless he desires for his brother that, what he desires for himself.",
 source:"Hadith, Bukhari &  Muslim",
  category: ""
},
{
 quote: "Be not like the hypocrite who, when he talks, tells lies; when he gives a promise, he breaks it; and when he is trusted, he proves dishonest.",
 source:"Hadith, Bukhari & Muslim",
  category: ""
},
{
 quote: "Live in this world as if you will live here forever; prepare for the hereafter as if you will die tomorrow",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "The Muslim is one from whose tongue and hand other Muslims are safe",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "The best of alms is that, which the right hand gives and the left hand knows not of",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "Pray more often. For every prostration that you perform Allah will raise your position by one degree",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "Every Deen has an innate character. The character of Islam is modesty",
 source:"Hadith, Abu Dawud",
  category: ""
},
{
 quote: "Take advantage of five before five: your youth, before old age, your health, before sickness; your wealth, before poverty; your free time before becoming busy; and your life, before your death",
 source:"Hadith, Ahmed",
  category: ""
},
{
 quote: "And if you could count the graces of Allah, never could you be able to count them",
 source:"Quran, 14:34",
  category: ""
},
{
 quote: "Allah does not burden a soul more than it can bear",
 source:"Quran, 2:286",
  category: ""
},
{
 quote: "Allah will not give mercy to anyone except those who give mercy to others",
 source:"Hadith, Tirmizi",
  category: ""
},
{
 quote: "When you see a person who has been given more than you in money and beauty, look to those, who have been given less",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "Remember Me (Allah) , and I will remember you",
 source:"Quran, 2:152",
  category: ""
},
{
 quote: "The best richness is the richness of the soul",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "There are two blessings which many people lose: health and free time for doing good",
 source:"Hadith, Bukhari",
  category: ""
},
{
 quote: "Indeed, Allah will not change the condition of a people until they change what is within themselves",
 source:"Quran, 13:11",
  category: ""
},
{
 quote: "So verily, with hardship, there is ease",
 source:"Quran, 94:5",
  category: ""
},
{
 quote: "He will not enter Paradise whose neighbour is not secure from his wrongful conduct",
 source:"Hadith, Muslim",
  category: ""
},
{
 quote: "The best (Jihad) is (to speak) word of justice to an oppressive ruler",
 source:"Hadith, Abu Dawud",
  category: ""
},
{
 quote: "A believer may achieve the status of one who regularly fasts (for religious reasons) during the day and spends the night in prayer, through his good manners",
 source:"Hadith, Riyadhus-Solihin",
  category: ""
},
{
 quote: "Avoid jealousy, for it destroys good deeds as fire destroys wood",
 source:"Hadith, Riyadhus-Solihin",
  category: ""
},
{
 quote: "The closest any worshipper can be to His Lord is during the last part of the night, so if you can be amongst those who remember Allah at that time, then do so",
 source:"Hadith, Tirmizi",
  category: ""
},
{
 quote: "A supplication made between the Adhan and Iqama is not rejected",
 source:"Hadith, Tirmizi",
  category: "supplication"
},
{
 quote: "The nearest a slave can be to his Lord is when he is prostrating, so invoke (supplicate) Allah (SWT) much in it",
 source:"Hadith, Muslim",
  category: "supplication"
},
{
 quote: "Two will not be rejected, supplication when the Adhan (call of prayer) is being called, and at the time of the rain",
 source:"Hadith, Abu Dawud",
  category: "supplication"
},
{
 quote: "Beware of the supplication of the unjustly treated, because there is no shelter or veil between it (the supplication of the one who is suffering injustice) and Allah (SWT)",
 source:"Hadith, Bukhari & Muslim",
  category: "supplication"
},
{
 quote: "Three men whose dua is never rejected (by Allah) are: the fasting person until he breaks his fast (in another narration, when he breaks fast), the just ruler, and the one who is oppressed",
 source:"Hadith, Tirmizi",
  category: "supplication"
},
{
 quote: "Three supplications will not be rejected (by Allah (SWT)), the supplication of the parent for his child, the supplication of the one who is fasting, and the supplication of the traveler",
 source:"Hadith, Tirmizi",
  category: "supplication"
},
{
 quote: "When you visit the sick or the dead, then say good, because the angels say 'Ameen' to whatever you say",
 source:"Hadith, Muslim",
  category: "supplication"
},
{
 quote: "Which du'a is heard (by Allah)?' He answered, 'At midnight and at the end of every obligatory prayer",
 source:"Hadith, Tirmizi",
  category: "supplication"
},
{
 quote: "There is no believing servant who supplicates for his brother in his absence where the angels do not say, 'the same be for you'",
 source:"Hadith, Muslim",
  category: "supplication"
}
];


//display random hadith
function randomHadith(){
  var sourceLength = quoteSource.length;
  var randomNumber= Math.floor(Math.random()*sourceLength);

  //set a new quote
  var newQuoteTitle = quoteSource[randomNumber].title;
  var newQuoteText = quoteSource[randomNumber].quote;
  var newQuoteGenius = quoteSource[randomNumber].source;
  // console.log(newQuoteText,newQuoteGenius);
  var quoteContainer = $('#quoteContainer');
  quoteContainer.html('<h3>\"'+newQuoteText+'\"</h3>'+'<p id="quoteGenius">'+'<span style="font-size:0.9em">('+newQuoteGenius+')</span></p>');

  //arrNum
  $('#arrNum').val(randomNumber);
  var num = Math.floor((Math.random()*1000000)+1);
document.body.style.backgroundColor = "#"+num;
 
  document.getElementById('tweetShare').href = "https://twitter.com/intent/tweet?text=\""+newQuoteText+"\" (" + newQuoteGenius + ") - via http://simplesunnah.sg"
  document.getElementById('whatsappShare').href = "whatsapp://send?text=\""+newQuoteText+"\" (" + newQuoteGenius + ") - via http://simplesunnah.sg"

};



function hompageThis(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
          swal({title: "Make a shortcut for this page!\n",   text: "Since you're on mobile, make this page as shortcut. \n Most mobile browsers allow you to set a page as shortcut. \n   \n e.g - on Chrome Mobile Browser: go to Menu and Click 'Add to Home screen' \n on Samsung Mobile Browser : click 'MORE' then Click 'Add shortcut on home screen' \n 4) That's it!",   type: null,   confirmButtonText: "Cool" } );
  }
  else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {

    var ffversion = new Number(RegExp.$1) ;  
    swal({title: "Set This As Homepage!\n",   text: "Steps for your Firefox browser: \n 1) Click the menu button  \n 2) Go to Preferences > General Panel  \n 3) Under Home Page, click the 'Use Current Page' button \n 4) That's it!",   type: null,   confirmButtonText: "Cool" } );

  }

  else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    var chromeversion = new Number(RegExp.$1);
          // capture x.x portion and store as a number
      swal({title: "Set This As Homepage!\n",   text: "Steps for your Chrome browser: \n 1) Add a chrome extension called New Tab Redirect (https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna/related)  \n 2) Click on 'Set Options'  \n 3) Type in 'simplesunnah.sg' in the input field \n 4) Click the 'Save' button  \n 4) That's it!",   type: null,   confirmButtonText: "Cool" } );
  }
  
  else if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { 

    var oprversion = new Number(RegExp.$1) 

    swal({title: "Set This As Homepage!\n",   text: "Steps for your Opera browser: \n 1) Go to Opera > Preferences > General \n 2) Under Homepage, select 'Use current'  \n 3) That's it!",   type: null,   confirmButtonText: "Cool" } );

  }
  else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    var safariversion = new Number(RegExp.$1);
    swal({title: "Set This As Homepage!\n",   text: "Steps for your Safari browser: \n 1) Go to Safari > Preferences > General \n 2) Under Homepage, click the 'Set to Current Page' button \n 3) Under the 'New windows & tabs open with' dropdown, select Homepage \n 4) That's it!",   type: null,   confirmButtonText: "Cool" } );

  }
  else {

    swal({title: "Sorry!",   text: "We do not have the steps to set this as homepage for your browser yet! \n Im sure you can figure it out. hehe.",   type: null,   confirmButtonText: "Cool" } );
  }

}






