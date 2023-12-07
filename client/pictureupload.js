const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
    function handleChange(e) {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }
    const uploadImage= async()=>{
      console.log(file);
      const formData = new FormData();
            formData.append('file', file);
            formData.append('FileName',fileName);
            formData.append('eventId',2);

      try{
        const res=await axios.post("http://localhost:5271/api/EventImages/Upload",formData);
        console.log(res);
      }
      catch(ex){
        console.log(ex);
      }
    }