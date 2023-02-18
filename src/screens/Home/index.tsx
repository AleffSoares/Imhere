import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';


export  function Home(){
  const participants = ['Aleff', 'Alice', 'André', 'Ana', 'Jack', 'Davi', 'João'];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }
  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.eventName}> 
          Nome do evento
        </Text>

        <Text style={styles.eventDate}> 
          Sexta, 4 de Novembro de 2022.
        </Text>

        <View style={styles.form}>
            <TextInput 
              style={styles.input}
              placeholder="Nome do participante"  
              placeholderTextColor="#6B6B6B"
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
              <Text style={styles.buttonText}>
                  +
              </Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
            {
              participants.map(participant => (
                <Participant 
                  key={participant} 
                  name={participant} 
                  onRemove={() => handleParticipantRemove(participant)} 
                />
              ))
            }
        </ScrollView>

    </View>
  );
}