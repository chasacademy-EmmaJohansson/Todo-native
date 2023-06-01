import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomePage({ navigation, route }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (route.params?.todo) {
      setTodos((prev) => [...prev, route.params?.todo]);
      console.log("sucess");
    }
  }, [route.params]);

  const renderTodoItem = ({ item }) => {
    return (
      <View>
        <Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail", {
                title: item.todoTitle,
                description: item.description,
                completed: item.completed,
                id: item.id,
                item: item,
                todos: todos,
                setTodos: setTodos,
              });
            }}
          >
            <View>
              {item.completed ? (
                <View style={styles.renderTodo}>
                  <Text style={styles.completedTodo}>{item?.todoTitle}</Text>
                  <Text style={styles.arrow}>➜</Text>
                </View>
              ) : (
                <View style={styles.renderTodo}>
                  <Text style={styles.todos}>{item?.todoTitle}</Text>
                  <Text style={styles.arrow}>➜</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO`S</Text>
      <View style={styles.addTodo}>
        <Button
          title="Add todos"
          color="rgb(136 19 55)"
          onPress={() => {
            navigation.navigate("AddPage");
          }}
        />
      </View>
      <View style={styles.todoContainer}>
        <FlatList
          style={styles.todos}
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item.id}
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
    gap: 30,
  },
  header: {
    paddingTop: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "rgb(136 19 55)",
  },
  renderTodo: {
    display: "flex",
    padding: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderBottomColor: "rgb(136 19 55)",
    borderBottomWidth: 1,
  },
  todoContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  todos: {
    color: "rgb(136 19 55)",
    fontSize: 40,
  },
  arrow: {
    fontSize: 40,
    color: "rgb(136 19 55)",
  },
  completedTodo: {
    textDecorationLine: "line-through",
    color: "rgb(136 19 55)",
    fontSize: 40,
  },
  addTodo: {
    alignSelf: "center",
    borderWidth: 4,
    width: 200,
    padding: 10,
    borderStyle: "solid",
    borderColor: "rgb(136 19 55)",
    backgroundColor: "rgb(76 5 25)",
    borderRadius: 20,
  },
});
