export const books = [
  {
    id: "1",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    category: "Tech",
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
    available_quantity: 5,
    image_url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80"
  },
  {
    id: "2",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    category: "Tech",
    description: "The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users.",
    available_quantity: 3,
    image_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80"
  },
  {
    id: "3",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    description: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking shares his exploration of the cosmos and the laws of physics.",
    available_quantity: 8,
    image_url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80"
  },
  {
    id: "4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Story",
    description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the Roaring Twenties on Long Island.",
    available_quantity: 4,
    image_url: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80"
  },
  {
    id: "5",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    category: "Tech",
    description: "Capturing a wealth of experience about the design of object-oriented software, four top-class designers present a catalog of simple and succinct solutions to commonly occurring design problems.",
    available_quantity: 2,
    image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
  },
  {
    id: "6",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Science",
    description: "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance?",
    available_quantity: 6,
    image_url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80"
  },
  {
    id: "7",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Story",
    description: "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.",
    available_quantity: 7,
    image_url: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&q=80"
  },
  {
    id: "8",
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    category: "Science",
    description: "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There's no better guide through these mind-expanding questions than acclaimed astrophysicist Neil deGrasse Tyson.",
    available_quantity: 4,
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
  },
  {
    id: "9",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Story",
    description: "An easy & proven way to build good habits & break bad ones. Tiny Changes, Remarkable Results.",
    available_quantity: 9,
    image_url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80"
  },
  {
    id: "10",
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    category: "Tech",
    description: "Refactoring is about improving the design of existing code. It is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure.",
    available_quantity: 4,
    image_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80"
  },
  {
    id: "11",
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    description: "Professor Dawkins articulates a gene's eye view of evolution. A view which places the gene at the center of natural selection, explaining how evolutionary self-interest governs animal behavior.",
    available_quantity: 6,
    image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80"
  },
  {
    id: "12",
    title: "1984",
    author: "George Orwell",
    category: "Story",
    description: "Winston Smith rewrites history for the Ministry of Truth, but secretly rebels against Big Brother in a dystopian totalitarian society.",
    available_quantity: 5,
    image_url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80"
  }
];

export const getBookById = (id) => {
  return books.find((b) => String(b.id) === String(id)) || null;
};

export const getFeaturedBooks = () => {
  return books.slice(0, 4);
};
