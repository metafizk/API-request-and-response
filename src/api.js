import axios from "axios";
const searchImages = async (term) => {
   try{

    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: 'Client-ID QQka74QX838hXvnnlZx1PbNhgaR-xmyDxhPPYnjll0E'
      },
      params:{
      query:term
      
      }
    });
    debugger;
    return response.data.results;

  }catch (error) {
   console.log("Error fetching image:",error.response ? error.response.data : error.message);
   return [];
 }



   };
  
   export default searchImages;