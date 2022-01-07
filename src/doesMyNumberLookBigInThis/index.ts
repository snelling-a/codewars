export function narcissistic(value: number) {
    return (
        value ===
        value
            .toString()
            .split('')
            .map((num) => (+num) ** value.toString().split('').length)
            .reduce((a, b) => a + b)
    );
}
