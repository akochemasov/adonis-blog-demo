const Factory = use('Factory')
const Post = use('App/Models/Post')
const { test, trait } = use('Test/Suite')('Delete Post')

trait('Auth/Client')
trait('Session/Client')
trait('Test/ApiClient')

test('we can delete a post', async ({ assert, client }) => {
  const post = await Factory.model('App/Models/Post').create()

  const response = await client.get(`posts/${post.id}/delete`).end()

  response.assertStatus(200)
})
