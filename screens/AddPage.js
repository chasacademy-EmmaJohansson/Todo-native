import { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

export default function AddPage({ navigation }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [description, setDescriptions] = useState([]);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={todoTitle}
          placeholder="Write a todo..."
          placeholderTextColor="black"
          onChangeText={(text) => setTodoTitle(text)}
        />
        <TextInput
          style={styles.inputDescription}
          value={description}
          placeholder="Write a description..."
          placeholderTextColor="black"
          onChangeText={(text) => setDescriptions(text)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            const todo = {
              description,
              todoTitle,
              id: Math.random(),
              completed: false,
            };
            navigation.navigate("Home", { todo });
            setTodoTitle("");
            setDescriptions("");
            title = "Add";
          }}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backButton}>
        <Button
          onPress={() => navigation.goBack()}
          title="Go Back"
          color="rgb(136 19 55)"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    marginBottom: 8,
    fontSize: 20,
    borderStyle: "solid",
    borderColor: "rgb(136 19 55)",
    borderWidth: 2,
    padding: 4,
    textAlign: "center",
    backgroundColor: "rgb(76 5 25)",
    borderRadius: 20,
    height: 70,
  },
  inputDescription: {
    fontSize: 20,
    borderStyle: "solid",
    borderColor: "rgb(136 19 55)",
    borderWidth: 2,
    padding: 4,
    textAlign: "center",
    backgroundColor: "rgb(76 5 25)",
    borderRadius: 20,
    width: 300,
    height: 144,
  },

  addButton: {
    borderStyle: "solid",
    borderColor: "rgb(136 19 55)",
    borderWidth: 2,
    padding: 20,
    backgroundColor: "rgb(76 5 25)",
    borderRadius: 20,
    width: 100,
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 20,
    textAlign: "center",
  },
  backButton: {
    backgroundColor: "rgb(76 5 25)",
    borderRadius: 20,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgb(136 19 55)",
  },
});
