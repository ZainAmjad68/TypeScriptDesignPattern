import { Model } from "../models/Models";

export abstract class Views<T extends Model<K>, K> {
    abstract template(): string;
    eventsMap(): {[key:string]: () => void } {      // just a default implementation, any app that wants to incorporate events will have its own implementation
        return {};
    };

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    bindModel() {
        this.model.on('change', () => {this.render()})
    }

    bindEvents(fragment: DocumentFragment): void {
        let eventsMap = this.eventsMap();
        for (let eventKey in eventsMap){
            let [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
        
    }

    render() {
        console.log('parent start',this.parent)
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content)

        this.parent.append(templateElement.content);
        console.log('parent end',this.parent)
    }
}