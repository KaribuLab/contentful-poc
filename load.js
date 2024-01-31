const contentful = require('contentful-management')
const dotenv = require('dotenv')
dotenv.config()

const client = contentful.createClient({
    accessToken: process.env.CONTENT_MANAGEMENT_ACCESS_TOKEN,
}, { type: 'plain' })

client.entry.create({
    contentTypeId: process.env.CONTENT_TYPE_ID,
    environmentId: process.env.ENVIRONMENT_ID,
    spaceId: process.env.SPACE_ID,
}, {
    fields: {
        productName: {
            'en-US': 'iPhone 12'
        },
        productDescription: {
            'en-US': {
                nodeType: 'document',
                data: {},
                content: [
                    {
                        data: {},
                        nodeType: 'paragraph',
                        content: [
                            {
                                marks: [],
                                data: {},
                                nodeType: 'text',
                                value: 'The iPhone 12 is a line of smartphones designed, developed, and marketed by Apple Inc. They were announced on October 13, 2020, as the successor to the iPhone 11 series, and released on October 23, 2020. The series comprises four models: the iPhone 12, iPhone 12 Mini, iPhone 12 Pro, and iPhone 12 Pro Max. The iPhone 12 and iPhone 12 Mini are part of the thirteenth generation of the iPhone, with the Pro models being part of the fifth generation of the iPhone. The iPhone 12 and 12 Mini are available in five colors: black, white, green, blue, and (PRODUCT)RED, while the Pro models are available in four colors: graphite, silver, gold, and pacific blue.'
                            }
                        ]
                    }
                ]
            }
        },
        productPrice: {
            'en-US': 1000
        },
    }
})
    .then((entry) => console.log(JSON.stringify(entry, null, 2)))
    .catch((err) => console.log(err))