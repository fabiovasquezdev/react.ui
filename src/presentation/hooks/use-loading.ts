import { message } from "antd"
import { useState } from "react"

export function useLoad() {
    const [loading, setLoading] = useState(false)

    const start = () => setLoading(true)
    const stop = () => setLoading(false)
    const defaultFailureHandler = (e: Error) => {
        message.error(e.message)
    }
    const loadAction = async (action: () => void, onFailure = defaultFailureHandler) => {
        try {
            start()
            await action()

        } catch (error) {
            onFailure(error as Error)
        } finally {
            stop()
        }
    }

    return {
        loading,
        start,
        stop,
        loadAction,
        defaultFailureHandler
    }
}