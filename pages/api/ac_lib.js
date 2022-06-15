import axios from 'axios';

export default async function ACLib (req, res) {
    await axios.get('https://firestore.googleapis.com/v1/projects/fourpeaks-sc/databases/(default)/documents/Analytics')
        .then((data) => {
            console.log(data.status)
            res.status(200).json(data.data.documents);
    });
}