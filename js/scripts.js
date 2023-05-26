document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Header Navbar Link
    var link1 = document.querySelectorAll("#link1");
    var link2 = document.querySelectorAll("#link2");
    var link3 = document.querySelectorAll("#link3");
    var link4 = document.querySelectorAll("#link4");

    link1.forEach(function (link) {
    const hasImage = link.querySelector("img") !== null;
    if (hasImage) {
        link.href = "./Index.html";
    } else {
        link.innerHTML = "Home";
        link.href = "./Index.html";
    }
    });

    link2.forEach(function (link) {
    const hasImage = link.querySelector("img") !== null;
    if (hasImage) {
        link.href = "./Heritage.html";
    } else {
        link.innerHTML = "Heritage";
        link.href = "./Heritage.html";
    } 
    });

    link3.forEach(function (link) {
    const hasImage = link.querySelector("img") !== null;
    if (hasImage) {
        link.href = "./Hotel_Booking.html";
    } else {
        link.innerHTML = "Hotel Booking";
        link.href = "./Hotel_Booking.html";
    } 
    });

    link4.forEach(function (link) {
    const hasImage = link.querySelector("img") !== null;
    if (hasImage) {
        link.href = "./Gallery.html";
    } else {
        link.innerHTML = "Gallery";
        link.href = "./Gallery.html";
    } 
    });

    // Heritage content link
    var HeritageLink1 = document.querySelectorAll("#HeritageLink1");
    var HeritageLink2 = document.querySelectorAll("#HeritageLink2");
    var HeritageLink3 = document.querySelectorAll("#HeritageLink3");
    var HeritageLink4 = document.querySelectorAll("#HeritageLink4");
    var HeritageLink5 = document.querySelectorAll("#HeritageLink5");
    var HeritageLink6 = document.querySelectorAll("#HeritageLink6");
    var HeritageLink7 = document.querySelectorAll("#HeritageLink7");
    var HeritageLink8 = document.querySelectorAll("#HeritageLink8");
    var HeritageLink9 = document.querySelectorAll("#HeritageLink9");
    var HeritageLink10 = document.querySelectorAll("#HeritageLink10");

    HeritageLink1.forEach(function (link) {
        link.href = "./Vishnu Pad.html";
    });

    HeritageLink2.forEach(function (link) {
        link.href = "./Budha Gaya.html";
    });

    HeritageLink3.forEach(function (link) {
        link.href = "./Ramsila pahad.html";
    });

    HeritageLink4.forEach(function (link) {
        link.href = "./Kurkihar.html";
    });

    HeritageLink5.forEach(function (link) {
        link.href = "./Sita Kund.html";
    });

    HeritageLink6.forEach(function (link) {
        link.href = "./Mangala Gauri.html";
    });

    HeritageLink7.forEach(function (link) {
        link.href = "./Gahlor Ghati.html";
    });

    HeritageLink8.forEach(function (link) {
        link.href = "./Pita Maheshwar.html";
    });

    HeritageLink9.forEach(function (link) {
        link.href = "./Water Park.html";
    });

    HeritageLink10.forEach(function (link) {
        link.href = "./Tapovan.html";
    });
  },
  false
);

// window.onerror = function() {
//     window.location.href = './404.html';
// }
