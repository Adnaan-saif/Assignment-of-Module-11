
const Header = () => {
    let login = true
    return (
        <div>
            <h2>Home</h2>
            {
            login==true?
            <p>You are logged in</p>
            :
            <p>Please log in</p>
            }
        </div>
    );
};

export default Header;