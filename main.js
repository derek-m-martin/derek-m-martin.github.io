window.onload = function() {
    var title = "About Me";
    var titleContainer = document.getElementById('animated-title');
    for (var i = 0; i < title.length; i++) {
        var span = document.createElement('span');
        span.textContent = title[i];
        titleContainer.appendChild(span);
    }
    gsap.from("#animated-title span", {
        duration: 2,
        opacity: 0,
        x: -50,
        stagger: -0.1, // Negative value to reverse the animation order
        ease: "power1.inOut"
    });
}
