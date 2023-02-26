import axios from "axios";

export function getFiles(dirId) {
    return async dispatch => {
        try {
            const response = await axios.get(`http://91.193.183.139:7000/drive/files`)

        }
        catch (e)
        {

        }
    }
}