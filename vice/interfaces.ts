interface QuizData {
    title: string;
    subtitle: string;
    quizId: number;
    content: Content[];
    answers: Answer[];
}

interface Answer {
    text: string;
    image: string;
    alt: string;
    combination: string;
}

interface Content {
    id: number;
    text: string;
    question: Question[];
}

interface Question {
    text: string;
    image: string;
    alt: string;
    
}