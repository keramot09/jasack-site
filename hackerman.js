let  a= [
    'Initializing Hack tool...',
    'Collecting email details...',
    'Conecting to local server...',
    'Conecting With Ip...',
    'Conection failed..Trying again',
    'Conection failed..Trying again'
   ,'Ip accessed..',
    'Username set big_bro',
    'Conecting to facebook...',
    'Conecting to instagram...',
    'Trying Brute Fource....',
    '20000 passwords tried',
    'No match found..',
    'Again 20000 password tried',
    'No match...'
    ,'Trying 20000 pass again',
    'Passwords cracked',
    'Accessing all acount....',
    'Hack succesful'

]
const sleep =async (sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(true)}, sec*1000)
    })
}
const showhack=async(sent)=>{
    await sleep(3)
    hacker.innerHTML= hacker.innerHTML + sent +"<br>"
    
}
(async()=>{
    for(let i=0; i<a.length;i++){
        await showhack(a[i])
    }
})()