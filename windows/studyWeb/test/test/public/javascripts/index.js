function mouseOver() {
    var a = document.getElementById('href')
    a.style.color = 'red'

    setTimeout(function () {
        alert('回到原来颜色')

    }, 1000)
}



//  $( document ).ready(function() {
//      $( "#a1" ).click(function( event ) {
//          alert( "The link will no longer take you to jquery.com" );
//          event.preventDefault();
//      });
//  });

$().ready(function () {
    $("#a1").click(function (event) {
        alert("The link will no longer take you to jquery.com");
        event.preventDefault();
    })
    $("#button1").click(function () {
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'

        });
        $("div").animate({
            left: '250px',
            height: '-=150px',
            width: '-=150px'

        });
        $("form").hide("slow")
    });

    $("#button2").click(ajaxHttpRequest)
})

function ajaxHttpRequest() {
    console.log("ajaxHttpRequest")
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var src = URL.createObjectURL(xmlhttp.response)
            document.getElementById('img').src = src

            document.getElementById("myDiv").innerHTML = src
        }
    }
    
    alert("The link will no longer take you to jquery.com");
    xmlhttp.open("GET", "/image/11.jpg", true);

    xmlhttp.responseType = 'blob'
    xmlhttp.send();
}

