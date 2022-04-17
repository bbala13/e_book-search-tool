import { rest } from 'msw';
import dummyData from '../fixtures/dummyData/searchResults.json'

function openLibApi(path: string) {
    return `http://openlibrary.org${path}`
}

/*
  return `http://openlibrary.org/search.json?q=${query}&fields=title,first_publish_year,cover_i,author_name`
*/

export const handlers = [

    rest.get(openLibApi('/search.json'), (req, res, ctx) => {


        ///const query = req.url.searchParams
        //console.log(query)
        //success response


        return res(
            ctx.status(200),

            ctx.json(dummyData)
        );
    }),

    rest.get(openLibApi('/error'), (req, res, ctx) => {

        //error response
        const errorData = { ...dummyData, docs: [] }
        return res(
            ctx.status(404),
            ctx.json(errorData)
        );
    }),
];
