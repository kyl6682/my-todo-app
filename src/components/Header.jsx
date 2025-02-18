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
                    <p>반드시 이겨야 하는 건 아니지만 진실할 필요는 있다. 반드시 성공해야 하는 건 아니지만, 소신을 가지고 살아야 할 필요는 있다.</p>
                    <p>에이브러햄 링컨</p>
                </div>
            </div>
        </>
    )
}

export default Header;
