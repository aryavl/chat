const base = 'http://localhost:3003'
export const fetcher = async() =>{
    const response = await fetch(`http://localhost:3003/login/users`);
    if (!response.ok) {
        throw new Error(`Failed to fetch user list. Status: ${response.status}`);
      }
    const result = await response.json();
    // console.log(result);
    return result
}

export const chatFetcher = async (id:string) =>{
    const response = await fetch(`http://localhost:3003/chat/${id}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch user list. Status: ${response.status}`);
      }
    const result = await response.json()
    console.log(result);
    
    return result
}

export const getChatuser = async(id:string)=>{
const response = await fetch(`http://localhost:3003/login/users/${id}`)
if (!response.ok) {
    throw new Error(`Failed to fetch user list. Status: ${response.status}`);
  }
const result = await response.json()
console.log(result);

return result
}