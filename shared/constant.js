export const BASE_URL =
    process.env.NODE_ENV === 'production' ? 'https://google.com' : ''

export const assetsUrl = (path) => {
    return `${BASE_URL}/assets/${path}`
}