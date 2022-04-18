const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1
  },
  {
    title: 'No ipsum fabellas mel, an sit zril recusabo pertinax.',
    content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Ut etiam sit amet nisl purus in mollis',
    user_id: 3
  },
  
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
