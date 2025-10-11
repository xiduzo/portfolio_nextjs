// Global AudioContext to avoid creating multiple instances
let globalAudioContext: AudioContext | null = null;

// Cache for audio buffers to avoid repeated downloads
const audioBufferCache = new Map<string, AudioBuffer>();

// Initialize the global AudioContext
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;

  if (!globalAudioContext) {
    try {
      globalAudioContext = new window.AudioContext();
    } catch (error) {
      console.warn("Failed to create AudioContext:", error);
      return null;
    }
  }

  // Resume the context if it's suspended (required for user interaction)
  if (globalAudioContext.state === "suspended") {
    globalAudioContext.resume().catch((error) => {
      console.warn("Failed to resume AudioContext:", error);
    });
  }

  return globalAudioContext;
}

export async function playMenuItemHoverSound() {
  if (typeof window === "undefined") return;

  const audios = [
    // "/sound/click-1.wav",
    // "/sound/click-2.wav",
    // "/sound/click-3.wav",
    "/sound/click-4.wav",
    "/sound/click-5.wav",
  ];

  const randomIndex = Math.floor(Math.random() * audios.length);
  await playWav(audios[randomIndex], 0.1);
}

export async function playMenuItemOpenedSound() {
  if (typeof window === "undefined") return;
  await playWav("/sound/folder-open.wav");
}

export async function playMenuItemClosedSound() {
  if (typeof window === "undefined") return;
  await playWav("/sound/folder-close.wav");
}

async function playWav(url: string, volume: number = 1.0) {
  try {
    const audioContext = getAudioContext();
    if (!audioContext) return;

    // Check if we already have this audio buffer cached
    let audioBuffer = audioBufferCache.get(url);

    if (!audioBuffer) {
      // Download and decode the audio file
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      // Cache the decoded audio buffer
      audioBufferCache.set(url, audioBuffer);
    }

    // Create and play the audio source
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();

    // Set the volume (0.0 = silent, 1.0 = full volume)
    gainNode.gain.value = Math.max(0, Math.min(1, volume));

    // Connect: source -> gain -> destination
    source.buffer = audioBuffer;
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    source.start(0);
  } catch (error) {
    // Silently fail if audio can't be played
    console.warn("Failed to play audio:", error);
  }
}
