const url="http://localhost:5271/api/Events";
const getEvents = async () => {
    try {
      const response = await fetch(
        url
      );
      const data = await response.json();
      //setEvents(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getEvents();