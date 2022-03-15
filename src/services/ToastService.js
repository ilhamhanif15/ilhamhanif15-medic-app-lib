import { inject } from 'vue'

export class ToastService {

    constructor() {
        this.toast = inject("$toast")
    }

    /**
     * Open Success Toast
     */
    success(message, position = "top-right") {
        this.toast.open({
            message,
            position,
            type: "success"
        })
    }
    
    /**
     * Open Error Toast
     */
    error(message, position = "top-right") {
        this.toast.open({
            message,
            position,
            type: "error"
        })
    }

}