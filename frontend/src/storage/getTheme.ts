import type { Mode } from '@/types/theme'

export const getTheme = () => {
    let themeMode = localStorage.getItem('theme')
    if (!themeMode) {
        localStorage.setItem('theme', 'light')
        themeMode = 'light'
    }
    return themeMode as Mode
}

export const setTheme = (mode: string) => {
    localStorage.setItem('theme', `${mode}`)
}