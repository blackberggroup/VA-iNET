// JSON objects
let news1 = {
    url: "https://news.va.gov/127628/gulf-coast-va-innovators-ideas-to-improve-care/",
    fellow_status: "current",
    img: "assets/img/home/ssInnovators-1.webp",
    alt: "Veteran using virtual reality headset.",
    title: "VA employees committed to culture aimed at improving Veterans' care",
    article_copy: "Gulf Coast VA is looking forward to supporting and empowering three VA employees selected for the FY24 VHA Innovators Network (iNET) Spark-Seed-Spread Investment program."
};

let news2 = {
    url: "https://news.va.gov/119569/collaboration-continues-greenhouse-initiative/",
    fellow_status: "current",
    img: "assets/img/home/ssInnovators-2.webp",
    alt: "Man being helped by nurse.",
    title: "VA Innovation continues through Greenhouse Initiative",
    article_copy: "One of VHA Innovators Network's (iNET) signature programs is the Greenhouse Initiative, an opportunity for the health care innovation community to collaborate at the earliest stages of innovation."
};

let news3 = {
    url: "https://news.va.gov/126123/va-awards-for-veteran-care-innovators-network/",
    fellow_status: "current",
    img: "assets/img/home/ssInnovators-3.webp",
    alt: "Group of people on stage",
    title: "VA employees recognized at VA Innovation Experience event",
    article_copy: "VA has a long history of innovation powered by employees who demonstrate dedication to their work and resilience in the face of adversity to enable better Veteran care."
};

let news4 = {
    url: "https://news.va.gov/115102/gulf-coast-employees-innovators-network/",
    fellow_status: "current",
    img: "assets/img/home/ssInnovators-4.webp",
    alt: "Woman with VHA Innovators project",
    title: "VA Gulf Coast employees advance in VHA Innovators Network",
    article_copy: "VA Gulf Coast Healthcare System to advance as part of iNET's innovation investment program."
};


// Mustache render logic for individual page views | ?user="firstname-lastname"
var fellowsArray = new Array(news1, news2, news3, news4);

var tab;
var img;
var alt;
var title;
var article_copy;

for (var i = 0; i < fellowsArray.length; i++) {
    var userIndex = fellowsArray[i].url;
    if (window.location.href.indexOf(userIndex) > -1) {

        var objectView = fellowsArray[i];

        img = Mustache.render("{{{img}}}", objectView);
        alt = Mustache.render("{{alt}}", objectView);
        bio_name = Mustache.render("{{bio_name}}", objectView);
        title = Mustache.render("{{title}}", objectView);
        article_copy = Mustache.render("{{{article_copy}}}", objectView);

    }
}


// Append json data to html elements
$('head title').text(tab);
$('.bio-card-img > img').attr("alt", alt);
$('.bio-card-attributes > h2').text(title);
$('.bio-card-attributes > p span.article_copy').text(article_copy);

$(".bio-card-attributes p span:empty").remove();
$(".bio-card-attributes p:empty").remove();

if ($(".bio-card-attributes > p.margin-top-0").text() == ' ') {
    $(".bio-card-attributes > p.margin-top-0").remove();
}

if ($(".bio-card-attributes > p.margin-bottom-0").text() == ' ') {
    $(".bio-card-attributes > p.margin-bottom-0").remove();
}

$("#bio-card-about p:empty").remove();


// Render dynamic owl carousel for CURRENT sif & erf fellows
var currentFellowsArray = fellowsArray;
var newCurrentFellowsArray = [];

for (var i = 0; i < currentFellowsArray.length; i++) {
    if (currentFellowsArray[i].fellow_status == "current") {
        newCurrentFellowsArray.push(currentFellowsArray[i]);
        // console.log(newCurrentFellowsArray);
    }
}

var currentData = {
    data: []
};

currentData.data.push(newCurrentFellowsArray);  

currentData.data[0].forEach(current => $('.owl-carousel.nci2i--news').append("<div class='usa-card__container item'>" + "<a href=" 
+ current.url + " />" + "<div class='usa-card__media' >" + "<div class=''>" + "<img src='" 
+ current.img + "'alt='" + current.alt + "' />" + "</div>" + "</div>" 
+ "<div class='usa-card__body'>" + "<h3 class='margin-y-0'>" 
+ current.title + "</h3>" + "<p>" 
+ current.article_copy + "</p>" + "</div>" + "</a>" + "</div>"));