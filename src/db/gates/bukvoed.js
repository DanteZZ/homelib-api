import axios from "axios";
import { ExternalModel } from "../models/external";

export default {
    name: "Буквоед",
    image: "https://www.bookvoed.ru/Public/AeDB0BTgII5J121YKTivyA.svg",
    find: async (query) => {
        const { data } = await axios.get("https://api.retailrocket.net/api/2.0/recommendation/Search/559bea0f68e9a6115457fe90/", {
            params: {
                phrase: query,
                format: "json",
                isDebug: true
            }
        })
        return data.map(i => new ExternalModel({
            image_min: i.PictureUrl || null,
            image: i.PictureUrl || null,
            name: i.Name,
            author: i?.Params?.['Автор'] || null,
            price: i.Price || null
        }));
    }
}