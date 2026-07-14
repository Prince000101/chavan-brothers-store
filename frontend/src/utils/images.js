// High-quality spice images for decorative use
const spiceImages = [
  "/uploads/12.jpg",
  "/uploads/13.jpg",
  "/uploads/09.jpg",
  "/uploads/10.jpg",
  "/uploads/11.jpg",
  "/uploads/14.jpg",
  "/uploads/15.jpg",
  "/uploads/16.jpg",
  "/uploads/05.jpg",
  "/uploads/17.jpg",
  "/uploads/01.jpg",
  "/uploads/18.jpg",
  "/uploads/04.jpg",
  "/uploads/07.jpg",
  "/uploads/08.jpg",
  "/uploads/19.jpg",
];

export function randomSpiceImage() {
  return spiceImages[Math.floor(Math.random() * spiceImages.length)];
}

export function getJournalImages() {
  // Pick 3 unique images for journal cards
  const shuffled = [...spiceImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}
