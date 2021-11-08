/** A deliberately overcomplicated hello world example to show off various uses of types. */

class HelloWorldFactory {
    helloWorld: string = "Hello world!";

    produce(): string {
        return this.helloWorld;
    }
}

const factory = new HelloWorldFactory();

let message: string = factory.produce();
document.body.innerHTML = message;