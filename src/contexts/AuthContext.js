import React, { createContext, Component } from "react"

// @ts-ignore
export const AuthContext = createContext()

class AuthContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
    }
  }

  toggleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
