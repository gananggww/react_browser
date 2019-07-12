class Button extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          value:'button musuh',
          payload: 'ini payload dari children'
        }
    }  

    render () {
        return (
            <div>
                <button onClick={() => this.props.from_children(this.state.payload)}>
                    {this.props.value ? this.props.value:this.state.value}
                </button>
            </div>
        )
    }
}

const ButtonFunction = (props) => {
    return (
        <div>
            <button>
                {props.value ? props.value : 'button default'}
            </button>
        </div>
    )
}


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'GANANG'
        }
    }
    dear_mom (value) {
        alert(value)    
    }

    render () {
        return (
            <div>
                <div>HELLO {this.state.name}, {this.props.example}</div>
                <Button
                    value='button ganang'
                    from_children={(e) => this.dear_mom(e)}
                    aku_kasi_nama={this.state.name}
                />
                <ButtonFunction
                    value='button function'
                />
            </div>
        )
    }
}

ReactDOM.render(
    <Home   
      example = 'HAI AKU PROPS'
    />,
    document.getElementById('app')
);
