const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Mock data
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    postCount: 15
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    postCount: 12
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    postCount: 8
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    avatar: 'https://i.pravatar.cc/150?img=4',
    postCount: 20
  },
  {
    id: '5',
    name: 'Bob Martin',
    email: 'bob@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    postCount: 10
  },
  {
    id: '6',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    avatar: 'https://i.pravatar.cc/150?img=6',
    postCount: 25
  },
  {
    id: '7',
    name: 'David Clark',
    email: 'david@example.com',
    avatar: 'https://i.pravatar.cc/150?img=7',
    postCount: 18
  },
  {
    id: '8',
    name: 'Evelyn Harris',
    email: 'evelyn@example.com',
    avatar: 'https://i.pravatar.cc/150?img=8',
    postCount: 22
  },
  {
    id: '9',
    name: 'Frank White',
    email: 'frank@example.com',
    avatar: 'https://i.pravatar.cc/150?img=9',
    postCount: 5
  },
  {
    id: '10',
    name: 'Grace King',
    email: 'grace@example.com',
    avatar: 'https://i.pravatar.cc/150?img=10',
    postCount: 14
  },
  {
    id: '11',
    name: 'Hannah Lee',
    email: 'hannah@example.com',
    avatar: 'https://i.pravatar.cc/150?img=11',
    postCount: 17
  },
  {
    id: '12',
    name: 'Isaac Moore',
    email: 'isaac@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    postCount: 30
  },
  {
    id: '13',
    name: 'Jack Wilson',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
];


const posts = [
  {
    id: '1',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Just launched my new website! Check it out!',
    image: 'https://picsum.photos/800/400?random=1',
    timestamp: new Date().toISOString(),
    commentCount: 3,
    comments: [
      {
        id: '1',
        userId: '2',
        content: 'Looks great! Congratulations!',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        userId: '3',
        content: 'Amazing work!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '2',
    userId: '2',
    userName: 'Jane Smith',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Working on a new project. Stay tuned!',
    image: 'https://picsum.photos/800/400?random=2',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '3',
        userId: '1',
        content: "Can't wait to see it!",
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '3',
    userId: '3',
    userName: 'Mike Johnson',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Exploring new photography spots this weekend!',
    image: 'https://picsum.photos/800/400?random=3',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '4',
        userId: '2',
        content: 'That sounds awesome! Enjoy!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '4',
    userId: '4',
    userName: 'Alice Brown',
    userAvatar: 'https://i.pravatar.cc/150?img=4',
    content: 'Just finished my painting. So proud of this one!',
    image: 'https://picsum.photos/800/400?random=4',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '5',
        userId: '5',
        content: 'Wow! Looks amazing!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '5',
    userId: '5',
    userName: 'Bob Martin',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Learning React! Loving it so far! 🚀',
    image: 'https://picsum.photos/800/400?random=5',
    timestamp: new Date().toISOString(),
    commentCount: 3,
    comments: [
      {
        id: '6',
        userId: '1',
        content: 'React is awesome! Good luck!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '6',
    userId: '6',
    userName: 'Charlie Davis',
    userAvatar: 'https://i.pravatar.cc/150?img=6',
    content: 'Had a blast hiking this weekend! 🌄',
    image: 'https://picsum.photos/800/400?random=6',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '7',
        userId: '2',
        content: 'Where did you go? Looks amazing!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '7',
    userId: '7',
    userName: 'David Clark',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '8',
    userId: '8',
    userName: 'Evelyn Harris',
    userAvatar: 'https://i.pravatar.cc/150?img=8',
    content: 'Baking some delicious cookies today! 🍪',
    image: 'https://picsum.photos/800/400?random=8',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '9',
        userId: '4',
        content: 'Save me some! 😋',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '9',
    userId: '9',
    userName: 'Frank White',
    userAvatar: 'https://i.pravatar.cc/150?img=9',
    content: 'Watching my favorite movie tonight! 🎬',
    image: 'https://picsum.photos/800/400?random=9',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '10',
        userId: '5',
        content: 'Enjoy! What’s the movie?',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '10',
    userId: '10',
    userName: 'Grace King',
    userAvatar: 'https://i.pravatar.cc/150?img=10',
    content: 'Starting my new job today! Wish me luck! 🙌',
    image: 'https://picsum.photos/800/400?random=10',
    timestamp: new Date().toISOString(),
    commentCount: 3,
    comments: [
      {
        id: '11',
        userId: '1',
        content: 'Congrats! You’ll do great!',
        timestamp: new Date().toISOString()
      },
      {
        id: '12',
        userId: '2',
        content: 'Best of luck! 🍀',
        timestamp: new Date().toISOString()
      }
    ]
  }
];


// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 