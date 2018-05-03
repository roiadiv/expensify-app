//connect to the dataBase
//* - we take all from firebase and store in the var 'firebase'
//beside to grab them {firebasrVar1,firebasevar2....}
//****************************firebase dosnt support arrays!!!!!!!!!! */
import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MASSAGING_SENDER_ID
  };
  
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider ,database as default };

//in Addtion to 'value' event:
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

//   const onExpensesChange = database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
//   })

//   database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
//   })

//   database.ref('expenses').push({
//     description:'Credit Card',
//     note:'blabla',
//     amount: 4500,
//     createdAt:8 
//   })

//   database.ref('notes/-LB0poPNXDNwM6D_6Jtv').remove();

//   database.ref('notes/-LB0poPNXDNwM6D_6Jtv').update({
//       body:'food!'
//   })

//   database.ref('notes').push({
//       title:'Seconde note',
//       body: 'Go to store'
//   })


//  const onValueChange = database.ref().on('value',(snapshot)=>{
//         const {name,job} = snapshot.val();
//         console.log(`${name} is a ${job.title} at ${job.company}`);
//   })

//   database.ref('name').set('Roy Adiv');

  
  //on provide us to listen to event over and over again,
  //we subcribe, and when we change the database this callback going to run
// const onValueChange =  database.ref().on('value',(snapshot)=>{
//         console.log(snapshot.val());
//   },(e)=>{
//     console.log('Error with data fetching',e);
//   })

//   setTimeout(()=>{
//     database.ref('age').set(28);
//   },3500)

//   setTimeout(()=>{
//     database.ref().off(onValueChange);
//   },7000)

//   setTimeout(()=>{
//     database.ref('age').set(30);
//   },10500)
  
  //once give us the data 
  //he listen only one time to the event(the 'value' event in our exemple),
  // so he turn the 'on' method finsih is work and then switch over to 'off' method
//   database.ref()
//             .once('value')
//             .then((snapshot)=>{
//                 const val = snapshot.val();
//                 console.log(val);
//             })
//             .catch((e)=>{
//                 console.log('Error feching data.',e);
//             });

  //The ref method give us refernce to specific part of our database 
  //when we not pass a name of the part, we rference to the root of the database

  //The set method return a promsie, so we can use 'then' and 'cach' 
//   database.ref().set({
//       name:'Roy Adiv',
//       age:26,
//       isSingle:false,
//       stressLevel:6,
//       job:{
//           title:'Softwere developer',
//           company:'Google'
//       },
//       location:{
//         country:'Israel',
//         city:'Bat-Yam'
//       }
      
//   }).then(()=>{//dont get any arguments like we do in playground
//       console.log('Data is saved');
//   }).catch((e)=>{
//       console.log('This failed.',e);
//   });

// database.ref().update({
//     stressLevel:9,
//     'location/city':'Seattle',
//     'job/company': 'Amazon'
// });


//use update method to change the data.
//this is gonna work only in the root level,
//we cant go to location and change only the city,
//its remove the country
//-->it not suport nasted object
// database.ref().update({
//     age:27,
//     location:{
//         city:'TLV'
//     }
// });


//use set method to delate data
// database.ref('isSingle').set(null);

//use remove method to delate data
// database.ref().remove()
// .then(()=>{
//     console.log('Remove succeeded');
// })
// .catch((e)=>{
//     console.log('Remove failed',e);
// });















// //   database.ref('age').set(27);
// //   database.ref('location/city').set('Tel-Aviv');

//   database.ref('attributes').set({
//       height: 12,
//       weight:45
//   }).then(()=>{
//     console.log('Data is saved');      
//   }).catch((e)=>{
//     console.log('This failed.',e);
//   });