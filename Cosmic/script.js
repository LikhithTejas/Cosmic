/* ================================================= */
/* COSMOS REALISTIC SOLAR SYSTEM */
/* ================================================= */


/* ================================================= */
/* PLANET DATA */
/* ================================================= */

const planets = {

    sun: {
        name: "The Sun",
        type: "G-Type Main Sequence Star",
        diameter: "1,392,700 km",
        distance: "Center of system",
        moons: "8 planets",
        day: "25–35 days",
        year: "225–250 million years",
        description:
            "The Sun is the enormous star at the center of our Solar System. Its gravity controls the motion of the planets and smaller bodies.",
        fact:
            "The Sun contains roughly 99.86% of the total mass of the Solar System."
    },

    mercury: {
        name: "Mercury",
        type: "Terrestrial Planet",
        diameter: "4,879 km",
        distance: "57.9 million km",
        moons: "0",
        day: "58.6 Earth days",
        year: "88 Earth days",
        description:
            "Mercury is the smallest planet and the closest world to the Sun. Its surface is heavily covered with impact craters.",
        fact:
            "Temperatures can swing from extremely hot daytime conditions to extremely cold nights."
    },

    venus: {
        name: "Venus",
        type: "Terrestrial Planet",
        diameter: "12,104 km",
        distance: "108.2 million km",
        moons: "0",
        day: "243 Earth days",
        year: "224.7 Earth days",
        description:
            "Venus is surrounded by a dense carbon-dioxide atmosphere and clouds of sulfuric acid.",
        fact:
            "Venus is the hottest planet in the Solar System."
    },

    earth: {
        name: "Earth",
        type: "Terrestrial Planet",
        diameter: "12,756 km",
        distance: "149.6 million km",
        moons: "1",
        day: "23.9 hours",
        year: "365.25 days",
        description:
            "Earth is a dynamic world with oceans, continents, clouds, a protective atmosphere and the only confirmed life in the universe.",
        fact:
            "Liquid water covers approximately 71% of Earth's surface."
    },

    moon: {
        name: "The Moon",
        type: "Natural Satellite",
        diameter: "3,475 km",
        distance: "384,400 km from Earth",
        moons: "0",
        day: "29.5 Earth days",
        year: "27.3 Earth days",
        description:
            "Earth's Moon is an airless rocky world covered with impact craters, mountains and ancient volcanic plains.",
        fact:
            "The Moon is slowly moving away from Earth by about 3.8 centimetres per year."
    },

    mars: {
        name: "Mars",
        type: "Terrestrial Planet",
        diameter: "6,792 km",
        distance: "227.9 million km",
        moons: "2",
        day: "24.6 hours",
        year: "687 Earth days",
        description:
            "Mars is a cold desert planet with enormous volcanoes, deep canyons, polar ice and frequent global dust storms.",
        fact:
            "Olympus Mons is the largest known volcano in the Solar System."
    },

    jupiter: {
        name: "Jupiter",
        type: "Gas Giant",
        diameter: "142,984 km",
        distance: "778.5 million km",
        moons: "95",
        day: "9.9 hours",
        year: "11.86 Earth years",
        description:
            "Jupiter is the largest planet and is dominated by hydrogen and helium. Its atmosphere contains enormous storms.",
        fact:
            "The Great Red Spot is a giant atmospheric storm that has persisted for centuries."
    },

    saturn: {
        name: "Saturn",
        type: "Gas Giant",
        diameter: "120,536 km",
        distance: "1.43 billion km",
        moons: "274",
        day: "10.7 hours",
        year: "29.45 Earth years",
        description:
            "Saturn is a massive gas giant surrounded by a complex system of icy rings and numerous moons.",
        fact:
            "Saturn's ring system extends hundreds of thousands of kilometres across."
    },

    uranus: {
        name: "Uranus",
        type: "Ice Giant",
        diameter: "51,118 km",
        distance: "2.87 billion km",
        moons: "28",
        day: "17.2 hours",
        year: "84 Earth years",
        description:
            "Uranus is a cold ice giant with a pale blue-green atmosphere and an extreme axial tilt.",
        fact:
            "Uranus essentially rotates on its side with an axial tilt of about 98 degrees."
    },

    neptune: {
        name: "Neptune",
        type: "Ice Giant",
        diameter: "49,528 km",
        distance: "4.50 billion km",
        moons: "16",
        day: "16.1 hours",
        year: "164.8 Earth years",
        description:
            "Neptune is the outermost recognized planet and is famous for its deep blue atmosphere and incredibly powerful winds.",
        fact:
            "Neptune's winds can exceed 2,000 kilometres per hour."
    }

};


