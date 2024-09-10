importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");


//Using singleton breaks instantiating messaging()
// App firebase = FirebaseWeb.instance.app;


firebase.initializeApp({
                         apiKey: "AIzaSyAJ8SqX5MyRun4p6_8wjC3DonZboFQh8cQ",
                         authDomain: "gigacms-44616.firebaseapp.com",
                         projectId: "gigacms-44616",
                         storageBucket: "gigacms-44616.appspot.com",
                         messagingSenderId: "611770650068",
                         appId: "1:611770650068:web:245c4814df3d9574a5da41"
                       });

const messaging = firebase.messaging();
//BO_1VxQJI9dXSvX6UYVHew2J3JJW6dSH37K9e5lPLGfSDKDFeIFVs8Jv_73NFR6TRzQQB7tV0-aXNSUn21mKIaQ


//
//self.addEventListener('push', function(event) {
//  console.log('Push event received:', event);
//
//  const data = event.data ? event.data.json() : {};
//  const title = data.notification ? data.notification.title : 'Default Title';
//  const options = {
//    body: data.notification ? data.notification.body : 'Default Body',
//    icon: data.notification ? data.notification.icon : 'default-icon.png',
//  };
//
//  console.log('Showing notification with title:', title);
//
//  self.registration.showNotification(title, options);
//});