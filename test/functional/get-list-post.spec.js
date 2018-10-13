'use strict'

const { test, trait } = use('Test/Suite')('Post')
const Post = use('App/Models/Post')

trait('Test/ApiClient')

test('get list of post', async ({ client }) => {
  await Post.create({
    title: 'Adonis 181',
    boyd: 'Blog post conent'
  })

  const response = await client.get('/post').end()

  response.assertStatus(200)
  response.aseertJSONSubset([{
    title: 'Adonis 181',
    boyd: 'Blog post conent'
  }])
})
