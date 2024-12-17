import { useEffect, useState } from "react";

const quotes = [
    {
        "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
 {
        "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
 {
        "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
 {
        "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author":"Robert Frost"},
 {
        "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
 {
        "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
 {
        "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        "author":"Michael Jordan"},
 {
        "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.",
        "author":"Amelia Earhart"},
 {
        "quote":"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
        "author":"Ann Landers"},
 {
        "quote":"If you want your children to turn out well, spend twice as much time with them, and half as much money.",
        "author":"Abigail Van Buren"},
 {
        "quote":"Build your own dreams, or someone else will hire you to build theirs.","author":"Farrah Gray"},
 {
        "quote":"The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
        "author":"Jesse Owens"},
 {
        "quote":"Education costs money.  But then so does ignorance.","author":"Sir Claus Moser"},
 {
        "quote":"I have learned over the years that when one’s mind is made up, this diminishes fear.","author":"Rosa Parks"},
 {
        "quote":"It does not matter how slowly you go as long as you do not stop.","author":"Confucius"},
     
 
]
const QuoteGenerator = ()=>{
    const [quote, setQuote]=useState({});

    const getRandomQuote=()=>{
        const randomIndex=Math.floor(Math.random()*quotes.length);
        setQuote(quotes[randomIndex]);

    }

    useEffect(()=>{
        getRandomQuote();
    },[]);

    
    return(
        <>
            <div className="box-container">
                <h2>Random Quote Generator</h2>
                <div className="text">
                    <p>{quote.quote}</p>
                    <em>{quote.author}</em>
                </div>
                <button onClick={getRandomQuote}>Generate quote</button>
            </div>
        </>
    )
}

export default QuoteGenerator;