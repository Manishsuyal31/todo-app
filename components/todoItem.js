import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function TodoItem({ item, handlePress }) {
    return (
        <TouchableOpacity onPress={() => handlePress(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  item: {
      marginTop: 16,
      padding: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10
  }
})