import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";

const Card = (props) => {
  // Props
  const { title, subTitle, imageUrl, onPress, thumbnailUrl } = props;

  // Data to display
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          tint="light"
          preview={thumbnailUrl}
          uri={imageUrl}
        />
        <View style={styles.bottom}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.compose({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 200,
    width: "100%",
  },
  bottom: {
    padding: 12,
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 17,
    marginTop: 4,
    fontWeight: "bold",
  },
});
