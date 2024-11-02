

let expect = Chai.expect; //imports the expect function from the chai library.

/*NOTE
    This is an example and as such may not work the same for you.
    Use this is a guide to help you understand how to write tests.
    Be sure to refer to the mocha/chai documentation for more information.
    */

//Describes what is being tested.
describe("Deck of Cards Length", () => {
  /*
  (done) is a parameter used to tell Mocha that this test is asynchronous.
  This means other tests can run while this test is running.
  */

  //Describe what the test is checking for.
  it("should see if the length of the card deck is equal to 52.", function (done) {
    let testDeck = new deckOfCards(); //Creates a new deck of cards from the game itself. ie. war.js
    let cards = testDeck.cardDeck; //Creates a variable that holds the card deck.
    let numberOfCards = cards.length; //Creates a variable that outputs the number of cards in the deck.

    console.log("Here is my  cards:", cards);
    console.log("How many cards do I have?", numberOfCards); //Prints the cards to the console.

    //Checks if the number of cards is equal to 52.
    expect(numberOfCards).to.eql(52);

    done(); //Tells Mocha that the test is done.
  });
});