import React, {useCallback, useEffect, useState} from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import TaskList from "./src/components/TaskList";
import * as Animatable from 'react-native-animatable'

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App(){
  //faz a renderização da tarefa na pagina principal
  const [task, setTask] = useState([])
  //manipula a abertura e o fechamento do modal de adição de tarefas
  const [open, setOpen] = useState(false)
  //faz a captura da nova tarefa descrita pelo usuario no campo input
  const [input, setInput] = useState("")



  //função de adição de nova tarefa
  function handleAdd(){
    if(input === '') return;

    const data ={
      key: input,
      task: input
    };

    //renderiza uma nova tarefa no "data" da flatList
    setTask([...task, data]);
    //fecha o modal
    setOpen(false)
    //limpa o input
    setInput('')
  }

  //remoção de tarefa concluida
  const handleDelete = useCallback((data) => {
    const find = task.filter(r => r.key !== data.key)
    setTask(find)
  })

  return(
    <SafeAreaView style={styles.container}>

      {/*barra de tarefas */}
      <StatusBar backgroundColor="#251d99" barStyle="light-content"/>
      <View style={styles.content}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      {/*aqui vai a lista*/}
      <FlatList 
      marginHorizontal={15}
      //bloqueia a barrade scroll lateral
      showsHorizontalScrollIndicator={false}
      //armazena os dados das tarefas
      data={task}
      //da uma chave exclusiva para cada tarefa
      keyExtractor={(item) => String(item.key)}
      //cada vez que eles passar pelo item e vai renderizar ou remover de acordo com a ação do usuario
      renderItem={({item}) => <TaskList data={item} handleDelete={handleDelete}  />}
      />

      {/*pagina de adiçãod e novas tarefas*/}
      <Modal  animationType="slide" transparent={false} visible={open} duration={1500}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            {/*fecha o modal com o metodo onPress convertendo o setOpen */}
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="aliceblue"/>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Nova Tarefa</Text>
          </View>
          <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
            <TextInput 
            //faz a quebra de texto automatico
            multiline={true}
            placeholderTextColor="grey"
            //desliga o corretor automatico
            autoCorrect={false}
            placeholder="O que precisa fazer hoje?"
            style={styles.input}
            value={input}
            onChangeText={ (texto) => setInput(texto)}/>

            {/*responsavel por cadastrar uma nova tarefa */}
            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </Modal>

      {/*botão de acição de tarefa */}
      <AnimatedBtn
      useNativeDriver
      animation="bounceInUp"
      duration={1500}
      //abre o modal com o metodo onPress
      onPress={() => setOpen(true)}
      style={styles.fab}>
        <Ionicons name="ios-add" size={35} color="aliceblue" />
      </AnimatedBtn>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#251d99'
  },
  title:{
    marginTop: 22,
    paddingBottom: 10,
    fontSize: 23,
    textAlign: 'center',
    color: 'aliceblue'
  },
  fab:{
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#5099FF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    textShadowOffset:{
      width: 1,
      height: 3,
    }
  },
  modal:{
    flex:1,
    backgroundColor: '#251d99',
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle:{
    marginLeft: 75,
    fontSize:25,
    color: 'aliceblue',
  },
  modalBody:{
    marginTop:20,
  },
  input:{
    fontSize:18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: 'aliceblue',
    padding: 9,
    height:95,
    textAlignVertical: 'top',
    color: 'black',
    borderRadius: 5,
  },
  handleAdd:{
    backgroundColor: '#5099FF',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText:{
    color: 'aliceblue',
    textTransform: 'uppercase',
  }
})