export const exampleData = {
  'records': [
    {
      'id': 1,
      'title': 'Record title 1',
      'image': '',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'commentsIds': [1, 3]
    },
    {
      'id': 2,
      'title': 'Record title 2',
      'image': '',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'commentsIds': [1, 2, 4]
    }
  ],
  'comments': [
    {
      'id': 1,
      'record': 1,
      'text': 'Comment 1',
      'rating': 3.5,
      'email': 'example4@mail.com'
    },
    {
      'id': 1,
      'record': 1,
      'text': 'Comment 2',
      'rating': 2.5,
      'email': 'example5@mail.com'
    },
    {
      'id': 2,
      'record': 2,
      'text': 'Comment 3',
      'rating': 4.5,
      'email': 'example4@mail.com'
    },
    {
      'id': 2,
      'record': 2,
      'text': 'Comment 4',
      'rating': 5,
      'email': 'example6@mail.com'
    },

    {
      'id': 3,
      'record': 3,
      'text': 'Comment 5',
      'rating': 4,
      'email': 'example6@mail.com'
    }
  ],
  'users': [
    {
      'id': 1,
      'email': 'example1@mail.com',
      'password': 'qwerty123'
    },
    {
      'id': 2,
      'email': 'example2@mail.com',
      'password': 'qwerty123'
    }
  ]
};
