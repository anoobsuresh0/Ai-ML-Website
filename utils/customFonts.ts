import localFont from "next/font/local";

const NeueMachina = localFont({
    src: [
        {path : "../assets/fonts/NeueMachina-Regular.otf"}
    ],
    variable: "--font-neue-machina",
});

const PowerGrotesk = localFont({
    src: [
        {path : "../assets/fonts/PowerGrotesk-Regular.ttf"}
    ],
    variable: "--font-power-grotesk",
});

const SulphurPoint = localFont({
    src: [
        {path : "../assets/fonts/SulphurPoint-Regular.ttf"}
    ],
    variable: "--font-sulphur-point",
});



export { NeueMachina, PowerGrotesk, SulphurPoint };