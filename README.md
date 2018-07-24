# weather-app

## Motivation 

Weather app is a simple command line application used to determine the weather! The application was made as an introductory project to NodeJS. The app includes both `app.js` and `app-promises.js`, as the application was implemented both with callbacks, and promises. The application works the same with both, however feel free to browse through the code on each to review the differences. 

### How to run 
first install all of the dependancies with `npm install` this should create the `node_modules` inside the root directory. 
Run the app as follows: 
```
node <application> <command> <arg>
```

`<application>` is one of `app.js` for the implementation using callbacks, `app-promises.js` for the implementation using promises. 

`<command>` can be `-h` or `--help` which will show a list of commands and theyre args required. 
`<command>` can be `-a` or `--address` which must be followed by an address string as the `<arg>`. 

The command line will output the closest resembling address to the address provided as an `<arg>`, 
followed by the actual and apparent temperature of that location. 
