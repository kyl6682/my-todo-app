// import useFetch from "../hooks/useFetchQuote";

import useFetch from "../hooks/useFetchQuote";

const QuoteDisplay = () => {
    const quoteUrl = 'https://korean-advice-open-api.vercel.app/api/advice'
    const {loading : loading, data : data} = useFetch(quoteUrl);
    return (
        <>
            {!loading && (
                <>
                    <p>{data.message}</p>
                    <p>{data.author}</p>
                </>
            )}
        </>
    );
}

export default QuoteDisplay;