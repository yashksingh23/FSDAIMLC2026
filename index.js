const myPromise=new Promise((resolve, reject)=>{ username="ptomer40";
password="1234"
if(username=="ptomer40"
&& password=="1234") {
resolve("success")
} else {
reject("username or password is incorrect")
}
})
myPromise.then((msg)=>{
console.log(msg)
}).catch((msg)=>{
console.log(msg)
}).finally(()=>{
console.log("All the resources have been closed/memory released")
})