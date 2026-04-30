(function(){
var translations={
en:{
"nav.events":"Events",
"nav.upcoming":"Upcoming Events",
"nav.restaurant":"Restaurant",
"nav.about":"About Us",
"cta.bookNow":"Book Now",
"cta.bookTable":"Book a Table",
"cta.upcoming":"Upcoming Events",
"cta.viewMenu":"View Menu",
"footer.events":"Events",
"footer.residence":"Residence Events",
"footer.upcoming":"Upcoming Events",
"footer.restaurant":"Restaurant",
"footer.about":"About Us",
"footer.nightclubLabel":"Club Tables",
"footer.nightclubInfo":"Club Tables: +39 328 736 0528",
"footer.restaurantLabel":"Restaurant Tables",
"footer.restaurantInfo":"Restaurant Tables: +39 346 105 6240",
"footer.bookClub":"Book Now",
"footer.bookRestaurant":"Book Now",
"footer.privacy":"Privacy Policy",
"footer.cookie":"Cookie Policy",
"legal.privacyTitle":"Privacy Policy",
"legal.cookieTitle":"Cookie Policy",
"booking.close":"Close",
"booking.kicker":"Reservations",
"booking.title":"Book Now",
"booking.nightclubTable":"Book Nightclub Table",
"booking.restaurantTable":"Book Restaurant Table",
"booking.nightclubDetail":"INFO: +39 328 736 0528",
"booking.restaurantDetail":"INFO: +39 346 105 6240",
"home.eventsTitle":"RESIDENCE EVENTS",
"home.upcomingTitle":"UPCOMING EVENTS",
"restaurant.heroTitle":"Restaurant",
"restaurant.heroCopy":"Seafood, candlelight and Mediterranean ease beside the water. A refined dinner mood before the night begins.",
"restaurant.introTitle":"Dinner By The Sea",
"restaurant.introCopy":"Le Club Restaurant is built around clean coastal flavors, relaxed service and the quiet rhythm of the shoreline. The experience is elegant but never heavy: fresh seafood, seasonal produce, chilled wines and tables designed for long summer evenings.",
"restaurant.featureSeaTitle":"Seafood Identity",
"restaurant.featureSeaCopy":"Fresh fish, shellfish and sea-led plates with a Mediterranean point of view.",
"restaurant.featureAtmosphereTitle":"Coastal Atmosphere",
"restaurant.featureAtmosphereCopy":"Open-air dining, soft light and a calm seaside setting from aperitivo to dinner.",
"restaurant.featureNightTitle":"Night Flow",
"restaurant.featureNightCopy":"A seamless path from restaurant table to club energy for private groups and late plans.",
"restaurant.reserveTitle":"Reserve A Table",
"restaurant.reserveCopy":"For dinner, private groups and seaside celebrations.",
"about.title":"About Us",
"about.kicker":"Le Club South Italy",
"about.copy":"Le Club is a nightlife destination in South Italy, built around music, atmosphere and unforgettable nights. A place where sound, people and energy come together to create moments that stay beyond the night."
},
it:{
"nav.events":"Eventi",
"nav.upcoming":"Prossimi Eventi",
"nav.restaurant":"Ristorante",
"nav.about":"Chi Siamo",
"cta.bookNow":"Prenota Ora",
"cta.bookTable":"Prenota un Tavolo",
"cta.upcoming":"Prossimi Eventi",
"cta.viewMenu":"Vedi Menù",
"footer.events":"Eventi",
"footer.residence":"Eventi Residence",
"footer.upcoming":"Prossimi Eventi",
"footer.restaurant":"Ristorante",
"footer.about":"Chi Siamo",
"footer.nightclubLabel":"Tavoli Discoteca",
"footer.nightclubInfo":"Tavoli Discoteca: +39 328 736 0528",
"footer.restaurantLabel":"Tavoli Ristorante",
"footer.restaurantInfo":"Tavoli Ristorante: +39 346 105 6240",
"footer.bookClub":"Prenota Ora",
"footer.bookRestaurant":"Prenota Ora",
"footer.privacy":"Privacy Policy",
"footer.cookie":"Cookie Policy",
"legal.privacyTitle":"Privacy Policy",
"legal.cookieTitle":"Cookie Policy",
"booking.close":"Chiudi",
"booking.kicker":"Prenotazioni",
"booking.title":"Prenota Ora",
"booking.nightclubTable":"Prenota Tavolo Nightclub",
"booking.restaurantTable":"Prenota Tavolo Ristorante",
"booking.nightclubDetail":"INFO: +39 328 736 0528",
"booking.restaurantDetail":"INFO: +39 346 105 6240",
"home.eventsTitle":"EVENTI RESIDENT",
"home.upcomingTitle":"PROSSIMI EVENTI",
"restaurant.heroTitle":"Ristorante",
"restaurant.heroCopy":"Pesce, luce morbida e atmosfera mediterranea sul mare. Una cena raffinata prima che la notte inizi.",
"restaurant.introTitle":"Cena sul Mare",
"restaurant.introCopy":"Le Club Restaurant nasce intorno a sapori costieri puliti, servizio rilassato e il ritmo quieto della riva. Un'esperienza elegante ma mai pesante: pesce fresco, prodotti di stagione, vini freddi e tavoli pensati per lunghe sere d'estate.",
"restaurant.featureSeaTitle":"Identità di Mare",
"restaurant.featureSeaCopy":"Pesce fresco, crostacei e piatti guidati dal mare con una visione mediterranea.",
"restaurant.featureAtmosphereTitle":"Atmosfera Costiera",
"restaurant.featureAtmosphereCopy":"Cena all'aperto, luce soffusa e un contesto sul mare dall'aperitivo alla cena.",
"restaurant.featureNightTitle":"Flusso Notturno",
"restaurant.featureNightCopy":"Un passaggio naturale dal tavolo del ristorante all'energia del club per gruppi privati e programmi late-night.",
"restaurant.reserveTitle":"Riserva un Tavolo",
"restaurant.reserveCopy":"Per cena, gruppi privati e celebrazioni sul mare.",
"about.title":"Chi Siamo",
"about.kicker":"Le Club South Italy",
"about.copy":"Le Club è una destinazione nightlife nel Sud Italia, costruita attorno a musica, atmosfera e notti indimenticabili. Un luogo dove suono, persone ed energia si incontrano per creare momenti che restano oltre la notte."
}
};
function chosenLanguage(){
var urlLang=new URLSearchParams(window.location.search).get("lang");
if(urlLang==="it"||urlLang==="en") return urlLang;
var stored=localStorage.getItem("leclub-lang")||localStorage.getItem("leclub_language");
if(stored==="it"||stored==="en") return stored;
var doc=(document.documentElement.lang||"").slice(0,2).toLowerCase();
return doc==="en"?"en":"it";
}
function translateAttribute(el,attr,key,lang){
var value=translations[lang][key];
if(typeof value==="string") el.setAttribute(attr,value);
}
function applyLanguage(lang){
if(!translations[lang]) lang="it";
document.documentElement.lang=lang;
localStorage.setItem("leclub-lang",lang);
localStorage.setItem("leclub_language",lang);
document.querySelectorAll("[data-i18n]").forEach(function(el){
var key=el.getAttribute("data-i18n");
var value=translations[lang][key];
if(typeof value==="string") el.textContent=value;
});
document.querySelectorAll("[data-i18n-aria-label]").forEach(function(el){
translateAttribute(el,"aria-label",el.getAttribute("data-i18n-aria-label"),lang);
});
document.querySelectorAll("[data-i18n-title]").forEach(function(el){
translateAttribute(el,"title",el.getAttribute("data-i18n-title"),lang);
});
document.querySelectorAll(".lang-option").forEach(function(btn){
var active=btn.dataset.langValue===lang;
btn.classList.toggle("active",active);
btn.setAttribute("aria-checked",String(active));
btn.setAttribute("aria-current",String(active));
});
}
function initLanguage(){
applyLanguage(chosenLanguage());
}
if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",initLanguage);
}else{
initLanguage();
}
document.addEventListener("click",function(event){
var btn=event.target.closest(".lang-option[data-lang-value]");
if(!btn) return;
applyLanguage(btn.dataset.langValue);
});
window.LeClubI18n={applyLanguage:applyLanguage,translations:translations};
})();
