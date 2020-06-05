function getInputValue(elementID: string): string {
    //this function normally returns a value of the type HTMLElement
    //use type assertion <HTMLInputElement> to treat the element it finds as the more specific HTMLInputElement type.
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);

}

//In an export statement, you can use the 'as' keyword after the name of an item to be exported followed by an alias to be used for that exported item. The original item's name can be used inside its module, but will appear to other modules that import it as the alias name.
export { getInputValue as getValue, logger };