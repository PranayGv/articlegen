let request = new XMLHttpRequest();
let jsondata;
let link;
function getArticle(ab) {
    request.open('GET', "https://en.wikipedia.org/api/rest_v1/page/random/summary")
    request.send();
    request.onload = () => {
    jsondata = JSON.parse(request.response);
    if (ab == 1){
        window.location = link;
    } else {
        if (request.status === 200) {
            document.getElementById("pic").src = jsondata.originalimage.source;
            document.getElementById("title").innerHTML = jsondata.title;
            document.getElementById("summary").innerHTML = jsondata.extract;
            link=jsondata.content_urls.desktop.page;
        } else {
            console.log(`error ${request.status} ${request.statusText} `)
        }
    }
    }
}
getArticle()