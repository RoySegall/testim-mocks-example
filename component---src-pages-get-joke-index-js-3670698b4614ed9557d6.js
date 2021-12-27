"use strict";(self.webpackChunktestim_mocks_examples=self.webpackChunktestim_mocks_examples||[]).push([[485],{6081:function(e,n,o){o.r(n),o.d(n,{default:function(){return r}});var s={};o.r(s);var t=o(7294),p=o(3069),r=function(){return t.createElement(p.Z,{codes:{javascript:"\nconst axios = require('axios');\nconst {key} = require('./config.js')\n\nfunction getJoke() {\n\n    const options = {\n        method: 'GET',\n        url: 'https://dad-jokes.p.rapidapi.com/random/joke',\n        headers: {\n            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',\n            'x-rapidapi-key': key\n        }\n    };\n\n    return axios.request(options).then(function (response) {\n        const {setup, punchline} = response.data.body[0];\n        return `Your dad joke is: ${setup} - ${punchline}`\n    }).catch(e => {\n        console.log(e);\n    });\n}\n",php:s.php,python:"\nimport requests\nfrom config import key\n\n\ndef get_joke():\n    response = requests.get(\n        url=\"https://dad-jokes.p.rapidapi.com/random/joke\",\n        headers={\n            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',\n            'x-rapidapi-key': key,\n        }\n    ).json()\n\n    joke = response['body'][0]\n\n    return f\"Your dad joke is: {joke['setup']} - {joke['punchline']}\"\n"},filename:"get-joke"})}}}]);
//# sourceMappingURL=component---src-pages-get-joke-index-js-3670698b4614ed9557d6.js.map