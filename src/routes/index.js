import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity,ScrollView,Keyboard} from 'react-native'
import TodoItem from '../components/TodoItem'


const Routes = () => {

    // const [text, setText] = useState({})
    // const [textItems, setTextItems] = useState([])
    // const [textdes, setTextdes] = useState({})
    // const [textItemsdes, setTextItemsdes] = useState([])

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const [todo, setTodo] = useState([])
 
    //  function AddTodo(){
    //    Keyboard.dismiss()
    //    setTextItems( [{...textItems,text},{...textItemsdes,textdes}])
    //    setText(null)
       
    //  }
    function AddTodo(){
      Keyboard.dismiss()
      let obj = {
        id: 1,
        title: title,
        desc: desc
      }
      const tempArr = [...todo, obj]
      if(title =='' || desc==''){

        alert('Todo (Title or Description) is Empty')
      }
      else{
      setTodo(tempArr);
      }
      
    }
     const onDelete=(index)=>{ 
       let itemCopy = [...todo];
       itemCopy.splice(index,1)
       setTodo(itemCopy)
     }
    //  const onDeleteDes=()=>{
    //  let itemDesCopy = [...textItemsDes];
    //  itemDesCopy.splice()
    //  setTextItemsDes(itemDesCopy)
    //  }
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.todo}>Add Todo</Text>
      <TextInput 
          style={styles.textinput} 
          placeholder={'Enter Your Todo'} 
          placeholderTextColor={'white'} 
          value={title}
          onChangeText={(e)=>{setTitle(e)}}
      />
      <Text style={styles.todoLists}>Add Todo Description</Text>
      <TextInput 
        style={styles.textinput}
        placeholder={'Enter Your Todo description '} 
        placeholderTextColor={'white'} 
        value={desc}
        onChangeText={(e)=>{setDesc(e)}}
      
      />
      <TouchableOpacity onPress={()=> {AddTodo()}}>
          <View style={styles.btnStyle}>
              <Text style={{color:'white',fontSize:20}}>Add Todo</Text>
          </View>
      </TouchableOpacity>
      {
        todo.map((item,index)=>{
        return (<TodoItem desc={item.desc} text={item.title} key={index} onPress={()=>{onDelete(index)}}/>)
            // return <TouchableOpacity key={index}  onPress={() => onDelete()}>
            //         <TodoItem text={item} /> 
            //       </TouchableOpacity>
        })
      }
    </View>
    
    
    
    </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      // justifyContent: 'center',
      paddingTop:35
    },
    todo:{
        marginHorizontal:12,
        fontSize:40
    },
    textinput:{
        borderRadius:12,
        backgroundColor:'#565',
        marginHorizontal:12,
        height:44,
        paddingHorizontal:12
    },
    todoLists:{
        marginHorizontal:12,
        fontSize:30
    },
    btnStyle:{
        height:44,
        width:"50%",
        backgroundColor:'black',
        borderRadius:12,
        marginHorizontal:12,
        marginTop:12,
        justifyContent:'center',
        alignItems:'center'
        
    },
    todoItem:{
      
    }
  });

export default Routes