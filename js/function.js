//set random background color
var num = Math.floor((Math.random()*1000000)+1);
document.body.style.backgroundColor = "#"+num;

var quoteSource=[
{
  quote: "The most beloved action to Allah's Apostle was that which is done continuously and regularly even though it were little",
  source:"Hadith, Sahih Bukhari",
  category: ""
},
{
  quote: "You cannot attain to righteousness unless you spend (in charity) out of those things which you love",
  source:"Quran, 3:91",
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
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "None of you has faith until he loves for his brother what he loves for himself",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "The angel Gabriel continued to enjoin upon me good treatment of the neighbour, so much so that I thought he would make him heir to one's property",
 source:"Hadith, Sahih Bukhari",
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
 quote: "Protect yourselves from the fire, even with half a date",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "Whoever does not show mercy to people, Allah will not show mercy to him",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "The Muslim is the brother of his fellow Muslim. He does not wrong him, let him down or despise him",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "Whoever believes in Allah and the Last Day, let him uphold ties of kinship",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "Whoever believes in Allah and the Last Day, let him honour his guest",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "No person conceals (the fault of) another in this world but Allah will conceal him (his faults) on the day of resurrection",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "The upper hand (the one that gives) is better than the lower hand (the one that receives)",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "Among the best of you are those who are best in attitude",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "Beware of stinginess, for stinginess destroyed those who came before you",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "The one who tells another about something good will have a reward like that of the one who does it",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "He is not one of us who does not show compassion to our little ones or respect our older ones",
 source:"Hadith, at-Tirmizi",
  category: ""
},
{
 quote: "Be easy-going and do not be harsh; give glad tidings and do not put people off",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "Allah likes that when one of you does anything he should do it properly",
 source:"Hadith, at-Tabarani",
  category: ""
},
{
 quote: "Faith has seventy-odd branches, and modesty (al-haya’) is a branch of faith",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "The likeness of the one who remembers his Lord and the one who does not is that of the living and the dead",
 source:"Hadith, Sahih Bukhari",
  category: ""
},
{
 quote: "Whoever says, Subhanallahi wa bihamdihi (Glory and praise be to Allah), a palm tree will be planted for him in Paradise",
 source:"Hadith, at-Tirmizi",
  category: ""
},
{
 quote: "Whoever removes a worldly hardship from a believer, Allah will remove one of the hardships of the Day of Resurrection from him",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "Whoever grants respite to (a debtor) who is in difficulty, Allah will grant him relief in this world and in the Hereafter",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "Allah will help a person so long as he is helping his brother",
 source:"Hadith, Sahih Muslim",
  category: ""
},
{
 quote: "In (kindness to) every being there is reward",
 source:"Hadith, Sahih Bukhari",
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
 quote: "Allah has forbidden to you disobedience towards mothers",
 source:"Hadith, Bukhari",
  category: ""
}
,
{
 quote: "Allah has forbidden to you disobedience towards mothers",
 source:"Hadith, Bukhari",
  category: ""
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
      swal({title: "Set This As Homepage!\n",   text: "Steps for your Chrome browser: \n 1) Click the menu button and then click Settings  \n 2) Under 'On startup', Select 'Open a specific page or set of pages'  \n 3) Click Set pages \n 4) Click the 'Use current pages' button \n 4) That's it!",   type: null,   confirmButtonText: "Cool" } );
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






