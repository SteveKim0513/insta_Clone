# insta_Clone
Instagram clones with express + prisma + react and react-native

## Tech list
- node.js : server
- react.js : front
- react-native : App
- prisma : ORM(DB)

------

## Setting Env.
### build server
```
yarn init
yarn add graphql-yoga
yarn add nodemon -D
yarn add babel-cli -D
```
#### addtional setting
- make .babelrc file
```
{
  "presets": ["env"]
}
```
```
yarn add bable-preset-env
yarn add babel-core
```


**-> exec command : yarn dev**

- package.json
> nodemon : automatically server refresh  
> --exec babel-node src/server.js : exec "server.js" using babel-node  
- nodemon.json
>  "ext": "js graphql" : watching js and graphql files

### build graphql server
```
yarn add dotenv
// create .env file in src folder
// dotenv reads this file
```
