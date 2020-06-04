class Utility {
    static getInputValue(elementID: string): string {
        //this function normally returns a value of the type HTMLElement
        //use type assertion <HTMLInputElement> to treat the element it finds as the more specific HTMLInputElement type.
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
    }
}