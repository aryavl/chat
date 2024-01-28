const base = "http://localhost:3003";
export const fetcher = async () => {
  const response = await fetch(`http://localhost:3003/login/users`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user list. Status: ${response.status}`);
  }
  const result = await response.json();

  return result;
};

export const chatFetcher = async (id: string) => {
  const response = await fetch(`http://localhost:3003/chat/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user list. Status: ${response.status}`);
  }
  const result = await response.json();

  return result;
};

export const getChatuser = async (id: string) => {
  const response = await fetch(`http://localhost:3003/login/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user list. Status: ${response.status}`);
  }
  const result = await response.json();

  return result;
};

export const messageFetcher = async (id: string) => {
  const response = await fetch(`http://localhost:3003/message/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch message list. Status: ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export const getSingleChat=async (currentUser:string,selectedUser:string) => {
    const response = await fetch(`http://localhost:3003/chat/find/${currentUser}/${selectedUser}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch single chat . Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
}