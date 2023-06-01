import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";

export default function Detail({ navigation, route }) {
  const { title, description, completed, item, todos, setTodos } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [route]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year

    setCurrentDate(date + "/" + month + "/" + year + " ");
  }, []);

  const completedTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) return true;
      })
    );
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              completedTodo(item.id);
              navigation.navigate("Home");
            }}
          >
            {item.completed ? (
              <Text style={styles.text}>Undo</Text>
            ) : (
              <Text style={styles.text}>Done</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => deleteTodo(item.id)}
          >
            <Text style={styles.text}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.text}>{currentDate}</Text>
      </View>
      <View style={styles.backButton}>
        <Button
          title="Go back"
          color="rgb(136 19 55)"
          onPress={() => {
            navigation.goBack("Home");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 30,
  },
  description: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center",
  },
  descriptionText: {
    textAlign: "center",
    color: "rgb(136 19 55)",
    fontSize: 30,
  },
  text: {
    color: "rgb(136 19 55)",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    color: "rgb(136 19 55)",
    borderStyle: "solid",
    borderColor: "rgb(136 19 55)",
    borderWidth: 2,
    padding: 20,
    backgroundColor: "rgb(76 5 25)",
    borderRadius: 20,
    width: 150,
  },
  buttonContainer: {
    gap: 20,
    flexDirection: "row",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    display: "flex",
    backgroundColor: "rgb(76 5 25)",
    borderRadius: 20,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgb(136 19 55)",
    width: 300,
  },
});
