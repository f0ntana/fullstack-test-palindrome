const url = "http://localhost:8000";

export const verifyPalindromeApi = async data => {
    const response = await fetch(`${url}/palindrome`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data })
    });
    const json = await response.json();

    return json;
};
