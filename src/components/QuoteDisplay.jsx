// import useFetch from "../hooks/useFetchQuote";

import useFetch from "../hooks/useFetchQuote";

const QuoteDisplay = () => {
    const quoteUrl = 'https://korean-advice-open-api.vercel.app/api/advice'
    const {loading : loading, data : data} = useFetch(quoteUrl);
    return (
        <>
            {!loading && (
                <>
                    <p className="quote-content">{data.message}</p>
                    <p className="quote-author">{data.author}</p>
                </>
            )}
        </>
    );
}

export default QuoteDisplay;