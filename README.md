# TypeScript Example
A simple getting-started example for using TypeScript in browser applications, including using the Webpack development server for rapid development.

![](/docs/HelloWorld.png)

## Requirements
Before either using using this example or creating it yourself, ensure you have the following software installed:
 - npm (can be installed via the [Node.js installer](https://nodejs.org/en/download/))
 - [Visual Studio Code](https://code.visualstudio.com/)

## Quick start
To get this example working as is:
 - Clone this git repository to a root folder of your choice (`git clone git@github.com:PhilBladen/TypeScript-Example.git`).
 - Enter the new directory TypeScript-Example.
 - Run `npm i` to install all the required packages. You should see that a new directory `node_modules` has been created.
 - Run `npm start` to launch the development server. The application webpack should automatically open at `localhost:8080`.

## Creating this example from scratch
### 1. Create a new folder for your project root
The recommended naming convention for project folders is to use lowercase letters only, and to use hyphens or underscores to separate words.

### 2. Initialise the folder as an npm project
Run `npm init -y` to create a default `package.json` file within the folder.

### 3. Install Webpack
Run `npm i -D webpack webpack-cli`.

### 4. Install the Webpack development server
Run `npm i -D webpack-dev-server`.
This is used to host a local web server for testing the code, and to provide live updating with auto-reloading.

### 5. Install the TypeScript compiler and loader
Run `npm i -D typescript ts-loader`.

### 6. Add the source code
Create a new directory within the project root called `src`. Then, create a `main.ts` file within `src`.

Copy and paste the following code into `main.ts`:
```typescript
document.body.innerHTML = "Hello world!";
```

### 7. Add Webpack config
In the project root directory, create a file called `webpack.config.js`. This is the default configuration file that Webpack looks for when you run it.

Copy and paste the following code into the configuration file:
```javascript
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/main.ts",
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, "dist"),
        open: true
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }],
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
};
```

This tells Webpack the following things:
 - We want it to leave our code readable and debuggable (set using the `mode` and `devtool` options).
 - We want it to use the TypeScript loader to interpret `.ts` files (set using the `rules` option).
 - We want to be able to import TypeScript files (set using the `resolve.extensions` option).
 - We want the development server to host on port 8080 and to serve static content from a `dist` directory (set using the `devServer` option).

 ### 8. Add TypeScript config
The TypeScript compiler converts our TypeScript file to a JavaScript file that the browser can interpret and execute. To achieve this, the TypeScript compiler needs an additional configuration file.

Create a file called `tsconfig.json` in the project root. Copy and paste the following code into it:
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "ESNext",
    "moduleResolution": "node",
    "noResolve": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "baseUrl": ".",
    "preserveConstEnums": true,
    "lib": [
      "dom",
      "es6"
    ],
    "rootDir": "."
  }
}
```

 ### 9. Add bootstrapping HTML
 In order for the browser to load our code, we must provide some HTML that includes our code as a script.

 Create a new directory in the project root called `dist`. This will be the output directory for Webpack to put the compiled JavaScript into, and will also hold our static HTML file.

 Within `dist`, create a new file called `index.html`. Copy and paste the following code into it:
 ```html
 <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>
    <script src="main.js "></script>
</body>

</html>
 ```

### 10. Link the start command
Our example is now ready to be launched, but we need to tell npm what command to use to launch it.

Open `package.json` and replace the `"scripts"` section with the following:
```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack-dev-server",
        "build": "webpack"
    },
```

We have added the following two commands:
 - `start`: launches the development server for testing the application.
 - `build`: compiles a `main.js` in the `dist` directory which could be deployed to a different server.

### 11. Test the server
Run `npm start` in the project root and after a few seconds a window should open showing our working Hello World example!

### 12. (Optional) Modify the code
With the server still running, open `main.ts` (in the `src` folder) and replace the existing code with the following:
```typescript
/* A deliberately overcomplicated hello world example to show off various uses of types. */

class HelloWorldFactory {
    helloWorld: string = "Hello world!";

    produce(): string {
        return this.helloWorld;
    }
}

const factory = new HelloWorldFactory();

let message: string = factory.produce();
document.body.innerHTML = message;
document.body.style.fontSize = "50px";
```

Save the file and go back to the browser window. You should see that the "Hello world!" text is now larger. Every time you save the `main.ts` file, Webpack will recompile it and will make the browser reload the new file.

Happy developing!