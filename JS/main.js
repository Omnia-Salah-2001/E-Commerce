function success() {
    Swal.fire({
        // imageHeight:200,
        icon: 'success',
        // timer: 10000,
        confirmButtonColor: '#ffc107',
        imageUrl: "https://g.top4top.io/p_2691mempc1.jpeg",
        title: 'Thanks, Mahrous!',
        text: "The purchase was completed successfully!",
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}
function error() {
    Swal.fire({
        // imageHeight:200,
        icon: 'error',
        confirmButtonColor: '#ffc107',
        imageUrl: "https://g.top4top.io/p_2691mempc1.jpeg",
        title: 'Oops...',
        text: 'Something went wrong!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

// Get the button element
var toTopBtn = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document

toTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});