
var data = [
    {
        active: true,
        href: "index.html",
        span: "Home"
    },
    {
        active: true,
        href: "resume.html",
        span: "Resume"
    },
    {
        active: true,
        href: "portfolio.html",
        span: "Portfolio"
    },
    {
        active: false,
        href: "blog.html",
        span: "Blog"
    },
    {
        active: true,
        href: "contact.html",
        span: "Contact"
    }
];

var divLogo = `
<div id="logo"> 
    <h1>
        <a href="index.html">Daniel Rodriguez</a></h1> 
    <p>A game/software/entertainment engineer</p> 
</div>`;

function loadHeader() {
    var divTabs = $('<div />' ).attr("id", "tabs").append("<ul />"); 

    $('div#topPan').append(divLogo);
    $('div#topPan').append(divTabs);

    data.forEach(datum => {
        if (datum.active) {
            var span = $(`<span>${datum.span}</span>`)
            var anchor = $("<a />").attr("href", datum.href).append(span)
            var listItem = $( "<li />" ).append(anchor)
            $('div#tabs ul').append(listItem)
        }
    });
}

function loadFooter() {
    var ul = $('<ul />').addClass("links")
    
    $('div#footerPan').prepend(ul);

    data.forEach(datum => {
        if (datum.active) {
            var anchor = $("<a />").attr("href", datum.href).html(datum.span)
            var listItem = $( "<li />" ).append(anchor)
            $('div#footerPan ul.links').append(listItem)
        }
    });
}
