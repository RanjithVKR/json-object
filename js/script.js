var Allmobiles=document.querySelector(".mobiles");

var mobileSection=document.querySelector(".mobiles-section");
var finalsection=document.querySelector(".mobiles-sections");
var mobileTemplate = document.querySelector(".mobile-card-template");
var mobilewrapper=document.querySelector(".mobile-wrapper");
var mobiletopic=document.querySelector(".mobile-topic");
var onemobile=document.querySelector(".one-mobile");


// var iphoneTemplate =document.querySelector(".iphone-card-template");
// var iphoneSection = document.querySelector(".iphone-section");

// var oneplusTemplate =document.querySelector(".oneplus-card-template");
// var oneplusSection = document.querySelector(".oneplus-section");

// var samsungTemplate =document.querySelector(".samsung-card-template");
// var samsungSection = document.querySelector(".samsung-section");

var slide=document.querySelector(".slide");
var pagination=document.querySelector(".pagination");
var mobiles={
    iphone:[
        {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },

          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
          {
            name: "iphone",
            ram: 8,
            price: 50000.25
          },
    ],
    oneplus:[
        {
            name: "oneplus",
            ram: 8,
            price: 50000.25
          },
          {
            name: "oneplus",
            ram: 8,
            price: 50000.25
          },
          {
            name: "oneplus",
            ram: 8,
            price: 50000.25
          },
          {
            name: "oneplus",
            ram: 8,
            price: 50000.25
          },
          {
            name: "oneplus",
            ram: 8,
            price: 50000.25
          },
          {
            name: "oneplus",
            ram: 8,
            price: 50000.25
          },
    ],
    samsung:[
        {
            name: "samsung",
            ram: 8,
            price: 50000.25
          },
          {
            name: "samsung",
            ram: 8,
            price: 50000.25
          },
          {
            name: "samsung",
            ram: 8,
            price: 50000.25
          },
          {
            name: "samsung",
            ram: 8,
            price: 50000.25
          },
          {
            name: "samsung",
            ram: 8,
            price: 50000.25
          },
          
    ]
}
for(var key in mobiles)
{
console.log(key);
generatemobiles(key);
}
function generatemobiles(key)
{
    var finalmobile=onemobile.cloneNode(false);
 finalmobile.classList.remove("one-mobile");
 var Sections=mobileSection.cloneNode(true);
 var wrap=mobilewrapper.cloneNode(true);
//  wrap.classList.remove("mobile-topic");
 wrap.querySelector(".mobile-topic").innerText = key;
finalmobile.appendChild(wrap);
 
//  console.log(finalSections);

  mobiles[key].map(function(value){
      
  var mobile = mobileTemplate.cloneNode(true);
  mobile.classList.remove("mobile-card-template");
  mobile.querySelector(".mobile-name").innerText = value["name"];
  mobile.querySelector(".mobile-ram").innerText = value["ram"];
  mobile.querySelector(".mobile-price").innerText = value["price"];
//   console.log(mobile);

  Sections.appendChild(mobile);
    });
    finalmobile.appendChild(Sections);
    // console.log(onemobile);
   



    var mobilelength=mobiles[key].length;
    console.log(mobiles[key].length);
    mobilelength=mobilelength/6;
    var page=pagination.cloneNode(true);
    page.classList.remove("pagination");
    
for(i=0;i<mobilelength;i++)
{
    var paginationslide=slide.cloneNode(true);
    paginationslide.classList.remove("slide");
    paginationslide.querySelector(".slide-number").innerText=i+1;
    pagination.appendChild(paginationslide);
   
    

}
console.log(pagination);
finalmobile.appendChild(page);
finalsection.appendChild(finalmobile);
 console.log(finalmobile);
}