/* ================================================= */
/* DOM */
/* ================================================= */

const loading =
    document.getElementById("loading");

const loadingBar =
    document.getElementById("loadingBar");

const loadingText =
    document.getElementById("loadingText");

const intro =
    document.getElementById("intro");

const enter =
    document.getElementById("enter");

const info =
    document.getElementById("info");

const closeInfo =
    document.getElementById("closeInfo");

const planetName =
    document.getElementById("planetName");

const planetDescription =
    document.getElementById("planetDescription");

const planetType =
    document.getElementById("planetType");

const planetDiameter =
    document.getElementById("planetDiameter");

const planetDistance =
    document.getElementById("planetDistance");

const planetMoons =
    document.getElementById("planetMoons");

const planetDay =
    document.getElementById("planetDay");

const planetYear =
    document.getElementById("planetYear");

const planetFact =
    document.getElementById("planetFact");

const travel =
    document.getElementById("travel");

const camera =
    document.getElementById("camera");

const pauseButton =
    document.getElementById("pause");

const help =
    document.getElementById("help");

const helpPanel =
    document.getElementById("helpPanel");

const closeHelp =
    document.getElementById("closeHelp");


/* ================================================= */
/* STATE */
/* ================================================= */

let selectedPlanet = "earth";

let paused = false;


/* ================================================= */
/* LOADING */
/* ================================================= */

let loadingProgress = 0;

const loadingMessages = [
    "Loading planetary maps...",
    "Loading atmospheric data...",
    "Generating stars...",
    "Generating asteroid belt...",
    "Initializing orbital mechanics...",
    "Calculating illumination...",
    "Preparing spacecraft camera..."
];


const loadingTimer =
    setInterval(() => {

        loadingProgress +=
            Math.random() * 8 + 4;

        if (loadingProgress > 100) {

            loadingProgress = 100;

        }

        loadingBar.style.width =
            loadingProgress + "%";


        const messageIndex =
            Math.min(
                Math.floor(
                    loadingProgress /
                    100 *
                    loadingMessages.length
                ),
                loadingMessages.length - 1
            );


        loadingText.textContent =
            loadingMessages[
                messageIndex
            ];


        if (
            loadingProgress >= 100
        ) {

            clearInterval(
                loadingTimer
            );

            setTimeout(() => {

                loading.style.opacity =
                    "0";

                setTimeout(() => {

                    loading.style.display =
                        "none";

                }, 1000);

            }, 500);

        }

    }, 150);


/* ================================================= */
/* INTRO */
/* ================================================= */

enter.addEventListener(
    "click",
    () => {

        intro.style.opacity =
            "0";

        intro.style.pointerEvents =
            "none";

        setTimeout(() => {

            intro.style.display =
                "none";

        }, 1000);

    }
);


/* ================================================= */
/* INFORMATION */
/* ================================================= */

function showPlanet(id) {

    const data =
        planets[id];

    if (!data) {
        return;
    }

    selectedPlanet = id;

    planetName.textContent =
        data.name;

    planetDescription.textContent =
        data.description;

    planetType.textContent =
        data.type;

    planetDiameter.textContent =
        data.diameter;

    planetDistance.textContent =
        data.distance;

    planetMoons.textContent =
        data.moons;

    planetDay.textContent =
        data.day;

    planetYear.textContent =
        data.year;

    planetFact.textContent =
        data.fact;

    info.classList.add(
        "active"
    );
}


/* ================================================= */
/* CLOSE INFORMATION */
/* ================================================= */

closeInfo.addEventListener(
    "click",
    () => {

        info.classList.remove(
            "active"
        );

    }
);


