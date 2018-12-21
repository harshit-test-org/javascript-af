import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';

test('should query', async () => {
  const writerMock = jest.fn(() => ({
    id: 'cjpxpmpgr000c097495f1kz8w',
    username: 'pantharshit00',
    email: 'pantharshit00@gmail.com',
    githubToken: 's',
    profileUrl: 'ss',
    createdAt: '2018-12-21T07:25:09.804Z',
    updatedAt: '2018-12-21T07:25:09.804Z',
  }));

  prisma.news = jest.fn(() => ({
    id: 'cjpxpvzai000o0974ydxa80da',
    title: 'Some thing',
    slug: 'some-thing',
    content: 'some mdx thing',
    previewImage: 's',
    isFeatured: false,
    createdAt: '2018-12-21T07:32:22.501Z',
    updatedAt: '2018-12-21T07:32:22.501Z',
    writer: writerMock,
  }));

  const response = await graphqlTestCall(/* GraphQL */ `
  {
  newsItemBySlug(slug:"some-thing"){
    id
    title
    slug
    content
    previewImage
    isFeatured
    writer{
      id
      username
      email
      githubToken
      profileUrl
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
  `);
  expect(prisma.news).toHaveBeenCalledWith({ slug: 'some-thing' });
  expect(writerMock).toHaveBeenCalled();
  expect(response).toMatchSnapshot();
});
