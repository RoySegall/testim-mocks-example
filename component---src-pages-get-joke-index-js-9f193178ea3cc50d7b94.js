"use strict";(self.webpackChunktestim_mocks_examples=self.webpackChunktestim_mocks_examples||[]).push([[485,5,919,600],{8100:function(n,e,o){o.r(e);var t=o(7294),s=o(3069),a=o(2267),i=o(5681),p=o(8549);e.default=function(){return t.createElement(s.Z,{codes:{javascript:a.default,php:i.default,python:p.default},filename:"get-joke"})}},2267:function(n,e,o){o.r(e),e.default="\nconst axios = require('axios');\nconst {key} = require('./config.js')\n\nfunction getJoke() {\n\n    const options = {\n        method: 'GET',\n        url: 'https://dad-jokes.p.rapidapi.com/random/joke',\n        headers: {\n            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',\n            'x-rapidapi-key': key\n        }\n    };\n\n    return axios.request(options).then(function (response) {\n        const {setup, punchline} = response.data.body[0];\n        return `Your dad joke is: ${setup} - ${punchline}`\n    }).catch(e => {\n        console.log(e);\n    });\n}\n"},5681:function(n,e,o){o.r(e),e.default="\nclass DadJokeService {\n\n  public $client;\n\n  public function __construct() {\n    $this->client = new Client([\n      'base_uri' => 'https://dad-jokes.p.rapidapi.com',\n      'timeout' => 2.0,\n    ]);\n  }\n\n  public function getJoke() {\n    global $key;\n    $options = [\n      'headers' => [\n        'x-rapidapi-host' => 'dad-jokes.p.rapidapi.com',\n        'x-rapidapi-key' => $key,\n      ],\n    ];\n\n    $response = json_decode($this->client->get('random/joke', $options)->getBody()->getContents());\n    $jokeData = $response->body[0];\n\n    return \"Your dad joke is: {$jokeData->setup} - {$jokeData->punchline}\";\n  }\n\n}\n"},8549:function(n,e,o){o.r(e),e.default="\nimport requests\nfrom config import key\n\n\ndef get_joke():\n    response = requests.get(\n        url=\"https://dad-jokes.p.rapidapi.com/random/joke\",\n        headers={\n            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',\n            'x-rapidapi-key': key,\n        }\n    ).json()\n\n    joke = response['body'][0]\n\n    return f\"Your dad joke is: {joke['setup']} - {joke['punchline']}\"\n"}}]);
//# sourceMappingURL=component---src-pages-get-joke-index-js-9f193178ea3cc50d7b94.js.map