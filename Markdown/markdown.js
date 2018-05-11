axios.get('/api/contacts',{
  params : { data }
}).then((res)=>{
  console.log(`response : ${res}`)
}).catch((e)=>{
  console.log(`error ${e}`)
})

axios.post('/api/contacts',{
  name : "name",
  tel : "tel",
  address : "address"
}).then((res)=>{
  console.log(`response : ${res}`)
}).catch((e)=>{
  console.log(`error ${e}`)
})

const data = new FormData();
const file = this.$refs.photofile.file[0];
data.append('photo',file);

axios.post('/api/contacts',data).then((res)=>{
  console.log(`response : ${res}`)
}).catch((e)=>{
  console.log(`error ${e}`)
})
