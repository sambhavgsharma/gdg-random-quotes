document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const generateButton = document.getElementById('generateButton');

    const updateQuote = (quote, author) => {
        quoteElement.textContent = `"${quote}"`;
        authorElement.textContent = `— ${author}`;
    };

    const getNewQuote = () => {
        fetch('https://dummyjson.com/quotes/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => updateQuote(data.quote, data.author))
            .catch(error => {
                console.error('Error fetching quote:', error);
                updateQuote('Oops! Something went wrong.', '');
            });
    };

    // Fetch a quote on page load
    getNewQuote();

    // Attach event listener to the button
    generateButton.addEventListener('click', getNewQuote);
});