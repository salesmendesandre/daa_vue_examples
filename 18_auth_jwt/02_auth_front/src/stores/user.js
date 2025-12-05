import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getProfile, signOut } from '@/services/authService'

export const useUserStore = defineStore('user', () => {
    const token = ref(localStorage.getItem('token') || '')
    const currentUser = ref(null)
    const loadingProfile = ref(false)

    const isAuthenticated = computed(() => Boolean(token.value))

    const setToken = (value) => {
        token.value = value || ''
        if (value) {
            localStorage.setItem('token', value)
        } else {
            localStorage.removeItem('token')
        }
    }

    const clearSession = () => {
        setToken('')
        currentUser.value = null
        signOut()
    }

    const fetchProfile = async () => {
        if (!token.value || loadingProfile.value) return currentUser.value

        loadingProfile.value = true
        try {
            const { user } = await getProfile()
            currentUser.value = user || null
            return currentUser.value
        } catch (error) {
            clearSession()
            throw error
        } finally {
            loadingProfile.value = false
        }
    }

    return {
        token,
        currentUser,
        loadingProfile,
        isAuthenticated,
        setToken,
        clearSession,
        fetchProfile,
    }
})
