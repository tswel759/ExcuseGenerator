import{useState} from "react";

interface FormData{
  name: string;
  powod_wymowki: string;
}

const Form =() =>{
  const [formData,setFormData]=useState<FormData>({name:"",powod_wymowki:""});

  function handleSubmit(e: React.FormEvent){
    console.log("nacisnąłeś submita")
    console.log(e)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>)
  {
    console.log(e)
    const{name,value}=e.target;
    setFormData(prev=>({...prev, [name]:value}))
    console.log(formData)
  }
  return(
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
          />
        </label>
        <label>
          Powod wymowki:
          <input type="select"
                 name="powod_wymowki"
                 value={formData.powod_wymowki}
                 onChange={handleChange}
          />
        </label>
        <button type="submit">Wyslij formularz</button>
      </form>
  )
}

export default Form;