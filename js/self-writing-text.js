window.addEventListener("scroll", function handleScroll() {
    const elem = document.querySelector(".food-excellence__subtitle.self-writing-text");
    const rect = elem.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight) {
        window.removeEventListener("scroll", handleScroll);
        const text = "Taste the Difference, Every Day at Freddy Burgers!";
        const delay = 100;
        print_text(text, elem, delay);
    }
});

const print_text = function(text, elem, delay) {
    if (text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function() {
                print_text(text.slice(1), elem, delay);
            }, delay
        );
    }
}
