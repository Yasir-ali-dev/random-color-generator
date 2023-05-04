import React from 'react'
function Square(props){
    const styles={
        backgroundColor:props.color,
        width:'250px',
        height:'150px',
        margin:'3px',
        border:'3px solid grey',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        borderRadius:'7px',
    }
    return(
        <div 
            className='square' 
            style={styles}
            onClick={()=> props.onClick(props.value)}
        ></div>
    )
}
export default Square;