import { jsPDF } from 'jspdf';


export function chunkMessages(message) {
    const chunkSize = Math.ceil(message.length / 4); // Calculate the size of each chunk

    // Split the message into four parts
    const chunks = [
        message.slice(0, chunkSize),
        message.slice(chunkSize, chunkSize * 2),
        message.slice(chunkSize * 2, chunkSize * 3),
        message.slice(chunkSize * 3)
    ];

    return chunks;
}

// console.log(chunkMessages("Hello, this is a test message to be split into four parts."));


export const generatePDF = (data, alienData) => {
    const doc = new jsPDF();

    const title = `Chat with ${alienData.alienName} Alien`; // Set your title here
    const profileTitle = 'Alien Profile Details'; // Heading for alien profile details
    const chatTitle = 'Chat'; // Heading for chat
    const margin = 10;
    const lineHeight = 8; // Reduced line height
    const questionColumnWidth = 180; // Adjusted width for questions
    const responseColumnWidth = 180; // Adjusted width for responses
    const responseSpacing = 6; // Reduced space between response and next question

    const addTextWithPageBreak = (text, x, y, maxWidth) => {
        const lines = doc.splitTextToSize(text, maxWidth);
        lines.forEach((line, index) => {
            if (y + lineHeight > doc.internal.pageSize.height - margin) {
                doc.addPage();
                y = margin;
            }
            doc.text(line, x, y);
            y += lineHeight;
        });
        return y;
    };

    // Add title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    const titleWidth = doc.getTextWidth(title);
    const pageWidth = doc.internal.pageSize.width;
    const titleX = (pageWidth - titleWidth) / 2;
    doc.text(title, titleX, margin + 10); // Center the title
    doc.setFont('helvetica', 'normal'); // Reset font to normal
    let yOffset = margin + 30; // Adjust yOffset to start below the title

    // Add profile details heading
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    const profileTitleWidth = doc.getTextWidth(profileTitle);
    const profileTitleX = (pageWidth - profileTitleWidth) / 2;
    doc.text(profileTitle, profileTitleX, yOffset); // Center the profile details heading
    yOffset += lineHeight * 2;

    // Add alien profile details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const profileDetails = [
        `Name: ${alienData.alienName}`,
        `Planet: ${alienData.planetName}`,
        `Star: ${alienData.starName}`,
        `Galaxy: ${alienData.galaxyName}`,
        `Distance from Earth: ${alienData.distanceFromEarth}`,
        `Civilization Level: ${alienData.civilizationLevel}`,
        `Type: ${alienData.alienType}`,
        `Gender: ${alienData.gender}`
    ];

    profileDetails.forEach(detail => {
        yOffset = addTextWithPageBreak(detail, margin, yOffset, pageWidth - 2 * margin);
    });

    yOffset += lineHeight; // Extra space before chat section

    // Add chat heading
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    const chatTitleWidth = doc.getTextWidth(chatTitle);
    const chatTitleX = (pageWidth - chatTitleWidth) / 2;
    doc.text(chatTitle, chatTitleX, yOffset); // Center the chat heading
    yOffset += lineHeight * 2;

    // Add content with numbering
    data.forEach((item, index) => {
        const { content, query } = item;

        // Add question (query)
        doc.setFontSize(10); // Font size for questions
        doc.setFont('helvetica', 'bold');
        const number = `${index + 1}.`;
        yOffset = addTextWithPageBreak(number, margin, yOffset, pageWidth - 2 * margin);
        const questionText = `Human: ${query}`;
        yOffset = addTextWithPageBreak(questionText, margin + doc.getTextWidth(number) + 5, yOffset, questionColumnWidth);

        // Add response (content) on the next line
        doc.setFontSize(10); // Font size for responses
        doc.setFont('helvetica', 'normal');
        const responseText = `${alienData.alienName}: ${content}`;
        yOffset = addTextWithPageBreak(responseText, margin, yOffset, responseColumnWidth);

        yOffset += responseSpacing; // Reduced space between answer and next question
    });

    doc.save('data.pdf');
};

// generatePDF([
//     {
//         content: "This is the content of the first chunk.",
//         query: "This is the query for the first chunk."
//     },
//     {
//         content: "This is the content of the second chunk.",
//         query: "This is the query for the second chunk."
//     },
//     {
//         content: "This is the content of the third chunk.",
//         query: "This is the query for the third chunk."
//     },
//     {
//         content: "This is the content of the fourth chunk.",
//         query: "This is the query for the fourth chunk."
//     }
// ],
//     { alienName: 'Zorgon', planetName: 'Gliese 581g', starName: 'Gliese 581', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '20 light years', alienType: 'informative', gender: 'male' },
// )


