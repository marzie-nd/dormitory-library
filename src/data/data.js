let books = [
    {
        id: 1,
        name: "قدرت شروع ناقص",
        author: "جیمز کلییر",
        translator: "ایوب کوکبی",
        publisher: "نشر میلکان"
    },
    {
        id: 2,
        name: "لذت های ناممنوع",
        author: "آدام فیلیپس",
        translator: "نصرالله مرادیانی",
        publisher: "نشر بیدگل"
    },
    {
        id: 3,
        name: "شبهای روشن",
        author: "فئودور داستایوفسکی",
        translator: "سروش حبیبی",
        publisher: "نشر ماهی"
    },
    {
        id: 4,
        name: "مغازه خودکشی",
        author: "ژان تولی",
        translator: "احسان کرم ویسی",
        publisher: "نشر چشمه"
    },
    {
        id: 5,
        name: "نمی توانی به من آسیب بزنی",
        author: "دیوید گاگینز",
        translator: "میلاد بشیری",
        publisher: "نشر میلکان"
    },
    {
        id: 6,
        name: "هنر شفاف اندیشیدن",
        author: "رولف دوبلی",
        translator: "علی شهروز ستوده",
        publisher: "نشر چشمه"
    },
    {
        id: 7,
        name: "ثروتمندترین مرد بابل",
        author: "جرج سموئیل کلاسون",
        translator: "ژیلا ناظریان",
        publisher: "هورمزد"
    },
    {
        id: 8,
        name: "محکم در آغوشم بگیر",
        author: "سو جانسون",
        translator: "سمانه پرهیزکاری",
        publisher: "نشر میلکان"
    },
    {
        id: 9,
        name: "درمان شوپنهاور",
        author: "اروین یالوم",
        translator: "سپیده حبیب",
        publisher: "نشر قطره"
    },
    {
        id: 10,
        name: "افسانه عادی بودن",
        author: "گبور مته",
        translator: "آراز بارسقیان",
        publisher: "نشر میلکان"
    }
]

export const getBooks = () => {
    return books;
}

export const getBook = (id) => {
    return books.find((book) => book.id === id);
}

export const deleteBook = (id) => {
    books = books.filter((book) => book.number !== id);
}