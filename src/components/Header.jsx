import QuoteDisplay from "./QuoteDisplay";

function Header() {

    // 날짜 가져오기
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();


    return (
        <>
            <div className="header-container">
                <p className="date">{`${year}년 ${month}월 ${date}일`}</p>
                <h1>📌 Todo List</h1>
                <div className="quote-container">
                    <h3>오늘의 명언</h3>
                    <QuoteDisplay />
                </div>
            </div>
        </>
    )
}

export default Header;
