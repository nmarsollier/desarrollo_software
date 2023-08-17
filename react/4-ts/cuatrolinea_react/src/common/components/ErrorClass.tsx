
export function getErrorClass(errorText: string | undefined, baseClass: string): string | undefined {
    return baseClass + (errorText ? " is-invalid" : "")
}