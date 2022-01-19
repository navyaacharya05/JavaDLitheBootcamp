let info=[
    {
        "org":"Infosys",
        "locations":["banglore","mysore","chennai"],
        "employees":20000,
        "basic":4.5,
        "services":["apps","test","bpo"],
        "benchmarks":["airtel","icici"]
    },
    {
        "org":"Cognizant",
        "locations":["cohin","coimbatore","chennai"],
        "employees":15000,
        "basic":2.5,
        "services":["apps","test"],
        "benchmarks":["axis","incometaxindia"]
    },
    {
        "org":"Evry India Pvt LTD",
        "locations":["banglore","Belgam"],
        "employees":10000,
        "basic":3.5,
        "services":["apps"],
        "benchmarks":["irctc","indian bank"]
    },
    {
        "org":"Multicoreware",
        "locations":["california","chennai","belgium"],
        "employees":1000,
        "basic":6.5,
        "services":["apps","test"],
        "benchmarks":["profilers","drivers"]
    }
]

const putting=(obj)=>{
    info.push(obj)
    alert("New Corporate added")
}
const getting=(name)=>{
    const newone=info.filter((elem)=>{
       return elem.org===name
    })
    return newone[0]
}


//const byPos=(index)=>{
  //  if(index<info.length())
    //   return info[index]
    //else
      // return index+" is not match in directory"
//}

const update=(corporate,index)=>{
    info[index]=corporate
    alert(corporate.org+" has updated")
}


export {putting,getting,update}
export default info;