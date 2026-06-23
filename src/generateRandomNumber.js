import { ValidationError } from './errors/domainErrors.js';
import { handleErrors } from './errors/handleErrors.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { HIGHER_THAN_NUMBER_MESSAGES, LOWER_THAN_NUMBER_MESSAGES, CLOSE_TO_NUMBER_MESSAGES, 
    MEDIUM_DISTANCE_TO_NUMBER_MESSAGES, FAR_FROM_NUMBER_MESSAGES } from './guessMessages.js';

export function generateRandomNumber()
{
    try {
        return Math.floor(Math.random() * 100) + 1;
    }
    catch (error) {
        handleErrors(error);
    }
}

export function checkGuess(generatedNumber, playerGuess)
{
    try{
        if (generatedNumber < playerGuess)
    {
        console.log(getRandomItemFromArray(HIGHER_THAN_NUMBER_MESSAGES));
        DetermineDistance(generatedNumber, playerGuess);
        return false;
    }
    else if (generatedNumber > playerGuess)
    {
        console.log(getRandomItemFromArray(LOWER_THAN_NUMBER_MESSAGES));
        DetermineDistance(generatedNumber, playerGuess);
        return false;
    }
    else
    {
        console.log("Your guess is correct!!!");
        return true;
    }
    }
    catch (error)
    {
        handleErrors(error);
    }
}

function DetermineDistance(generatedNumber, playerGuess)
{
    try{
        console.log(Math.abs(generatedNumber, playerGuess));
        if(Math.abs(generatedNumber, playerGuess) <= 10)
        {
            console.log(getRandomItemFromArray(CLOSE_TO_NUMBER_MESSAGES));
        }
        else if(Math.abs(generatedNumber, playerGuess) <= 30)
        {
            console.log(getRandomItemFromArray(MEDIUM_DISTANCE_TO_NUMBER_MESSAGES));
        }
        else
        {
            console.log(getRandomItemFromArray(FAR_FROM_NUMBER_MESSAGES));
        }
    }
    catch(error)
    {
        handleErrors(error);
    }
}