/* ================================================= */
/* PLANET MENU */
/* ================================================= */

document
    .querySelectorAll(
        "#navigation button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.planet;

                    showPlanet(id);

                    travelTo(id);

                }
            );

        }
    );


/* ================================================= */
/* 3D PLANET CLICKS */
/* ================================================= */

document
    .querySelectorAll(
        ".celestial"
    )
    .forEach(
        object => {

            object.addEventListener(
                "click",
                () => {

                    showPlanet(
                        object.id
                    );

                }
            );

        }
    );


/* ================================================= */
/* CAMERA TRAVEL */
/* ================================================= */

function travelTo(id) {

    let target =
        document.getElementById(id);


    if (!target) {
        return;
    }


    /*
       Moon is nested inside Earth,
       so getWorldPosition() is important.
    */

    const targetPosition =
        new THREE.Vector3();


    target.object3D.getWorldPosition(
        targetPosition
    );


    moveCamera(
        targetPosition
    );

}


/* ================================================= */
/* SMOOTH CAMERA MOVEMENT */
/* ================================================= */

function moveCamera(target) {

    const start =
        camera.object3D.position.clone();


    const direction =
        new THREE.Vector3()
            .subVectors(
                start,
                target
            )
            .normalize();


    const distance =
        target.clone();


    distance.add(
        direction.multiplyScalar(5)
    );


    const destination =
        distance;


    const startTime =
        performance.now();


    const duration =
        1800;


    function animate(time) {

        const progress =
            Math.min(
                (time - startTime) /
                duration,
                1
            );


        const eased =
            progress < 0.5

                ? 2 *
                  progress *
                  progress

                : 1 -
                  Math.pow(
                      -2 *
                      progress +
                      2,
                      2
                  ) /
                  2;


        camera.object3D.position.lerpVectors(
            start,
            destination,
            eased
        );


        if (progress < 1) {

            requestAnimationFrame(
                animate
            );

        }

    }


    requestAnimationFrame(
        animate
    );

}


/* ================================================= */
/* TRAVEL BUTTON */
/* ================================================= */

travel.addEventListener(
    "click",
    () => {

        travelTo(
            selectedPlanet
        );

    }
);


/* ================================================= */
/* HELP */
/* ================================================= */

help.addEventListener(
    "click",
    () => {

        helpPanel.classList.add(
            "active"
        );

    }
);


closeHelp.addEventListener(
    "click",
    () => {

        helpPanel.classList.remove(
            "active"
        );

    }
);


/* ================================================= */
/* PAUSE */
/* ================================================= */

pauseButton.addEventListener(
    "click",
    () => {

        paused =
            !paused;


        pauseButton.textContent =
            paused

                ? "▶ PLAY"

                : "⏸ PAUSE";

    }
);


/* ================================================= */
/* ORBITS */
/* ================================================= */

const orbits = {

    mercury:
        document.getElementById(
            "mercuryOrbit"
        ),

    venus:
        document.getElementById(
            "venusOrbit"
        ),

    earth:
        document.getElementById(
            "earthOrbit"
        ),

    mars:
        document.getElementById(
            "marsOrbit"
        ),

    jupiter:
        document.getElementById(
            "jupiterOrbit"
        ),

    saturn:
        document.getElementById(
            "saturnOrbit"
        ),

    uranus:
        document.getElementById(
            "uranusOrbit"
        ),

    neptune:
        document.getElementById(
            "neptuneOrbit"
        )

};


/* ================================================= */
/* ORBIT SPEEDS */
/* ================================================= */

const orbitSpeed = {

    mercury: 0.00075,

    venus: 0.00045,

    earth: 0.00030,

    mars: 0.00023,

    jupiter: 0.00013,

    saturn: 0.000095,

    uranus: 0.000065,

    neptune: 0.000045

};


/* ================================================= */
/* ROTATION SPEEDS */
/* ================================================= */

const rotationSpeed = {

    mercury: 0.0025,

    venus: -0.001,

    earth: 0.0045,

    mars: 0.004,

    jupiter: 0.007,

    saturn: 0.006,

    uranus: 0.004,

    neptune: 0.005

};


