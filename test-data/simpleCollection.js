export default {
  jsonapi: {
    data: [{
      type: 'articles',
      id: '1',
      meta: {
        foo: 'bar'
      },
      attributes: {
        title: 'title',
        body: 'body'
      }
    }]
  },

  normalized: {
    result: {
      articles: ['1']
    },
    entities: {
      articles: {
        '1': {
          id: '1',
          title: 'title',
          body: 'body',
          foo: 'bar'
        }
      }
    }
  }
}
