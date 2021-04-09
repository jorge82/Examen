var data=[
  {
      "id":0,
      "name": "Lucia",
      "lastName":"Perez",
      "latitude": -34.60376,
      "longitude": -58.38162,
      "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
     
  },
  {
      "id":1,
      "name": "Ana",
      "lastName":"Garcia",
      "latitude": -34.601083,
      "longitude": -58.383083,
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg",
      
  },
  {
      "id":2,
      "name": "Maria",
      "lastName":"Perez",
      "latitude": -34.608056,
      "longitude": -58.370278,
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg",
     
  },
  {
      "id":3,
      "name": "Claudia",
      "lastName":"Maradona",
      "latitude": -34.63565,
      "longitude": -58.36465,
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
    
  },
  {
      "id":4,
      "name": "Claudio",
      "lastName":"Perez",
      "latitude": -34.611944,
      "longitude": -58.364722,
      "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg",
     
  },
  {
      "id":5,
      "name": "Juan",
      "lastName":"Bienes",
      "latitude": -34.601083,
      "longitude": -58.383083,
      "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
     
  },
  {
      "id":6,
      "name": "Santiago",
      "lastName":"Antonino",
      "latitude": -34.625958,
      "longitude": -58.381336,
      "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
    
  },
  {
      "id":7,
      "name": "Elena",
      "lastName":"Hara",
      "latitude": -34.573333,
      "longitude": -58.414722,
      "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
    
  },
  {
      "id":8,
      "name": "Florencia",
      "lastName":"Hara",
      "latitude": -34.609653,
      "longitude": -58.392581,
      "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg",
     
  },
  {
      "id":9,
      "name": "Sofia",
      "lastName":"Fernandez",
      "latitude": -34.594722,
      "longitude": -58.375833,
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg",
     
  }
]


const getPeople=()=>{
  return data;
}

const addPerson=(name, lastName, latitude, longitude, photo)=>{


  try{
      let newValue={
              "id":data.length,
              "name": name,
              "lastName":lastName,
              "latitude": latitude || "",
              "longitude": longitude || "",
              "photo": photo || ""

      };
     data.push(newValue);

  }catch(e){
     console.log(e);
  }

}

const deletePerson =(id)=>{

    const newData=  data.filter(value=> value.id!=id)

    data=newData;

}

const editPerson =(id, newData)=>{

  const position=data.findIndex(elem=>elem.id==id)
  if (position>=0){
      data[position]=newData
      return 0;

  }else{
      return -1;
  }
}

export {getPeople, editPerson, deletePerson, addPerson}