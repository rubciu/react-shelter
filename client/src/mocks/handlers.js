import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/dogs', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Max' },
        { name: 'Elvis' },
        { name: 'Yuli' },
        { name: 'Leo' },
      ])
    );
  }),
];
