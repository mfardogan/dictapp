import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Style } from "./Style";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View
      style={[
        Style.container,
        { backgroundColor: !modal ? "white" : "rgba(37, 37, 37, 0.4)" },
      ]}
    >
      <StatusBar style="auto" />
      <Word />
      <Create modal={{ modal, setModal }} />
    </View>
  );
}

const Word = () => {
  return (
    <>
      <Text style={Style.words}>
        2 <AntDesign name="heart" size={40} color="red" />f
        <Text style={Style.current}> 100</Text>
      </Text>

      <View style={Style.word}>
        <View style={Style.wordSegment}>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[Style.wordSegment, { flex: 3 }]}>
          <Text style={Style.en}> Arbitrary </Text>
          <Text style={Style.tr}>Rastgele</Text>
        </View>
        <View style={Style.wordSegment}>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="right" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const Create = (props) => {
  const { setModal } = props.modal;
  return (
    <View style={Style.createButton}>
      <View style={Style.circle}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Ionicons name="md-add" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <ModalView {...props} />
    </View>
  );
};

const ModalView = (props) => {
  const { modal, setModal } = props.modal;
  return (
    <Modal
      transparent
      animationType="slide"
      visible={modal}
      onRequestClose={() => setModal(false)}
    >
      <View style={Style.modal}>
        <TouchableOpacity style={Style.close} onPress={() => setModal(false)}>
          <Text style={Style.cross}>x</Text>
        </TouchableOpacity>

        <TextInput placeholder="English" style={Style.textBox} />
        <TextInput placeholder="Turkish" style={Style.textBox} />

        <TouchableOpacity>
          <View style={Style.button}>
            <AntDesign name="heart" size={20} color="red" />
            <Text style={Style.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
