
  //Text Functions
  
  document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#typed-text", {
      strings: ["Websites", "Designs", "Branding", "Everything"],
      typeSpeed: 100,       // typing speed
      backSpeed: 50,        // backspacing speed
      backDelay: 1500,      // delay before backspacing
      loop: true            // loop forever
    });
  });


  /// image Slideer loops

  document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll("#image-slider .slider-img");
    let currentIndex = 0;

    setInterval(() => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }, 3000); // 3 seconds interval
  });

  const track = document.querySelector('.testimonial-track');
  track.innerHTML += track.innerHTML;
//client review testomonials




function openWhatsApp(serviceName) {
  const phoneNumber = '94714695753'; // replace with your number
  const message = `Can I get details of this service: ${serviceName}?`;
  const encodedMessage = encodeURIComponent(message);

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, '_blank');
}
