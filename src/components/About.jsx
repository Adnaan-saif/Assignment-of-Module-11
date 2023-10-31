
const About = () => {
    const about = ['Students','Tutors','Course','Organization']
    return (
        <div>
            <h2>About</h2>
            <ul>
                {
                about.map((item,i)=>{
                    return <li key={i.toString}>{item}</li>
                })
                }
            </ul>
        </div>
    );
};

export default About;