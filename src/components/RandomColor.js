import React,{Component} from "react";
import Square from "./Square";
class RandomColor extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares:this.props.squares, 
        } 
    }

    handleClick=(id)=>{
        const tempSquares=[...this.state.squares];
        for (const key in tempSquares) {
           if(tempSquares[ key].value === id){
              tempSquares[key].color=this.randomColor();
           } 
        }
        this.setState({squares:tempSquares});
    }
    randomColor=()=>{
        return `${'#'+Math.floor(Math.random()*16777215).toString(16)}`;
    }

    render() { 
        const containerStyle={
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            border:'4px solid grey',
            boxSizing: 'border-box',
    
        }
        const headingStyle={
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: '3.2rem',
            fontWeight: '500',               
            backgroundColor: '#010120',
            color: 'wheat',
            borderBottom: '5px solid grey',  
        }

        return (
            <div style={{boxSizing:'border-box',display:'flex',flexDirection:'column' }}>
            <h1 style={headingStyle}>Random Color Generator</h1>
            <div className="App" style={containerStyle}>
            {this.state.squares.map(square=>{
                return( 
                    <Square 
                    key={square.value} 
                    value={square.value}
                    color={square.color}
                    onClick={this.handleClick}
                    />
                    )
                })}
            </div>
            </div>
        );
    }
}
RandomColor.defaultProps={
    squares:[
        {
            value:1,
            color:'pink'
        },
        {
            value:2,
            color:'green'
        },
        {
            value:3,
            color:'black'
        },
        {
            value:4,  
            color:'yellow'
       },
        {
            value:5,
            color:'grey'
        },
        {
            value:6,
            color:'red'
        },
        {
            value:7,
            color:'purple'
        },
        {
            value:8,
            color:'#122221'
        },
        {
            value:9,  
            color:'#129821'
       },
        {
            value:10,
            color:'#122297'
        },
        {
            value:11,
            color:'#432221'
        },
        {
            value:12,
            color:'#121761'
        },
        {
            value:13,
            color:'#111111'
        },
        {
            value:14,  
            color:'#999999'
       },
        {
            value:15,
            color:'#211122'
        }
    ]
}
export default RandomColor;
