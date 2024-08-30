exports.getPosts = (req, res, next) => {
  res.json({
    posts: [{ title: 'Name Surname', content: 'Will generatea new' }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(200).json({
    message: 'Post created successfully',
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
