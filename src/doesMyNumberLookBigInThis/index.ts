export function narcissistic(value: number) {
    return (
        value ===
        value
            .toString()
            .split('')
            .reduce(
                (acc, cur, _index, power) => acc + Number(cur) ** power.length,
                0,
            )
    );
}
