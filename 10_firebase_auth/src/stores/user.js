// src/stores/user.js
import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import { subscribeToAuth } from '@/services/authService'

export const useUserStore = defineStore('user', () => {
    const currentUser = ref(null)
    let unsubscribe = null

    const startAuthListener = () => {
        if (unsubscribe) return
        unsubscribe = subscribeToAuth((user) => {
        currentUser.value = user
        })
    }

    const stopAuthListener = () => {
        if (unsubscribe) unsubscribe()
        unsubscribe = null
    }

    onMounted(startAuthListener)
    onUnmounted(stopAuthListener)

    return { currentUser, startAuthListener, stopAuthListener }
})