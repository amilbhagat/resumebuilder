
import OpenAI from "openai";
async function generateDescriptionAI() {
    
    const openai = new OpenAI({apiKey: "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"});
    // Retrieve the keywords
    const keywords = document.getElementById('exp_keywords').value;

    // Create the prompt for the API
    const prompt = `Generate a brief description for an experience using these keywords: ${keywords}`;

    try {
        // Call the ChatGPT API
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        // Extract and display the response
        document.getElementById('exp_description').value = completion.choices[0].message.content;
    } catch (error) {
        console.error("Error generating description: ", error);
    }
}



// import OpenAI from "openai";

// const openai = new OpenAI({apiKey: "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"});

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "give me your name" }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();
