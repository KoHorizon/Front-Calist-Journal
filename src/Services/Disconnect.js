
import { deleteToken, getToken } from "./API";

export default function Disconnect() {
    deleteToken();
    window.location.reload(false);
}