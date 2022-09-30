import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Todo = (props) => {
  const deleteItemHandler = () => {
    props.deleteItemHandler(props.id);
  };
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{props.title}</Text>
      <AntDesign
        style={styles.button}
        name="delete"
        size={30}
        color={"#4c8bf5"}
        onPress={deleteItemHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4c8bf5",
    borderRadius: 7,
    justifyContent: "space-between",
  },
  text: {
    flex: 0.9,
    marginRight: 10,
    padding: 10,
    fontSize: 30,
    fontWeight: "200",
    color: "#000000",
  },
  button: {
    flex: 0.1,
    marginRight: 10,
  },
});

export default Todo;
