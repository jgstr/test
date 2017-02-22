// Javascript console scripts:

// Bring next error into view:

document.getElementsByClassName("campaign-header_name-error ion-alert-circled")[0].scrollIntoView(true);

// Amount of Campaign errors:

var camp_errors = document.getElementsByClassName("campaign-header_name-error ion-alert-circled");
console.log(camp_errors.length);

// Finds no spending:

var spanText = document.getElementsByClassName("text-indicator is-active");
var noSpend = 0;
for(var i = 0; i < spanText.length; i++) { if(spanText[i].innerHTML === "∅") { noSpend = noSpend + 1; console.log(spanText[i].innerHTML); }};
console.log(noSpend);


// Finds Error campaigns with No Spend: Still working on that....