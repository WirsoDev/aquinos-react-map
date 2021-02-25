import env from 'react-dotenv'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const getDoc = async () => {
    const doc = new GoogleSpreadsheet(env.SHEET_ID);
    
    await doc.useServiceAccountAuth({
        client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

export default getDoc