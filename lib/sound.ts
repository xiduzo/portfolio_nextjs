import {
    NoiseSynth,
    Synth,
    now,
    MembraneSynth,
    Filter,
    getContext,
    start,
} from "tone";

export function playMenuSound() {
    playSound(menuSound);
}

export function playOpenFolderSound() {
    playSound(openFolderSound);
}

function playSound(soundToPlay: () => void) {
    if (getContext().state !== "running") {
        start().then(soundToPlay);
    } else {
        soundToPlay();
    }
}

const click = new NoiseSynth({
    noise: { type: "white" },
    envelope: {
        attack: 0.0005,
        decay: 0.02, // slightly longer to make it smoother
        sustain: 0,
        release: 0,
    },
}).toDestination();

// Add a filter to remove harsh highs and give it a warm tone
const filter = new Filter(1000, "lowpass").toDestination();
click.connect(filter);

function menuSound() {
    // Limit max volume and add slight randomization
    const maxVolume = -28; // maximum volume in dB
    const minVolume = -35; // minimum volume in dB
    click.volume.value = minVolume + Math.random() * (maxVolume - minVolume);

    click.triggerAttackRelease("16n");
}

// Create a soft noise "swoosh"
const openNoise = new NoiseSynth({
    noise: { type: "pink" }, // pink = softer than white
    envelope: {
        attack: 0.01,
        decay: 0.3, // longer and smoother
        sustain: 0,
        release: 0.05,
    },
}).toDestination();

// Soft rustle (main paper sound)
const rustle = new NoiseSynth({
    noise: { type: "pink" }, // pink = warm and natural
    envelope: {
        attack: 0.02, // gentle rise
        decay: 0.25, // short fade
        sustain: 0,
        release: 0.05,
    },
}).toDestination();

// Create two sources: a flap (low hit) and a rustle (noise)
const flap = new MembraneSynth({
    pitchDecay: 0.05,
    octaves: 2,
    envelope: { attack: 0.001, decay: 0.2, sustain: 0.0, release: 0.1 },
}).toDestination();

const rustleFolder = new NoiseSynth({
    noise: { type: "brown" },
    envelope: { attack: 0.001, decay: 0.15, sustain: 0 },
})
    .connect(new Filter(8000, "lowpass"))
    .toDestination();

// Function to play the folder-opening sound
export function openFolderSound() {
    // Start both with slightly offset timing for realism
    flap.triggerAttackRelease("C2", "8n", now());
    rustleFolder.triggerAttackRelease("16n", now() + 0.02);
}
