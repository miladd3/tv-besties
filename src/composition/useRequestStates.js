import { onMounted, ref } from 'vue'

const useRequestStates = (request) => {
  const loading = ref(false)
  const error = ref(false)

  const doRequest = async () => {
    try {
      error.value = false
      loading.value = true
      await request()
    } catch (e) {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  onMounted(async () => {
    await doRequest()
  })

  return {
    loading,
    error,
    doRequest
  }
}
export default useRequestStates
