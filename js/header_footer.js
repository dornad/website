
var header = `
<div id=\"logo\"> 
    <h1>
        <a href="index.html">Daniel Rodriguez</a></h1> 
    <p>A game/software/entertainment engineer</p> 
</div> 
<div id="tabs">
    <ul>
        <li><a href="index.html">
            <span>Home</span>
        </a></li>
        <li><a href="resume.html">
                <span>Resume</span>
        </a></li>
        <li><a href="portfolio.html">
                <span>Portfolio</span>
        </a></li>
        <!--li>
            <a href="blog.html">Blog</a>
        </li-->
        <li><a href="contact.html">
                <span>Contact</span>
        </a></li>
    </ul>
</div>`;

var footer = `
<ul class="links">
    <li>
        <a href="index.html">Home</a>
    </li>
    <li>
        <a href="resume.html">Resume</a>
    </li>
    <li>
        <a href="portfolio.html">Portfolio</a>
    </li>
    <!--li>
        <a href="blog.html">Blog</a>
    </li-->
    <li>
        <a href="contact.html">Contact</a>
    </li>
</ul>
`;

function loadHeader() {
    $('div#topPan').append(header);
}

function loadFooter() {
    $('div#footerPan').prepend(footer);
}
