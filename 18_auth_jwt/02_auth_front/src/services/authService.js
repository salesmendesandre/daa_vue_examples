import api from './api'

export const signUp = async (email, password) => {
    const { data } = await api.post('/auth/register', { email, password })
    return data
}

export const signIn = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    return data
}

export const signOut = () => {
    localStorage.removeItem('token')
}

export const getProfile = async () => {
    const { data } = await api.get('/perfil')
    return data
}
