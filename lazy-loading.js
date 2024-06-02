const lazyImages = document.querySelectorAll('img');

let lazyImagesOptions = {};

let observer = new IntersectionObserver((entires, observer) => {
    entires.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        const newURL = image.getAttribute('data-src');
        if (newURL == null) return;
        image.src = newURL;
        observer.unobserve(image);
    });
});

lazyImages.forEach((image) => {
    observer.observe(image);
});