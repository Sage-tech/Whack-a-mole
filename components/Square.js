import React, {useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { addScore } from './../redux'
import { connect } from 'react-redux'

const Square = (props) => {
    const [moleActive, setMoleActive] = useState(false)
    const[isGameOver, setGameOver] = useState(false)

    const randomTime = Math.random() * 20000
    let timerId

      useEffect(() => {     // after x amount of time has passed set MoleActive to true
                             // after another x amount of time has passed set MoleActive to false
        const timerId = setInterval (() => {
           setMoleActive(true)
           setTimeout(() => {setMoleActive(false)},800)
        }, randomTime)
        setTimeout(endGame, 60 * 1000)
    }, [])
     
   function endGame(){
    clearInterval(timerId)
    setGameOver(true)
   }
// when mole is active invoke the add score function 
    return (
    <TouchableOpacity onPress={moleActive? props.addScore : null}>  
    <Image
    source={moleActive? require('../assets/mole.png'): require('../assets/hole.png')}
   style={moleActive? styles.mole : styles.square}>  
    </Image>
{/*            
   // if mole is active set the style as mole if not active set styles to square  */}

</TouchableOpacity>
    )

}

const styles = StyleSheet.create({
square: {
 flex: 1,
 minWidth: 80,
 minHeight: 80,
margin: 10,
backgroundColor:'#9BF89C',
width: '100%'
},
mole: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: '#9BF89C', 
    width: '100%'
},
x: {
    fontWeight: 'bold',
    fontSize: 65,
    textAlign: 'center',
}
})

// mapping the state to the redux store into this component


const mapStateToProps = state => {
    return {
        score: state.score
    }
}
const mapDispatchToProps = dispatch => {
return {
addScore: () => dispatch(addScore())   // invoked function
}

}

export default connect(mapStateToProps, mapDispatchToProps)(Square)

    // map it to the square component and connecting them together