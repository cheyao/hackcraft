import Airtable from "airtable";

export async function GET(request: Request) {
    const params = new URL(request.url).searchParams;
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appROpbCKgNm7r5ln');
    
    const id = params.get('id') || '';
    const user = await base('RSVPs').find(id);
    return new Response(JSON.stringify({username: user.fields['Username']}), {
        headers: {
            "Content-Type": "application/json",
        },
    })
}