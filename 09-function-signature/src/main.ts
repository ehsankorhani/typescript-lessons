let start: () => void;
let accelerate: (a: number, b: number, c: string) => string;

accelerate: (speed: number, rate: number, unit: string) => {
    return `${speed * rate} ${unit}`;
}