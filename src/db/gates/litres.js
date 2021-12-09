import axios from "axios";
import { ExternalModel } from "../models/external";

export default {
    name: "ЛитРес",
    image: "https://www.litres.ru/static/litres/i/footer/logo-gray.svg",
    find: async (query) => {
        const { data: { result } } = await axios.get("https://www.litres.ru/pages/search_slice", {
            params: {
                q: query,
                limit: 50,
                gu_ajax: true
            }
        })
        return result.map(i => new ExternalModel({
            image_min: `https://cv9.litres.ru/pub/c/cover_120/${i.id}.${i?.cover || "jpg"}`,
            image: `https://cv9.litres.ru/pub/c/cover/${i.id}.${i?.cover || "jpg"}`,
            name: i.title,
            author: i?.persons?.person?.[0]?.s_full_name || null,
            price: i.price || null
        }));
    }
}