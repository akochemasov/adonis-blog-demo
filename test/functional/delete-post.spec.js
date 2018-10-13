const Factory = use('Factory')
const Post = use('App/Models/Post')
const PostController = use('App/Controllers/Http/PostController')
const { test, trait } = use('Test/Suite')('Delete Post')

test('we can delete a post', async ({ assert, browser }) => {
  // Given we have a post
  const post = await Factory.model('App/Models/Post').create()

  try {
    PostController.delete(post.id)
    assert.isTrue(false)
  } catch (e) {}
})
