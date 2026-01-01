import axios from "axios";

export async function getSubscriptions() {
    const response = await axios.get("/api/subscription");
    return response.data;
}