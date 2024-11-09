import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Button, View } from "react-native";

interface IGoal {
  goal: string;
  id: string;
}

interface GoalToRenderProps{
    itemGoal: {goal: string, id: string}
    onDelete: (goalID: string) => void
    onEdit: (editingGoal: IGoal) => void
}


const GoalItem: React.FC<GoalToRenderProps> = ({itemGoal, onDelete, onEdit}) => {
  
  const onDeleteHandler = () => {
    onDelete(itemGoal.id)
  }
  const onEditHandler = () => {
    // onEditHandler(itemGoal.id)
    onEdit(itemGoal)
  }

  return (
    <View style={styles.goalContainer} >
        <Text onPress={onDeleteHandler} onLongPress={onEditHandler} style={styles.goalText}>{itemGoal.goal}</Text>
        {/* <TouchableOpacity onPress={onEditHandler}><Text style={styles.buttonText}>Editar</Text></TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    fontSize: 20,
    
  },
  goalTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  goalText: {
    fontSize: 20,
    width: '80%',
    // backgroundColor: 'rgb(0,255,0)'
  },
  buttonText: {
    fontSize: 20,
    color: '#0070ff'
  },
})

export default GoalItem