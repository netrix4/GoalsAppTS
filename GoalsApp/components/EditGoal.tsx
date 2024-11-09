import { StyleSheet, Text, SafeAreaView, Modal, TouchableOpacity, TextInput } from "react-native";
import React from "react";

interface IGoal {
  goal: string;
  id: string;
}

interface IEditGoalProps{
  isVisible: boolean;
  newEditingGoal: IGoal;
  changeEditHandler: () => void;
  updateGoalHandler: () => void;
  onHideHandler: () => void;

}


const EditGoal: React.FC<IEditGoalProps>= ({isVisible, newEditingGoal, changeEditHandler, updateGoalHandler,onHideHandler})=>{
  return (
    <Modal  visible={isVisible} animationType="slide">
    <SafeAreaView style={styles.SAV}>
      {/* <View> */}
        <Text>Modal de editar</Text>
        <TextInput value={newEditingGoal.goal} onChangeText={changeEditHandler}/>
        <TouchableOpacity onPress={updateGoalHandler}><Text>Actualizar</Text></TouchableOpacity>
        <TouchableOpacity onPress={onHideHandler}><Text>Esconder</Text></TouchableOpacity>
      {/* </View> */}
    </SafeAreaView>
  </Modal>
  );
}

export default EditGoal

const styles = StyleSheet.create({
  SAV:{padding: '15%'}
});
