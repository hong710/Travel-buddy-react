import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const {data: {data} } =await axios.get(URL,{
            //options params
            params: {
                bl_latitude:sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,        
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '37d9530356msh0f119ad1cdaa788p1bc2fdjsn41786d84591b'
            }
        });
        return data;
    } catch (error) {
        //console.log(error);
    }
}