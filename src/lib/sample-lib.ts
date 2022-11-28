export default class SampleLib {
    private count: number = 0;

    private targetDomElement: Element | null = null;

    constructor(targetDomSelector: string) {
        this.targetDomElement = document.querySelector(targetDomSelector);
        this.render();
    }

    private render() {
        (this.targetDomElement as Element).innerHTML = '<button id="counter" type="button">Count is 0</button>';
        ((this.targetDomElement as Element).firstChild as HTMLButtonElement).addEventListener('click', () => {
            this.addCount();
        });
    }

    public addCount() {
        this.count++;
        (this.targetDomElement!.firstChild as HTMLButtonElement).innerHTML = `Count is ${this.count}`;
    }
}