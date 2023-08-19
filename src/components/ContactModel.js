import close from "../assets/Close.svg"
export default function (){
    function handleSubmit(e){
        e.preventDefault();
        const [name,email,message]=e.target;
        window.alert(name.value,email.value,message.vaue)
    }
    function hideModel(){
        document.getElementById("contact-form").style.display="none";
    }
    return <>
    <div class="bg-image"></div>
    <div className="contact-form" id="contact-form">
        <div className="close" onClick={hideModel}><img src={close}></img></div>
        <h1>Contact</h1>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <form onSubmit={handleSubmit}>
            <div className="form-fied">
                <label>Name</label>
                <input placeholder="Enter your name here" required />
            </div>
            <div className="form-fied">
                <label>E-mail</label>
                <input placeholder="Enter your e-mail address here" required />
            </div>
            <div className="form-fied">
                <label>Message</label>
                <input placeholder="Wanna share something with us ?" />
            </div>
            <button type={"submit"} className="submit">Submit</button>
            <p>Need more info? <a href="hello@newzera.com">hello@newzera.com</a></p>
        </form>
    </div>
    </>
}