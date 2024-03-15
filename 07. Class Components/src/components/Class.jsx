import { Component } from "react";

class Class extends Component {
    render() {
        const _props = this.props
        return (
            <div>
                <h1>{_props?.message}</h1>
            </div>
        )
    }
}

export default Class