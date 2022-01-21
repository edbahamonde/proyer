const firebase = require("./firebase_connect")
const saveData= async (req,res)=>{
  const {name, email, cedula, persona, curso}= req;
 await firebase.firestore().collection('registro').doc().set({
      name: name,
      email: email,
      cedula: cedula,
      persona: persona,
      curso: curso,
    });
  res(null, {"message": "exitoso"})
}
const getData= async (req,res)=>{


  const {name, password}= req;
  console.log('No matching documents.');
  const Ref = firebase.firestore().collection('login');
  const query = await Ref.where('user', '==',name).where('password','==',password).get()
  if (query.empty) {
    console.log(name+" - "+password);
    res(null, {"message": "no exitoso"})
  }else{
    res(null, {"message": "exitoso"})
  }

}

module.exports = {
    saveData,
    getData
}
//export GOOGLE_APPLICATION_CREDENTIALS=
