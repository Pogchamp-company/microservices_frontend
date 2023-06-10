export default function formatDate(date: Date) {
    return `${date.getDate().toString().padStart(2, '0')}.${date.getMonth().toString().padStart(2, '0')}.${date.getFullYear()}`
}

export function dateFromServerString(date_string: string | null): Date | null {
    if (date_string === null) return null
    return new Date(`${date_string.replace('Z', '')}Z`)
}