/* ================================================= */
/* ASTEROIDS */
/* ================================================= */

function createAsteroids() {

    const belt =
        document.getElementById(
            "asteroidBelt"
        );


    for (
        let i = 0;
        i < 450;
        i++
    ) {

        const asteroid =
            document.createElement(
                "a-icosahedron"
            );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const radius =
            18.3 +
            Math.random() *
            2.8;


        const x =
            Math.cos(angle) *
            radius;


        const z =
            Math.sin(angle) *
            radius;


        const y =
            (Math.random() - 0.5) *
            1.1;


        const size =
            0.025 +
            Math.random() *
            0.10;


        asteroid.setAttribute(
            "position",
            `${x} ${y} ${z}`
        );


        asteroid.setAttribute(
            "radius",
            size
        );


        asteroid.setAttribute(
            "material",
            `
                color: #66615c;
                roughness: 1;
                metalness: 0
            `
        );


        belt.appendChild(
            asteroid
        );

    }

}


/* ================================================= */
/* STAR PARTICLES */
/* ================================================= */

function createStars() {

    const field =
        document.getElementById(
            "starParticles"
        );


    for (
        let i = 0;
        i < 2200;
        i++
    ) {

        const star =
            document.createElement(
                "a-sphere"
            );


        const x =
            (Math.random() - 0.5) *
            800;


        const y =
            (Math.random() - 0.5) *
            600;


        const z =
            (Math.random() - 0.5) *
            800;


        const radius =
            0.005 +
            Math.random() *
            0.025;


        star.setAttribute(
            "position",
            `${x} ${y} ${z}`
        );


        star.setAttribute(
            "radius",
            radius
        );


        const brightness =
            0.35 +
            Math.random() *
            0.65;


        star.setAttribute(
            "material",
            `
                color: white;
                shader: flat;
                opacity: ${brightness};
                transparent: true
            `
        );


        star.dataset.phase =
            Math.random() *
            100;


        field.appendChild(
            star
        );

    }

}


/* ================================================= */
/* STAR TWINKLE */
/* ================================================= */

function animateStars() {

    const stars =
        document.querySelectorAll(
            "#starParticles a-sphere"
        );


    const time =
        performance.now() *
        0.001;


    stars.forEach(
        star => {

            const phase =
                Number(
                    star.dataset.phase
                );


            const brightness =
                0.45 +
                (
                    Math.sin(
                        time * 1.5 +
                        phase
                    ) + 1
                ) *
                0.25;


            star.setAttribute(
                "material",
                `
                    color: white;
                    shader: flat;
                    opacity: ${brightness};
                    transparent: true
                `
            );

        }
    );


    requestAnimationFrame(
        animateStars
    );

}


/* ================================================= */
/* MAIN SOLAR SYSTEM LOOP */
/* ================================================= */

function animateSystem() {

    if (!paused) {


        /* PLANET ORBITS */

        Object.keys(
            orbits
        ).forEach(
            planet => {

                const orbit =
                    orbits[planet];


                if (!orbit) {
                    return;
                }


                orbit.object3D.rotation.y +=
                    orbitSpeed[planet];

            }
        );


        /* PLANET ROTATION */

        Object.keys(
            rotationSpeed
        ).forEach(
            planet => {

                const object =
                    document.getElementById(
                        planet
                    );


                if (!object) {
                    return;
                }


                object.object3D.rotation.y +=
                    rotationSpeed[planet];

            }
        );


        /* MOON */

        const moonOrbit =
            document.getElementById(
                "moonOrbit"
            );


        if (moonOrbit) {

            moonOrbit.object3D.rotation.y +=
                0.006;

        }

    }


    requestAnimationFrame(
        animateSystem
    );

}


/* ================================================= */
/* INITIALIZATION */
/* ================================================= */

createAsteroids();

createStars();

animateSystem();

animateStars();


/* ================================================= */
/* DEFAULT INFO */
/* ================================================= */

setTimeout(
    () => {

        showPlanet(
            "earth"
        );

    },
    3000
);