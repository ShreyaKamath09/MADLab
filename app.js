if('serviceWorker' in navigator){
    navigator.serviceWorker.register("/sw1.js")
    .then((reg)=>{
        console.log("Service Worker registered successfully!",reg.scope);
    })
    .catch((err)=>{
        console.log("Service Worker registration failed!",err);
    })
}