export class MathScript {
    fraction(numerator: string, denominator: string) {
        return `\\frac{${numerator}}{${denominator}}`
    }

    beginAlign() {
        return "\\begin{align}"
    }

    endAlign() {
        return "\\end{align}"
    }

    hat(value: string) {
        return `\\hat{${value}}`
    }

    beginMatrix() {
        return "\\begin{bmatrix}"
    }

    endMatrix() {
        return "\\end{bmatrix}"
    }

    sub(base: string, subscript: string) {
        return `${base}_{${subscript}}`;
    }

    beginSet() {
        return '\\{'
    }

    endSet() {
        return '\\}'
    }

    sum(subscript: string, superscript: string) {
        return `\\sum_{${subscript}}^{${superscript}}`
    }

    sqrt(value: string) {
        return `\\sqrt{${value}}`;
    }
}
