import React from 'react'

class LogIn extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>Sign Up</button>
            </form>
        )
    }
}

export default LogIn