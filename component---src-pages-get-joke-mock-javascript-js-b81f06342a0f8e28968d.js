"use strict";(self.webpackChunktestim_mocks_examples=self.webpackChunktestim_mocks_examples||[]).push([[878],{1182:function(e,n,o){o.r(n),n.default='\nconst axios = require(\'axios\');\nconst {getJoke} = require(\'../get-joke\');\njest.mock(\'axios\');\n\ndescribe(\'Get joke\', () => {\n    let requestMock = jest.fn();\n\n    beforeAll(() => {\n        axios.request.mockImplementationOnce(requestMock);\n    });\n\n    it(\'Should return a joke number and invoke with the correct values\', async () => {\n        requestMock.mockResolvedValue({\n            data: {\n                body: [{\n                    setup: \'Why Was Six Afraid of Seven\',\n                    punchline: \'Because Seven ate Nine!\'\n                }]\n            }\n        });\n\n        const joke = await getJoke();\n        expect(joke).toBe(\'Your dad joke is: Why Was Six Afraid of Seven - Because Seven ate Nine!\');\n        expect(requestMock).toBeCalledTimes(1);\n        expect(requestMock).toBeCalledWith({\n            "method": "GET",\n            "url": "https://dad-jokes.p.rapidapi.com/random/joke",\n            "headers": {\n                "x-rapidapi-host": "dad-jokes.p.rapidapi.com",\n                "x-rapidapi-key": "your_key",\n            },\n        });\n    });\n});\n'}}]);
//# sourceMappingURL=component---src-pages-get-joke-mock-javascript-js-b81f06342a0f8e28968d.js.map