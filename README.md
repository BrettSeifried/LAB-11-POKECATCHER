# Poke Catcher
- [x] HTML Main Page. show framework pokemon images and info
- [x] Show submit button
- [x] CSS minimum look
- [ ] Local storage functions
    - [ ] render-line-items.js
        - [ ] renderLineItem(cartItem, shirtData) = renderLineItem()
        - [ ] renderShirt(shirt) = renderPokemon(poke) 
    - [ ] render-pokemon.js
    - [ ] utils.js
        - [ ] addItem = caughtPokemon
        - [x] generatePokemon = getProducts
- [ ] apps.js
    - [ ] will use generatePokemon()
    - [ ] caughtPokemon
    - [ ] encounterPokemon
    - [ ] button querySelector
        - [ ] caughtPokemon
- [ ] results page


## HTML
# Main page
- [ ] 3x radio buttons -  class = "poke-options
    - [x] id poke-select
    - [ ] pokeCard - look at RPS
        id: number
        pokemon: name of pokemon
        url_image: image location
        type_1: type of pokemon
- [ ] submit button
    - [ ] let num guesses = 10, subtract 1 each time pressed
        * numGuesses--;
    - [ ] call caughtPokemon with chosen pokemon.
    - [ ] if numGuesses = 0 , send to results
    - [ ] passes encounter
        * ID encounter ++ into localStorage
        * ID picked ++ passes into localStorage
- [ ] Reset button
    - [ ] set numGuesses = 10
    - [ ] call generatePokemon

# Results folder
* index
* results.js

## JS Files
* apps.js
* storage-utils.js - locaStorage functions
    * e-commerce website
        - [ ] Add button to LS = pick, submit button, to LS
    - [ ] findById
    - [ ] getResults = getProducts
        * get data from local storage
    - [ ] showPokemon(id) - encounter
        * incrmeent shown
    - [ ] caughtPokemon(id)
        * increment picked pokemon
    - [ ] getPokemon = getCart
* pokemon.js - pokemon raw Data

# CSS Main Page
- [ ] sepearte by 3 labels
- [ ] center it
- [ ] scaled3d on hover

# Local Storage
* array of
    {id: number, encountered: X, caught: Y }
    {id: number, encountered: X, caught: Y }
    {id: number, encountered: X, caught: Y }

## Functions & TDD
* getResults -- return results of array, or empty array
* encounterPokemon -- increment the keys for a pokemon
* caughtPokemon -- increment the caught key for a fruit

## Javascript
# apps.js
- [ ] generatePokemon()
    - [ ] generate 3 random pokemon
    - [ ] while loop for repeated numbers
    - [ ] call encounterPokemon 3x
    - [ ] render pokemon on page




# Alchemy Bootstrap Template

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass