export const TwitterTemplate = `Given the recent message below:
{{recentMessages}}

Extract the following information:
- **username** (string): The username of the Twitter user, without the @ symbol (eg. elonmusk).

Respond with a JSON markdown block containing only the extracted values:

\`\`\`json
{
    "username": "<username>"
}
\`\`\`
`;
