export default class Logging{
     static info = (args) => console.log(`[${new Date().toLocaleString()}] [INFO]`, args);
     static warn = (args) => console.log(`[${new Date().toLocaleString()}] [WARN]`, args);
     static error = (args) => console.log(`[${new Date().toLocaleString()}] [ERROR]`, args);
}