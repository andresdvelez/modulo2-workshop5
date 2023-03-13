/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pizza":
                    "url('https://i.ibb.co/qpqJT6T/personne-qui-recoit-morceau-delicieuse-pizza-au-pepperoni-au-fromage-181624-18235-jpg.jpg')",

                "hero-restaurant":
                    "url('https://i.ibb.co/JnPJPJz/hero-desktop-bg.jpg')",
            },
            fontFamily: {
                TiltWarp: ["Tilt Warp, cursive"],
            },
            colors: {
                "main-bg": "#FCF0F0",
            },
        },
    },
    plugins: [],
};
