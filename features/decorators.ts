class Boat {
    color: string = 'Red';

    get getFormattedColor(): string {
        return `The Boat's Color is ${this.color}`;
    }

    @logError('Oops Boat was Sunk!')
    pilot(): void {
        throw new Error();
    }
}

// Decorator Factory (returns a decorator)
function logError(errorMessage: string) {
    return function (target: any, key:string, desc: PropertyDescriptor) : void {
    const method = desc.value;

    desc.value = function() {
        try {
            method();
        } catch(err) {
            console.log(errorMessage);
        }
    }
  }
}

new Boat().pilot();

//testDecorator(Boat.prototype, 'pilot');