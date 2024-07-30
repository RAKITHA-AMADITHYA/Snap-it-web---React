import pdfToText from 'react-pdftotext';

const PdfToText = async (pdf) => {
    try {
        let textFile = null;
        const text = await pdfToText(pdf);
        console.log(text);
        textFile = text;
        return textFile;
    } catch (error) {
        console.error("Failed to extract text from pdf");
        return null; // or handle the error as per your requirement
    }
};

export default PdfToText;
