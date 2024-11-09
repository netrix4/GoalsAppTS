import EditGoal from "@/components/EditGoal";
import GoalInput from "@/components/goalInput";
import GoalItem from "@/components/goalItem";
import { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  interface IGoal {
    goal: string;
    id: string;
  }

  const [goalList, setGoalList] = useState<IGoal[]>([]);
  const [newEditingGoal, setNewEditingGoal] = useState<IGoal>({
    goal: "",
    id: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const addGoalHandler = (goal: string) => {
    let goalCopy = `${goal}`;
    const noWhiteSpacesRegex = /^(( )+)$/gm;

    if (!noWhiteSpacesRegex.test(goalCopy)) {
      goalCopy = goalCopy.replace(/^[ ]+/gm, "");
      goalCopy = goalCopy.replace(/( )+$/gm, "");

      const newGoal = {
        goal: goalCopy,
        id: Math.random().toString(),
      };

      setGoalList([...goalList, newGoal]);
    }
  };

  const deleteGoalHandler = (goalID: string) => {
    setGoalList(goalList.filter((item) => item.id != goalID));
  };

  const editGoalHandler = (editingGoal: IGoal) => {
    setIsEditing(true);
    setNewEditingGoal(editingGoal);
  };

  const changeEditHandler = (textChange: string) => {
    setNewEditingGoal({ ...newEditingGoal, goal: textChange });
  };

  const updateGoalHandler = () => {
    const tempGoal = newEditingGoal;

    const noWhiteSpacesRegex = /^(( )+)$/gm;

    if (!noWhiteSpacesRegex.test(tempGoal.goal) && !(tempGoal.goal == "")) {
      tempGoal.goal = tempGoal.goal.replace(/^[ ]+/gm, "");
      tempGoal.goal = tempGoal.goal.replace(/( )+$/gm, "");

      setNewEditingGoal(tempGoal);

      const arrActualizado = goalList.map((obj) => {
        if (obj.id === newEditingGoal.id) {
          return { ...obj, goal: newEditingGoal.goal };
        }
        return obj;
      });

      setGoalList(arrActualizado);
    } else {
      console.log("Edicion invalida");
    }

    setIsEditing(false);
  };
  const onHideHandler = () => {
    setIsEditing(false);
  };

  return (
    <View style={styleSheet.mainContainer}>
      <View style={styleSheet.mainWrapper}>
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styleSheet.goalsWrapper}>
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.goalTitle}>Lista de metas</Text>
          </View>

          <FlatList
            style={styleSheet.goalList}
            data={goalList}
            renderItem={(itemData) => (
              <GoalItem
                itemGoal={itemData.item}
                onDelete={deleteGoalHandler}
                onEdit={editGoalHandler}
              />
            )}
          />

          <EditGoal
            isVisible={isEditing}
            newEditingGoal={newEditingGoal}
            changeEditHandler={changeEditHandler}
            updateGoalHandler={updateGoalHandler}
            onHideHandler={onHideHandler}
          />

          {/* <Modal visible={isEditing} animationType="slide">
            <SafeAreaView style={{ padding: "15%" }}>
              <Text>Modal de editar</Text>
              <TextInput
                value={newEditingGoal.goal}
                onChangeText={changeEditHandler}
              />
              <TouchableOpacity onPress={updateGoalHandler}>
                <Text>Actualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsEditing(false)}>
                <Text>Esconder</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </Modal> */}
        </View>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#d6dbdb",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: "10%",
    width: "100%",
    height: "100%",
    paddingTop: "5%",
    paddingBottom: "10%",
  },
  mainWrapper: {
    backgroundColor: "#4892ef",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    padding: "3%",
    paddingBottom: "11%",
    paddingTop: "10%",
  },
  goalsWrapper: {
    flexDirection: "column",
    backgroundColor: "#e8eaea",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  goalList: {
    width: "100%",
    maxHeight: "100%",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    width: "100%",
  },
  goalTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
