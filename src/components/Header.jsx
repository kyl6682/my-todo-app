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
                <p>{`${year}년 ${month}월 ${date}일`}</p>
                <h1>Todo List</h1>
                <div>
                    <p>오늘의 명언</p>
                    <QuoteDisplay />
                </div>
            </div>
        </>
    )
}

export default Header;
