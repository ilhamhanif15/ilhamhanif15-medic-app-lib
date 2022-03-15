export class AttributeModel {

    constructor(model, isError = false, errorMessage = "") {
        this.model          = model
        this.isError        = isError
        this.errorMessage   = errorMessage

        this.setDefaultValue(model)
    }

    setDefaultValue(val) {
        this.defaultValue = val

        return this
    }
    
    reset() {
        this.model          = this.defaultValue
        this.isError        = false
        this.errorMessage   = ""

        return this
    }

}