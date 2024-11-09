import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'

interface GoalInputProps{
    onAddGoal: (goal:string) => void
}

const GoalInput: React.FC<GoalInputProps> = ({onAddGoal}) => {

  const [goal, setGoal] = useState('')

  const goalHandler = (goal: string) => {
    setGoal(goal)
  }

  const addGoalHandler = () => {
    onAddGoal(goal)
    setGoal('')
  }

  return (
    <View style={styles.inputsContainer}>
        <TextInput style={styles.goalInput} placeholder='Nueva Meta' onChangeText={goalHandler} value={goal}/>
        <TouchableOpacity  onPress={addGoalHandler}>
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputsContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    width:'auto',
    margin: '2%'
  },
  goalInput:{
    fontSize: 20,
    width: 180,
    padding: 5
  },
  addButtonText:{
    fontSize: 20,
    padding: '3%',
    color: '#0070ff'
  }
})

export default GoalInput