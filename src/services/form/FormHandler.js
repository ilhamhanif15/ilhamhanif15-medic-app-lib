import { reactive, ref } from 'vue'
import { ToastService } from "../ToastService"

export class FormHandler {

    constructor(dataAttributes, withLoading = true) {
        this.dataAttributes = dataAttributes
        this.withLoading    = withLoading
        
        if (withLoading) {
            this.loading = ref(false)
        }

        this.resetAfterSuccessInvokeRequest = true

        this.toast = new ToastService()
    }
    
    /**
     * Disable reset after success
     */
    disableResetAfterSuccess() {
        this.resetAfterSuccessInvokeRequest = false

        return this
    }
    
    /**
     * Set loading value
     * 
     * @param Boolean val 
     * @returns self
     */
    setLoading(val) {
        if (this.withLoading) {
            this.loading.value = val
        }

        return this
    }

    /**
     * Get loading
     * 
     * @returns Boolean
     */
    getLoading() {
        if (this.withLoading) {
            return this.loading.value
        } 
        else {
            return null
        }
    }

    /**
     * Common invoke request
     */
     invokeRequest(apiService) {
        this.setLoading(true)
            .resetErrorMessage()

        return apiService.then(response => {
            
            if (this.resetAfterSuccessInvokeRequest) {
                this.resetAttributeValues()
            }

            this.toast.success(response.data.message)

            return response
        })
        .catch(err => {
            this.setErrorHandler(err.response.data)
        })
        .finally(() => {
            this.setLoading(false)
        })
    }

    /**
     * Set Error Handler for every input in dataAttributes
     * 
     * @param { message, errors : {*} } apiResponse
     */
    setErrorHandler(apiResponse) {
        Object.keys(apiResponse.errors).forEach(attributeKey => {
            this.dataAttributes[attributeKey].isError = true
            this.dataAttributes[attributeKey].errorMessage = apiResponse.errors[attributeKey][0]
        })
    }

    /**
     * Reset Error message and flag
     * 
     * @return self
     */
    resetErrorMessage() {
        Object.keys(this.dataAttributes).forEach(attributeKey => {
            this.dataAttributes[attributeKey].isError = false
            this.dataAttributes[attributeKey].errorMessage = ""
        })

        return this
    }

    /**
     * Return all attribute key with value on it
     * 
     * @return {*}
     */
    getAttrbuteValues() {
        const res = {}
        Object.keys(this.dataAttributes).forEach(attributeKey => {
            res[attributeKey] = this.dataAttributes[attributeKey].model
        })

        return res
    }
    
    /**
     * Return all attribute key with value on it as Form Data
     * 
     * @return {*}
     */
    getAttributeValuesAsFormData() {
        const formData = new FormData()

        Object.keys(this.dataAttributes).forEach(attributeKey => {
            formData.append(attributeKey, this.dataAttributes[attributeKey].model)
        })

        return formData
    }

    /**
     * Reset all attribute to default value
     * 
     * @return self
     */
    resetAttributeValues() {
        Object.keys(this.dataAttributes).forEach(attributeKey => {
            this.dataAttributes[attributeKey].reset()
        })

        return this
    }

}