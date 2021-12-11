//================ anime for header section ==============
document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({
      easing: "easeOutExpo",
      duration: 500,
    })

    //================ Nave bar image
    .add({
      targets: ".nav__img",
      translateX: [30, 0],
      opacity: [0, 1],
      offset: "-=700",
      delay: 1000,
    })

    // =============== Navbar links
    .add({
      targets: ".nav__item",
      translateY: [10, 0],
      easing: "spring(1, 80, 8, 30)",
      delay: (el, i) => 100 * i,
      offset: "-=500",
      opacity: [0, 1],
    })

    // =================== nav bar login button
    .add({
      targets: ".nav__btn",
      translateX: [-10, 0],
      easing: "spring(1, 80, 8, 30)",
      opacity: [0, 1],
      offset: "-=700",
    })
    // ===================== Hero Section content ============
    .add(
      {
        targets: ".hero__content h2, .hero__content p, .hero__btn",
        translateY: [10, 0],
        easing: "spring(1, 80, 8, 30)",
        delay: (el, i) => 200 * i,
        offset: "+=700",
        opacity: [0, 1],
      },
      5000
    )

    .add(
      {
        targets: ".hero__rounded-rect",
        translateX: [-30, 0],
        // easing: "spring(1, 80, 8, 30)",
        opacity: [0, 1],
      },
      7000
    )

    .add(
      {
        targets: ".hero__img",
        translateY: [-10, 0],
        easing: "spring(1, 80, 8, 30)",
        opacity: [0, 1],
        offset: "-=200",
      },
      8000
    );
});

// ================== anime featurs section ===============
let timeLineOne = anime.timeline();

let animeFeaturTitleR = {
  targets: ".letter",
  translateX: [0, -30],
  opacity: [1, 0],
  easing: "easeInExpo",
  duration: 2000,
  delay: (el, i) => 30 * i,
};

let animeFeaturTitleL = {
  targets: ".letter",
  translateX: [40, 0],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 30 * i,
};

let animeFeatursubTitle = {
  targets: ".features__subtitle",
  translateY: [10, 0],
  offset: "-=700",
  opacity: [0, 1],
};

let animerect = {
  targets: ".featur1__rounded-rect",
  translateX: [-30, 0],
  easing: "spring(1, 80, 8, 30)",
  opacity: [0, 1],
};

let animefeature1Img = {
  targets: ".feature1__img",
  with: ["0px", "498px"],
  opacity: [0, 1],
  offset: "-=700",
};

let animefeature1Content = {
  targets: ".feature1__title, .feature1__subtitle, .feature1__btn",
  translateY: [10, 0],
  easing: "spring(1, 80, 8, 30)",
  delay: (el, i) => 200 * i,
  offset: "+=700",
  opacity: [0, 1],
};

const features = document.querySelector(".features");
const featuresOptions = {
  threshold: [0, 1],
  rootMargin: "0px 0px -200px 0px",
};

function animation(entries, featuresObserver) {
  if (!entries[0].isIntersecting) {
    return;
  } else {
    timeLineOne
      .add(animeFeaturTitleR)
      .add(animeFeaturTitleL)
      .add(animeFeatursubTitle)
      .add(animerect)
      .add(animefeature1Img)
      .add(animefeature1Content);
    featuresObserver.unobserve(entries[0].target);
  }
}

const featuresObserver = new IntersectionObserver(animation, featuresOptions);
featuresObserver.observe(features);

// ================ Feature2 section ==============
let timeLinetwo = anime.timeline();

let animeFeatur2Img = {
  targets: ".feature2__img",
  translateY: [10, 0],
  easing: "spring(1, 80, 8, 30)",
  delay: (el, i) => 200 * i,
  opacity: [0, 1],
};

let animefeature2Content = {
  targets: ".feature2__title, .feature2__subtitle, .feature2__btn",
  translateY: [10, 0],
  easing: "spring(1, 80, 8, 30)",
  delay: (el, i) => 200 * i,
  offset: "+=700",
  opacity: [0, 1],
};

let animeFeatur2rect = {
  targets: ".featur2__rounded-rect",
  translateX: [-30, 0],
  easing: "spring(1, 80, 8, 30)",
  opacity: [0, 1],
};

const folders = document.querySelectorAll(".folders");
const features2Options = {
  threshold: [0, 1],
  rootMargin: "0px 0px -200px 0px",
};

function animation2(entries, features2Observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      timeLinetwo
        .add(animeFeatur2Img)
        .add(animeFeatur2rect)
        .add(animefeature2Content);
      features2Observer.unobserve(entry.target);
    }
  });
}

const features2Observer = new IntersectionObserver(
  animation2,
  features2Options
);
folders.forEach((folder) => {
  features2Observer.observe(folder);
});
