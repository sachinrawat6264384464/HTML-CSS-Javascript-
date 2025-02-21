const apii="https://jsonplaceholder.typicode.com/users"
const getapi=async(api)=>{
  const responce=  await fetch(api)
  const data=await responce.jason()
  console.log(data)


}
getapi(apii)