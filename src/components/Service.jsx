
const Service = () => {
    let status = true;
    return (
        <div>
            <h2>Service</h2>
            {
            status?
            <p>Compliments to Ostad</p>
            :
            <p>No comments</p>
            }
        </div>
    );
};

export default Service;