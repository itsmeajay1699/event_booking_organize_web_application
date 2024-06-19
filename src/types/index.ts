type User = {
  _id: string;
  username: string;
  email: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

type CommentTwo = {
  _id: string;
  userId: string;
  eventId: string;
  content: string;
  user: User;
  event: EventPost;
  createdAt: Date;
  updatedAt: Date;
};

type Ticket = {
  _id: string;
  userId: string;
  eventId: string;
  price: number;
  user: User;
  event: EventPost;
  createdAt: Date;
  updatedAt: Date;
};

type EventPost = {
  _id: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  location: string;
  type?: string;
  price?: String;
  totalTickets: string;
  soldTickets: string;
  userId: string;
  user: User;
  tickets: Ticket[];
  comments: CommentTwo[];
  createdAt: Date;
  updatedAt: Date;
};

export type { User, CommentTwo, Ticket, EventPost };
