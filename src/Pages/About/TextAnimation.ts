interface ML4 {
  opacityIn: number[];
  scaleIn: number[];
  scaleOut: number;
  durationIn: number;
  durationOut: number;
  delay: number;
}

const ml4: ML4 = {
  delay: 500,
  durationIn: 800,
  durationOut: 600,
  opacityIn: [0, 1],
  scaleIn: [0.2, 1],
  scaleOut: 3,
};

declare global {
  interface Window {
      anime: any;
  }
}

if (typeof window !== 'undefined' && window.anime) {
window.anime
  .timeline({ loop: true })
  .add({
    duration: ml4.durationIn,
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    targets: '.ml4 .letters-1',
  })
  .add({
    delay: ml4.delay,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    opacity: 0,
    scale: ml4.scaleOut,
    targets: '.ml4 .letters-1',
  })
  .add({
    duration: ml4.durationIn,
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    targets: '.ml4 .letters-2',
  })
  .add({
    delay: ml4.delay,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    opacity: 0,
    scale: ml4.scaleOut,
    targets: '.ml4 .letters-2',
  })
  .add({
    duration: ml4.durationIn,
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    targets: '.ml4 .letters-3',
  })
  .add({
    delay: ml4.delay,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    opacity: 0,
    scale: ml4.scaleOut,
    targets: '.ml4 .letters-3',
  })
  .add({
    delay: 500,
    duration: 500,
    opacity: 0,
    targets: '.ml4',
  });
}

export {};