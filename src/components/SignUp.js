

function SignUp() {
    return (
        <div>
            
            <h1>Create An Account</h1>

            <div className="signup-div">

                <form className="signup-form">

                    <label className="label">Email</label>
                    <input className="input"></input>
                    <label className="label">Password</label>
                    <input className="input"></input>
                    <label className="label">Confirm Password</label>
                    <input className="input"></input>
                    <button className="signup-btn">Submit</button>

                </form>

            </div>

        </div>
    )
}

export default SignUp;