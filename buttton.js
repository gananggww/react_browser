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
