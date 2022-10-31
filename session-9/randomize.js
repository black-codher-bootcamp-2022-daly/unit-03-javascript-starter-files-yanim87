export default function randomize(items) {
    return items[Math.floor(Math.random() * items.length)];
}