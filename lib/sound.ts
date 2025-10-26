// Global AudioContext to avoid creating multiple instances
let globalAudioContext: AudioContext | null = null;

// Cache for audio buffers to avoid repeated downloads
const audioBufferCache = new Map<string, AudioBuffer>();

// Initialize the global AudioContext
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;

  if (!globalAudioContext) {
    try {
      globalAudioContext = new window.AudioContext();
    } catch (error) {
      console.warn('Failed to create AudioContext:', error);
      return null;
    }
  }

  // Resume the context if it's suspended (required for user interaction)
  if (globalAudioContext.state === 'suspended') {
    globalAudioContext.resume().catch(error => {
      console.warn('Failed to resume AudioContext:', error);
    });
  }

  return globalAudioContext;
}

export async function playMenuItemHoverSound() {
  const audios = [
    // "/sound/click-1.wav",
    // "/sound/click-2.wav",
    // "/sound/click-3.wav",
    '/sound/click-4.wav',
    '/sound/click-5.wav',
  ];

  await playWav(audios, 0.1);
}

export async function playCTASound() {
  await playWav('/sound/soft-bubbly_button_click_in_01.wav', 0.1);
}

export async function playMenuItemOpenedSound() {
  // await playWav("/sound/folder-open.wav");
  await playWav('/sound/dropdown_menu_08.wav', 0.15);
}

export async function playWobbleCardSound() {
  const audios = [
    // "/sound/navigation_01.wav",
    // "/sound/navigation_02.wav",
    '/sound/navigation_03.wav',
    '/sound/navigation_04.wav',
    '/sound/navigation_05.wav',
  ];
  await playWav(audios, 0.1);
}

export async function playMenuItemClosedSound() {
  if (typeof window === 'undefined') return;
  // await playWav("/sound/folder-close.wav");
  await playWav('/sound/dropdown_menu_09.wav', 0.15);
}

async function playWav(url: string | string[], volume: number = 1.0) {
  try {
    const audioSource = Array.isArray(url)
      ? url[Math.floor(Math.random() * url.length)]
      : url;
    const audioContext = getAudioContext();
    if (!audioContext) return;

    const audioBuffer = await getAudioBuffer(audioContext, audioSource);

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
    console.warn('Failed to play audio:', error);
  }
}

async function getAudioBuffer(audioContext: AudioContext, url: string) {
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

  return audioBuffer;
}
