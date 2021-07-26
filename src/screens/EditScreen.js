import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const { state, editBlogPost } = useContext(Context);
    const post = state.find((post) => post.id === id);
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
        numberOfLines={10}
      />
      <TouchableOpacity
        style={styles.addPostBtn}
        onPress={() =>
          editBlogPost(id, title, content, () => {
            navigation.pop();
          })
        }
      >
        <Text style={styles.addPostTxt}>Save Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  addPostTxt: {
    color: "white",
    fontSize: 20,
  },
  addPostBtn: {
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "royalblue",
    borderColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default EditScreen;
