// You can change some settings over here
var globalSettings = {

    "playMusic" : true,         // true/false - should the app play the BGM
    "playSFX" : true,           // true/false - should sounds be played
    "guessTime" : 6            // integer value - guessing time in seconds

};

// If you want to add extra key bindings, this is where 
// you put them

/**********************************************
 * Format:
 * ----------------------------------------
 * "<LetterKey> <command> <argument1> <argument2> ...
 * (see below for examples, not case-sensitive)
 *
 * Legend:
 * ---------------------------------------- 
 * <..>     required argument
 * [..]     optional argument
 * ../..    choose between one of the choices
 *
 * Available commands (and their arguments):
 * ----------------------------------------
 * changeHealth <integer> [green/red]
 *      changes the HP value by the specified amount
 *      specifying one of the colours will flash the
 *      entire screen with that colour
 *
 * startCountDown <integer> <command> <arguments> ...
 *      starts the countdown timer. if the integer 
 *      specified is positive, it will override the 
 *      guessTime in the globalSettings. Once 
 *      the timer lapses, the command specified is 
 *      performed.
 *
 * cancelCountDown
 *      cancels the running countdown, if any
 **********************************************/

var globalKeyBindings = [
"A changeHealth -5 green",                  // subtract 5 HP, with green screen indicator
"D changeHealth 3 red",                     // add 3 HP, with red screen indicator
"R changeHealth 100",                       // reset, with no screen indicator
"T startCountDown -1 changeHealth 5 green",   // starts the countdown timer, with default guess time
"U cancelCountDown",                        // cancels the running countdown timer
];