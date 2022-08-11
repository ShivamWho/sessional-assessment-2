var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11", true);
xhr.onload = function () {
    var responseJSON = JSON.parse(xhr.response);

    let blog='';
    for (let i = 0; i < responseJSON.length; i++) {
        blog += '<div class="col-lg-4 col-md-6 col-sm-12"><div class="card mb-5 shadow-sm"><div class="card-body"><div class="card-title"><h2>'+responseJSON[i].title+'</h2></div><div class="card-text"><p>'+responseJSON[i].body+'</p></div></div></div></div>'
    }
    document.querySelector("#blog").innerHTML = blog;
}

xhr.send();